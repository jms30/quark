# Copyright 2015 datawire. All rights reserved.
#
# Licensed under the Apache License, Version 2.0 (the "License");
# you may not use this file except in compliance with the License.
# You may obtain a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS,
# WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
# See the License for the specific language governing permissions and
# limitations under the License.

import pytest

from quarkc.ir import *

NAMES = [
#    (("foo",), "foo", ()),
#    (("pkg:foo",), "pkg", ("foo",)),
    (("pkg:foo.bar",), "pkg", ("foo", "bar")),
    (("pkg", "foo.bar"), "pkg", ("foo", "bar"))
]

@pytest.mark.parametrize("args,package,path", NAMES)
def test_name(args, package, path):
    n = Name(*args)
    assert n.package == package
    assert n.path == path

LOCALS = [
    (("bar", Name("pkg:x.foo")), "pkg", ("x", "foo",), "bar"),
    (("baz", Name("pkg:x.foo")), "pkg", ("x", "foo",), "baz"),
    (("bar", "pkg:foo.bar"), "pkg", ("foo", "bar"), "bar"),
    (("baz", "pkg:foo.bar"), "pkg", ("foo", "bar"), "baz")
]

@pytest.mark.parametrize("args,package,path,name", LOCALS)
def test_local(args, package, path, name):
    l = Local(*args)
    assert l.type.name.package == package
    assert l.type.name.path == path
    assert l.name == name

def test_package():
    p1 = Package(Function(Name("p1:n.fun"),
                          Name("p1:n.int"),
                          Param("a", "p1:n.int"),
                          Param("b", "p1:n.int"),
                          Return(Invoke(Name("q:n.add"), Var("a"), Var("b")))),
                 Function(Name("p1:n.f2"),
                          Name("q:n.int"),
                          Param("a", "q:n.int"),
                          Param("b", "q:n.int"),
                          Return(Invoke(Name("q:n.mul"), Var("a"), Var("b")))))
    print p1
    p = Python()
    emit(p1, p)
    print p.files

def test_nesting():
    l = Local("foo", Name("q:n.int"))
    l2 = Local("foo", Name("q:n.int"))
    stmt = While(Var("x"), l, If(Var("y"), l2, l2))
    b = Block(stmt)
    print b
    names = set()
    for c in b.collisions(names):
        print "collision:", c


from quarkc.emit import *

def test_emit():
    stmt = If(Var("x"),
              Call(Var("y"), ()),
              Call(Var("z"), ()))
    print code(stmt, Python())
    print code(stmt, Java())

    print

    stmt = If(Var("x"),
              Call(Var("y"), ()),
              stmt)
    print "======"
    print code(stmt, Python())
    print code(stmt, Java())
    print "======"

    stmt = While(Invoke(Name("pkg:n.asdf"), Send(Var("x"), "y", ())), stmt)
    print code(stmt, Java())
    print header(stmt, Python())
    print code(stmt, Python())
    print footer(stmt, Python())


def fibonacci_ir():
    return Package(
        Function(
            Name("pf:pf.fib"), Type(Name("q:q.int")),
            Param("i", Type(Name("q:q.int"))),
            Block(
                If(Invoke(Name("q:q.__eq__"), Var("i"), Number(0)),
                   Block(
                       Return(Number(0))),
                   Block(
                       If(Invoke(Name("q:q.__eq__"), Var("i"), Number(1)),
                          Block(
                              Return(Number(1))),
                          Block(
                              Return(Invoke(
                                  Name("q:q.__add__"),
                                  Invoke(Name("pf:pf.fib"),
                                         Invoke(Name("q:q.__sub__"), Var("i"), Number(1))),
                                  Invoke(Name("pf:pf.fib"),
                                         Invoke(Name("q:q.__sub__"), Var("i"), Number(2)))
                              ))
                          )
                       )
                   )
                )
            )
        )
    )


@pytest.mark.parametrize("target", [Go, Python, Java, Ruby])
def test_emit_fibonacci(target):
    t = target()
    emit(fibonacci_ir(), t)
    print list(t.files.items())


def minimal_q():
    return Package(
        Function(
            Name("minimal:mdk.init"), Type(Name("minimal:mdk.api.MDK")),
            Block(Return(Invoke(Name("minimal:mdk.api.GetMDK"))))
        ),
        Function(
            Name("minimal:mdk.start"), Type(Name("minimal:mdk.api.MDK")),
            Block(
                Local("m", Type(Name("minimal:mdk.api.MDK")), Invoke(Name("minimal:mdk.init"))),
                Evaluate(Send(Var("m"), "start", ())),
                Return(Var("m"))
            )
        ),
        Interface(Name("minimal:mdk.api.Session"))
    )

@pytest.mark.parametrize("target", [Go, Python, Java, Ruby])
def test_emit_minimal_q(target):
    t = target()
    emit(minimal_q(), t)
    print list(t.files.items())
