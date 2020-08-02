/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('salesData', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    $scope.numStr=0;
    $scope.distributorName=null;
    $scope.stateStr=[{msg:"未发货",num:0},{msg:"未确认",num:1},{msg:"已结束",num:2},{msg:"已取消",num:3}];
    $scope.state=0;
    $scope.distributionTime=null;

    //经销商
    $scope.bindDistributorName=function () {
        //获取我的订单
        getMyOrder();
    }

    //获取经销商账号
    getList();
    function getList(){
        //发送请求
        $http({
          url: "/sys_hjd/distributor/getList",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            var dealerStr=[];
            for(var i=0;i<response.data.length;++i){
              dealerStr.push(response.data[i].distributorName);
            }
            $scope.dealerStr=dealerStr;
            getMyOrder();
        });
    }

    //获取我的订单
    function getMyOrder () {
        var date=new Date($scope.distributionTime);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var titmeStr=year+"-"+month+"-"+day;

        var data=[
            'distributorName='+$scope.distributorName,
            'state='+$scope.state,
            'distributionTime='+titmeStr
        ];
        //发送请求
        $http({
          url: "/sys_hjd/shoporder/getWhere",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.list=response.data;
            $scope.numStr=0;
            for(var i=0;i<response.data.length;++i){
              $scope.numStr+=response.data[i].price*response.data[i].number;
            }
        });
    }
});