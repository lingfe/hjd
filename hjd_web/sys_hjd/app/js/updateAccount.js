/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('updateAccount', function($scope, $http) {
    $scope.updateDistributor=function(){
        var data=[
            'id='+$scope.distributorId,
            "pwd="+$scope.pwd,
            "distributorName="+$scope.distributorName
        ];
        //发送请求
        $http({
          url: "/sys_hjd/distributor/saveOrUpdate",
          method: "POST",
          data:data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.form = response.data;
            if(response.data.pwd==$scope.pwd){
                alert("修改成功!");
                 window.history.back();
            }else{
                alert(response.data.msg);
            }
        });

    }
    //获取经销商账号
    getInfo();
 function getInfo(){
        var data=[
            "pwd="+user.pwd
        ];
        //发送请求
        $http({
          url: "/sys_hjd/distributor/getInfo",
          method: "POST",
          data:data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.form = response.data;
            $scope.distributorId=response.data.id;
            $scope.distributorName=response.data.distributorName;
            $scope.pwd=response.data.pwd;
        });
  }
});