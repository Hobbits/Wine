defaultApp.filter('htmlToPlaintext', function() {
        return function(text) {
            return String(text).replace(/<(?:.|\n)*?>/gm, '');
        }
    }
);