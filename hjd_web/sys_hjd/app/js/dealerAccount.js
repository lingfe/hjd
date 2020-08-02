/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('dealerAccount', function($scope, $http) {
    $scope.addAccount=function(){
        window.location.href="addAccount.html?user="+angular.toJson(user);
    }

    $scope.updateAccount=function(pwd){
        user.pwd=pwd;
        window.location.href="updateAccount.html?user="+angular.toJson(user);
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
            $scope.list = response.data;
        });
  }
});