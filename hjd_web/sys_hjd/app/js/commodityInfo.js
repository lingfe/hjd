/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('commodityInfo', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;

    $scope.bindtapSohuo=function(){
        window.location.href='orderCommit.html?user='+angular.toJson(user);
    }

    //获取商品信息
    getShopInfo();
    function  getShopInfo  () {
        //参数
        var data=[
                   'id='+user.shopinfoid
        ];
        //发送请求
        $http({
            url: "/sys_hjd/shopinfo/getInfo",
            method: 'POST',
            data: data.join("&"),
            headers:{ 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(function successCallback(response) {
            $scope.commodity=response.data;

            var list=response.data.imgUrl.split(",");
            var index=0;
            setInterval(function(){
                if(index<=2){
                    $(".swiper_img").attr("src",$scope.getImg+list[index]);
                    index++;
                }else{
                    index=0;
                    $(".swiper_img").attr("src",$scope.getImg+list[index]);
                }
            },2000);
        });
    }
});