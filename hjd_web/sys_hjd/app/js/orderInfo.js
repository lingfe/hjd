/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
            
           // app.controller('home', function($scope,$location) { 
           //     $scope.userName=message.rows.userName;
            //})
    
app.controller('orderInfo', function($scope, $http) {

    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user=user;
    $scope.orderinfo=user.orderinfo;
});