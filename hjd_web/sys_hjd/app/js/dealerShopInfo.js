/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('dealerShopInfo', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    $scope.state=1;

    $scope.bindtapSetState=function(){
        $scope.state=$scope.state==0?1:0;
        getShopInfo($scope.state);
    }
    $scope.updateState=function(state,id){
        //参数
        var data=[
            'state='+state,//状态
            'id='+id,//id
            'distributorId='+user.distributorId,
            'distributorName='+user.distributorName
        ];

        //发送请求
        $http({
          url: "/sys_hjd/shopinfo/setStateUpdate",
          method: "POST",
          data: data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.info = response.data;
            getShopInfo($scope.state);
        });
    }

    //获取商品信息
    getShopInfo($scope.state);
    function getShopInfo (state) {
        //参数
        var data=[
            'pageIndex=1',
            'pageNumc=100',
            'state='+state,//状态
            'distributorId='+user.distributorId
        ];

        //发送请求
        $http({
          url: "/sys_hjd/shopinfo/getList",
          method: "POST",
          data: data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.list = response.data.list;
        });
    }
});