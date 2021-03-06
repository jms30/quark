var _qrt = require("quark/quark_runtime.js");
_qrt.plugImports("interfaces");
var quark = require('quark').quark;
exports.quark = quark;



// CLASS A
function A() {
    this.__init_fields__();
}
exports.A = A;

function A__init_fields__() {}
A.prototype.__init_fields__ = A__init_fields__;
_qrt.lazyStatic(function(){A.interfaces_A_ref = null;});
function A_foo() { throw TypeError, '`A.foo` is an abstract method'; }
A.prototype.foo = A_foo;

function A_bar() {}
A.prototype.bar = A_bar;

// CLASS B
function B() {
    this.__init_fields__();
}
exports.B = B;

function B__init_fields__() {}
B.prototype.__init_fields__ = B__init_fields__;
_qrt.lazyStatic(function(){B.interfaces_B_ref = null;});
function B_bar() {}
B.prototype.bar = B_bar;

// CLASS C
function C() {
    this.__init_fields__();
}
exports.C = C;

function C__init_fields__() {}
C.prototype.__init_fields__ = C__init_fields__;
_qrt.lazyStatic(function(){C.interfaces_C_ref = null;});
function C_foo() {}
C.prototype.foo = C_foo;

// CLASS T1
function T1() {
    this.__init_fields__();
}
exports.T1 = T1;

function T1__init_fields__() {}
T1.prototype.__init_fields__ = T1__init_fields__;
_qrt.lazyStatic(function(){T1.interfaces_T1_ref = null;});
function T1_foo() {}
T1.prototype.foo = T1_foo;

function T1__getClass() {
    return "interfaces.T1";
}
T1.prototype._getClass = T1__getClass;

function T1__getField(name) {
    return null;
}
T1.prototype._getField = T1__getField;

function T1__setField(name, value) {}
T1.prototype._setField = T1__setField;

function T1_bar() {}
T1.prototype.bar = T1_bar;

// CLASS T2
function T2() {
    this.__init_fields__();
}
exports.T2 = T2;

function T2__init_fields__() {}
T2.prototype.__init_fields__ = T2__init_fields__;
_qrt.lazyStatic(function(){T2.interfaces_T2_ref = null;});
function T2_foo() {}
T2.prototype.foo = T2_foo;

function T2__getClass() {
    return "interfaces.T2";
}
T2.prototype._getClass = T2__getClass;

function T2__getField(name) {
    return null;
}
T2.prototype._getField = T2__getField;

function T2__setField(name, value) {}
T2.prototype._setField = T2__setField;

function T2_bar() {}
T2.prototype.bar = T2_bar;

// CLASS T3
function T3() {
    this.__init_fields__();
}
exports.T3 = T3;

function T3__init_fields__() {}
T3.prototype.__init_fields__ = T3__init_fields__;
_qrt.lazyStatic(function(){T3.interfaces_T3_ref = null;});
function T3_foo() {}
T3.prototype.foo = T3_foo;

function T3__getClass() {
    return "interfaces.T3";
}
T3.prototype._getClass = T3__getClass;

function T3__getField(name) {
    return null;
}
T3.prototype._getField = T3__getField;

function T3__setField(name, value) {}
T3.prototype._setField = T3__setField;

function T3_bar() {}
T3.prototype.bar = T3_bar;

// CLASS T4
function T4() {
    this.__init_fields__();
}
exports.T4 = T4;

function T4__init_fields__() {}
T4.prototype.__init_fields__ = T4__init_fields__;
_qrt.lazyStatic(function(){T4.interfaces_T4_ref = null;});
function T4__getClass() {
    return "interfaces.T4";
}
T4.prototype._getClass = T4__getClass;

function T4__getField(name) {
    return null;
}
T4.prototype._getField = T4__getField;

function T4__setField(name, value) {}
T4.prototype._setField = T4__setField;

function T4_bar() {}
T4.prototype.bar = T4_bar;

function T4_foo() {}
T4.prototype.foo = T4_foo;

// CLASS T5
function T5() {
    this.__init_fields__();
}
exports.T5 = T5;

function T5__init_fields__() {}
T5.prototype.__init_fields__ = T5__init_fields__;
_qrt.lazyStatic(function(){T5.interfaces_T5_ref = null;});
function T5_foo() {}
T5.prototype.foo = T5_foo;

function T5__getClass() {
    return "interfaces.T5";
}
T5.prototype._getClass = T5__getClass;

function T5__getField(name) {
    return null;
}
T5.prototype._getField = T5__getField;

function T5__setField(name, value) {}
T5.prototype._setField = T5__setField;

function T5_bar() {}
T5.prototype.bar = T5_bar;

// CLASS Foo
function Foo() {
    this.__init_fields__();
}
exports.Foo = Foo;

function Foo__init_fields__() {}
Foo.prototype.__init_fields__ = Foo__init_fields__;
_qrt.lazyStatic(function(){Foo.interfaces_Foo_ref = null;});
_qrt.lazyStatic(function(){Foo.quark_List_quark_String__ref = null;});
function Foo_m1() { throw TypeError, '`Foo.m1` is an abstract method'; }
Foo.prototype.m1 = Foo_m1;

function Foo_m2(arg) { throw TypeError, '`Foo.m2` is an abstract method'; }
Foo.prototype.m2 = Foo_m2;

function Foo_m3(args) { throw TypeError, '`Foo.m3` is an abstract method'; }
Foo.prototype.m3 = Foo_m3;

// CLASS Bar
function Bar() {
    this.__init_fields__();
}
exports.Bar = Bar;

function Bar__init_fields__() {}
Bar.prototype.__init_fields__ = Bar__init_fields__;
_qrt.lazyStatic(function(){Bar.interfaces_Bar_quark_Object__ref = null;});
function Bar_m1() { throw TypeError, '`Bar.m1` is an abstract method'; }
Bar.prototype.m1 = Bar_m1;

function Bar_m2(arg) { throw TypeError, '`Bar.m2` is an abstract method'; }
Bar.prototype.m2 = Bar_m2;

function Bar_m3(args) { throw TypeError, '`Bar.m3` is an abstract method'; }
Bar.prototype.m3 = Bar_m3;

// CLASS Baz
function Baz() {
    this.__init_fields__();
}
exports.Baz = Baz;

function Baz__init_fields__() {}
Baz.prototype.__init_fields__ = Baz__init_fields__;
_qrt.lazyStatic(function(){Baz.interfaces_Baz_ref = null;});
function Baz_m2(arg) {}
Baz.prototype.m2 = Baz_m2;

function Baz_m1() {}
Baz.prototype.m1 = Baz_m1;

function Baz_m3(args) {}
Baz.prototype.m3 = Baz_m3;

function Baz__getClass() {
    return "interfaces.Baz";
}
Baz.prototype._getClass = Baz__getClass;

function Baz__getField(name) {
    return null;
}
Baz.prototype._getField = Baz__getField;

function Baz__setField(name, value) {}
Baz.prototype._setField = Baz__setField;

// CLASS RazBar
function RazBar() {
    this.__init_fields__();
}
exports.RazBar = RazBar;

function RazBar__init_fields__() {}
RazBar.prototype.__init_fields__ = RazBar__init_fields__;
_qrt.lazyStatic(function(){RazBar.interfaces_RazBar_ref = null;});

// CLASS RazFaz
function RazFaz() {
    this.__init_fields__();
}
exports.RazFaz = RazFaz;

function RazFaz__init_fields__() {}
RazFaz.prototype.__init_fields__ = RazFaz__init_fields__;
_qrt.lazyStatic(function(){RazFaz.interfaces_RazFaz_quark_Object__ref = null;});

// CLASS BazBar
function BazBar() {
    this.__init_fields__();
}
exports.BazBar = BazBar;

function BazBar__init_fields__() {}
BazBar.prototype.__init_fields__ = BazBar__init_fields__;
_qrt.lazyStatic(function(){BazBar.interfaces_BazBar_ref = null;});
function BazBar_m1() {}
BazBar.prototype.m1 = BazBar_m1;

function BazBar_m2(arg) {}
BazBar.prototype.m2 = BazBar_m2;

function BazBar_m3(args) {}
BazBar.prototype.m3 = BazBar_m3;

function BazBar__getClass() {
    return "interfaces.BazBar";
}
BazBar.prototype._getClass = BazBar__getClass;

function BazBar__getField(name) {
    return null;
}
BazBar.prototype._getField = BazBar__getField;

function BazBar__setField(name, value) {}
BazBar.prototype._setField = BazBar__setField;

// CLASS BazFaz
function BazFaz() {
    this.__init_fields__();
}
exports.BazFaz = BazFaz;

function BazFaz__init_fields__() {}
BazFaz.prototype.__init_fields__ = BazFaz__init_fields__;
_qrt.lazyStatic(function(){BazFaz.interfaces_BazFaz_quark_Object__ref = null;});
function BazFaz_m1() {}
BazFaz.prototype.m1 = BazFaz_m1;

function BazFaz_m2(arg) {}
BazFaz.prototype.m2 = BazFaz_m2;

function BazFaz_m3(args) {}
BazFaz.prototype.m3 = BazFaz_m3;

function BazFaz__getClass() {
    return "interfaces.BazFaz<quark.Object>";
}
BazFaz.prototype._getClass = BazFaz__getClass;

function BazFaz__getField(name) {
    return null;
}
BazFaz.prototype._getField = BazFaz__getField;

function BazFaz__setField(name, value) {}
BazFaz.prototype._setField = BazFaz__setField;

// CLASS IConstants
function IConstants() {
    this.__init_fields__();
}
exports.IConstants = IConstants;

function IConstants__init_fields__() {}
IConstants.prototype.__init_fields__ = IConstants__init_fields__;
_qrt.lazyStatic(function(){IConstants.FOO = "foo";});
_qrt.lazyStatic(function(){IConstants.interfaces_IConstants_ref = null;});

// CLASS Constants
function Constants() {
    this.__init_fields__();
}
exports.Constants = Constants;

function Constants__init_fields__() {}
Constants.prototype.__init_fields__ = Constants__init_fields__;
_qrt.lazyStatic(function(){Constants.interfaces_Constants_ref = null;});
_qrt.lazyStatic(function(){Constants.FOO = "foo";});
function Constants__getClass() {
    return "interfaces.Constants";
}
Constants.prototype._getClass = Constants__getClass;

function Constants__getField(name) {
    if (_qrt.equals((name), ("FOO"))) {
        return IConstants.FOO;
    }
    return null;
}
Constants.prototype._getField = Constants__getField;

function Constants__setField(name, value) {}
Constants.prototype._setField = Constants__setField;

var quark_ffi_signatures_md; _qrt.lazyImport('../quark_ffi_signatures_md/index.js', function(){
    quark_ffi_signatures_md = require('../quark_ffi_signatures_md/index.js');
    exports.quark_ffi_signatures_md = quark_ffi_signatures_md;
});



_qrt.pumpImports("interfaces");
