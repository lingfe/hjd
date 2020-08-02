/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('dealerBackstage', function($scope, $http) {

    $scope.dealerShopInfo=function(){
        window.location.href = "dealerShopInfo.html?user="+angular.toJson(user);
    }

    $scope.dealerOrder=function(){
        window.location.href="dealerOrder.html?user="+angular.toJson(user);
    }
});