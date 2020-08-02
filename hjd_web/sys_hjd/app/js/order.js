
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
    
app.controller('order', function($scope, $http) {

    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user=user;
    var personalId=user.id;

    //搜索
    $scope.changeSearch=function(){
      var list = $scope.toList;
      var tolist = [];
      if ($scope.searchStr == null || $scope.searchStr == '') {
        $scope.orderList=list;
        return;
      }

      for (var i = 0; i < list.length; ++i) {
        if (list[i].title.indexOf($scope.searchStr) != -1) {
          tolist.push(list[i]);
        } else if (list[i].distributorName.indexOf($scope.searchStr)!=-1){
          tolist.push(list[i]);
        } else if (list[i].address.indexOf($scope.searchStr)!=-1){
          tolist.push(list[i]);
        }
      }

      $scope.orderList=tolist;
    }

    //获取我的订单
    getMyOrder();
    function getMyOrder(){
      var data=[
            'personalId='+personalId
      ];

      //发送请求
      $http({
        url: "/sys_hjd/shoporder/getWherePersonalIdList",
        method: "POST",
        data: data.join("&"),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        } 
     }).then(function successCallback(response) { 
        $scope.orderList=response.data;
        $scope.toList=response.data;
     });
    }

});