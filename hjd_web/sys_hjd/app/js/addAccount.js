/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('addAccount', function($scope, $http) {

    $scope.addDistributor=function(){
        var data=[
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
            if(response.data.id!=null){
                alert("添加成功!");
                 window.history.back();
            }else{
                alert(response.data.msg);
            }
        });
    }
});