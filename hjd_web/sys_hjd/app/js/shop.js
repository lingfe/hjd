/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('shop', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    $scope.bindtapShopinfo=function(id,name){
        user.distributorName=name;
        user.distributorId=id;
        window.location.href = "shopInfo.html?user="+angular.toJson(user);
    }
    //搜索
    $scope.changeSearch=function(){
      var list = $scope.toList;
      var tolist = [];
      if ($scope.searchStr == null || $scope.searchStr == '') {
        $scope.list=list;
        return;
      }

      for (var i = 0; i < list.length; ++i) {
        if (list[i].distributorName.indexOf($scope.searchStr) != -1) {
          tolist.push(list[i]);
        } 
      }

      $scope.list=tolist;
    }

  //获取经销商账号
  getList();
  function getList () {
        //发送请求
        $http({
          url: "/sys_hjd/distributor/getList",
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.list = response.data;
            $scope.toList=response.data;
        });
  }

});