


angular.module('auth', [], function ($locationProvider, $httpProvider) {
    var interceptor = ['$rootScope', '$q', function (scope, $q) {
        function success(response) {
            return response;
        }

        function error(response) {
            var status = response.status;
            if (status == 401) {
                try{silentLogout()}catch(e){};
                return;
            }
            // otherwise
            return $q.reject(response);

        }

        return function (promise) {
            return promise.then(success, error);
        }

    }];
    $httpProvider.responseInterceptors.push(interceptor);

});










var defaultApp=angular.module("defaultApp", ['auth','ngTouch','ngSanitize']);

defaultApp.config(function($httpProvider) {
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
    $httpProvider.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
});


/*动画效果参数(data-trans)参考http://doc.appcan.cn/dev_appendix.html#dev12 */
defaultApp.directive("templarlink",['$window', function($window){
    return {
        restrict: 'A',
        link: function (scope,element,attrs) {
            element.bind("mousedown",function(){
                try{zy_touch('btn-act1');}catch(e){}
                var animDuration=250;
                var href=attrs.templarlink;
                var inAnimiId=attrs.trans ||'0';
                var nl = attrs.needlogin;
                var searchStr= attrs.search ? '?'+attrs.search : '';
                var getFilename=function(input){
                    var output = input.substr(0, input.lastIndexOf('.')) || input;
                    return output;
                }
                if(angular.isDefined(window.uexWindow)){
                    if(href=="back"){
                        window.uexWindow.close('-1',animDuration)
                    }else if(href=="realBack"){
                        uexWindow.back();
                    }else{
                        var islog=!notlogin() || false;


                        if(href=='account.html' && islog){
                            window.uexWindow.open('center.html','0','center.html',2,'','','0');
                            return;
                        }
                        if(nl && !islog){
                            /*需要登录*/
                            window.uexWindow.alert("","请先登录","确定");
                            window.uexWindow.open('account.html','0','account.html',11,'','','4');
                        } else {
                            var refreshNum='0';
                            var truehref=href;
                            if(searchStr){
                                refreshNum='4';
                                truehref=href+encodeURI(searchStr);
                            }
                            window.uexWindow.open(href,'0',truehref,inAnimiId,'','',refreshNum);
                        }
                    }

                }else{
                    if(href=="back"){
                        window.history.back();
                    }else{
                        window.location.href=href;
                    }

                }


            })
        }
    }
}]);

defaultApp.directive("goToArticle", function() {
    return {
        restrict: "A",
        link: function(scope, element, attrs) {
            element.bind("mousedown", function() {
                uexWindow.open("Article",0, "Article.html?id="+attrs.goToArticle, 2,"","","4");
            })
        }
    }
})
