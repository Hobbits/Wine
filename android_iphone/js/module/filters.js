defaultApp.filter("ellipsisText", function() {
    return function(input, length) {
        var maxLength = length || 28;
        if(input.length > maxLength){
            return input.substring(0,maxLength) + "…";
        } else {
            return input;
        }
    }
})