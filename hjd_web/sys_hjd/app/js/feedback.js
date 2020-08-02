/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

app.controller('feedback', function($scope, $http) {
    $scope.num=0;
    $scope.content="";
    $scope.textchange=function(){
        $scope.num=$scope.content.length;
    }

    //提交
    $scope.submitBtn=function(){
        //参数
        var data=[
            'personalId='+user.id,//用户id
            'content='+$scope.content//内容
        ];

        //发送请求
        $http({
          url: "/sys_hjd/feedback/save",
          method: "POST",
          data: data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.info = response.data;
            if(response.data.id!=null){
                alert(response.data.msg);
                window.history.back(); 
            }
        });
    }

});