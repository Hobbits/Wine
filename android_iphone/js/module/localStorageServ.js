    var localStorageServ = {
        convert : function(value,dir){
            var finalValue = null;
            if(value){
                if(typeof(value) != "object"){
                    finalValue = value;
                    if(dir=="output"){
                        try{finalValue = JSON.parse(value);}catch(e){
                            finalValue = value;
                        }
                    }
                } else if(typeof(value) == 'object'){
                    finalValue = JSON.stringify(value);
                }
            }
            return finalValue;
        },

        add : function(key, value){
            localStorage.setItem(key, this.convert(value,'input'));
        },
        get : function(key){
            var getString = localStorage.getItem(key);
            return this.convert(getString,'output');
        },
        delete : function(key){
            try{
                localStorage.removeItem(key)
            } catch(e){
                return false;
            };
            return true;
        }
    }



