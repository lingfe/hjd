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

  //获取商品信息
  getShopInfo();
  function getShopInfo  () {
      var data=[
            'distributorId='+user.distributorId,
            'state=0',
            'pageIndex=1',
            'pageNum=300'
      ];
        //发送请求
        $http({
          url: "/sys_hjd/shopinfo/getList",
          method: "POST",
          data:data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.shoplist = response.data.list;
            $scope.toList=response.data.list;
        });
  }

});