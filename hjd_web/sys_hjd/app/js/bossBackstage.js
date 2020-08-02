/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('bossBackstage', function($scope, $http) {
    //销售数据
    $scope.bindtapSalesData=function(){
        window.location.href='salesData.html?user='+angular.toJson(user);
    }
    //首页轮播图
    $scope.bindtapcarouselfigure=function(){
        window.location.href='carouselfigure.html?user='+angular.toJson(user);
    }
    //商品源
    $scope.bindtapCommoitidy=function(){
        window.location.href="commoditySource.html?user="+angular.toJson(user);
    }
    //经销商账号管理
    $scope.dealerAccount=function(){
        window.location.href="dealerAccount.html?user="+angular.toJson(user);
    }
    //投诉建议
    $scope.feedbackList=function(){
        window.location.href="feedbackList.html?user="+angular.toJson(user);
    }
    $scope.dealerShopInfo=function(){
        window.location.href = "dealerShopInfo.html?user="+angular.toJson(user);
    }

    $scope.dealerOrder=function(){
        window.location.href="dealerOrder.html?user="+angular.toJson(user);
    }
});