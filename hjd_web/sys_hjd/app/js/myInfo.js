    /*angularJs */
    var app = angular.module('myApp', []);
            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

    app.controller('myInfo', function($scope, $http) {
        $scope.user=user;
        $scope.dealer= false;
        //投诉建议
        $scope.feedback=function(){
            window.location.href = "feedback.html?user="+angular.toJson(user);
        }

        //输入微信号
        $scope.dealerBackstage=function(){
            $scope.dealer=$scope.dealer == false?true:false;
        }
        //登陆经销商后台
        $scope.logindealerBackstage=function(){
            //参数
            var data=[
                'pwd='+$scope.wxh //微信号
            ];

            //发送请求
            $http({
              url: "/sys_hjd/distributor/getInfo",
              method: "POST",
              data: data.join("&"),
              headers: {
                "Content-Type": "application/x-www-form-urlencoded"
              }
            }).then(function successCallback(response) {
                $scope.info = response.data;
                user.distributorName=response.data.distributorName;
                user.distributorId=response.data.id;
                if(response.data.msg == null){
                    window.location.href = "dealerBackstage.html?user="+angular.toJson(user);
                }else{
                    alert(response.data.msg);
                }
            });
        }

    });