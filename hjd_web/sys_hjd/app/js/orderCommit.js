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
    
app.controller('orderCommit', function($scope, $http) {

    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user=user;

    //提交订单
    $scope.submitOrder=function(){
        var date=new Date($scope.distributionTime);
        var year = date.getFullYear();
        var month = date.getMonth()+1;
        var day = date.getDate();
        var titmeStr=year+"-"+month+"-"+day;

        var data=[
            'distributorId='+$scope.commodity.distributorId,
            'distributorName='+$scope.commodity.distributorName,
            'shopInfoid='+$scope.commodity.id,
            'title='+$scope.commodity.title,
            'price='+$scope.commodity.price,
            'imgUrl='+$scope.commodity.infoImgUrl,
            'personalId='+user.id,
            'phone='+$scope.phone,
            'distributionTime='+titmeStr,
            'address='+$scope.address,
            'number='+$scope.number,
            'remark='+$scope.remark
        ];
      //发送请求
      $http({
        url: "/sys_hjd/shoporder/save",
        method: "POST",
        data: data.join("&"),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        } 
     }).then(function successCallback(response) { 
        alert(response.data.msg);
         window.history.back(); 
     });
    }

  //获取商品信息
  getShopInfo();
  function getShopInfo  () {
    var data=[
        "id="+user.shopinfoid
    ];
      //发送请求
      $http({
        url: "/sys_hjd/shopinfo/getInfo",
        method: "POST",
        data: data.join("&"),
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        } 
     }).then(function successCallback(response) { 
        $scope.commodity=response.data;
     });
    }
});
