module Quark
require "datawire-quark-core"
def self.fancy_primitive_md; MODULE_fancy_primitive_md; end
module MODULE_fancy_primitive_md
# require_relatve "builtin/reflect.rb"

class CLASS_builtin_List_builtin_Object_ < ::Quark.builtin.reflect.QuarkClass
    attr_accessor 

    
    def initialize()
        
        super("builtin.List<builtin.Object>")
        (self).name = "builtin.List"
        (self).parameters = DatawireQuarkCore::List.new(["builtin.Object"])
        (self).fields = DatawireQuarkCore::List.new([])
        (self).methods = DatawireQuarkCore::List.new([])

        nil
    end



    
    def construct(args)
        
        return ::Quark.DatawireQuarkCore::List.new()

        nil
    end

    def _getClass()
        
        return nil

        nil
    end

    def _getField(name)
        
        return nil

        nil
    end

    def _setField(name, value)
        
        nil

        nil
    end

    def __init_fields__()
        

        nil
    end


end; def self.builtin_List_builtin_Object_; CLASS_builtin_List_builtin_Object_; end

class CLASS_Root < Object
    attr_accessor 

    
    def initialize()
        self.__init_fields__

        nil
    end



    
    def _getClass()
        
        return nil

        nil
    end

    def _getField(name)
        
        return nil

        nil
    end

    def _setField(name, value)
        
        nil

        nil
    end

    def __init_fields__()
        

        nil
    end


end; def self.Root; CLASS_Root; end
end # module MODULE_fancy_primitive_md
end # module Quark
