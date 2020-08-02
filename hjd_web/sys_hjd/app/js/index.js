/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('index', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    //跳转
    $scope.orderUrl=function(url){
        window.location.href = "order.html?user="+angular.toJson(user);
    }
    $scope.myinfoUrl=function(url){
        window.location.href = "myInfo.html?user="+angular.toJson(user);
    }
    $scope.bindtap_order=function(){
        window.location.href = "shop.html?user="+angular.toJson(user);
    }
     //获取轮播图数据
     getcarouselfigure();
     function getcarouselfigure (){
        //参数
        var data=[
                   'openid='+$scope.openid,//电话号码
                    'username='+$scope.username
        ];
        //发送请求
        $http({
            url: "/sys_hjd/carouselfigure/pageList",
            method: 'POST',
            data: data.join("&"),
            headers:{ 
                'Content-Type': 'application/x-www-form-urlencoded'
            },
        }).then(function successCallback(response) {
            var list=response.data.list;
            var index=0;
            setInterval(function(){
                if(index<=2){
                    $(".swiper_img").attr("src",list[index].imgUrl);
                    $(".swiper_img").attr("id",list[index].id);
                    index++;
                }else{
                    index=0;
                    $(".swiper_img").attr("src",list[index].imgUrl);
                    $(".swiper_img").attr("id",list[index].id);
                }
            },2000);
        });
    } 

    //获取商品信息
    getShopInfo();
    function getShopInfo() {
        //参数
        var data=[
            'state=0',//状态
            'pageIndex=1',//第几页
            'pageNum=6' //数量
        ];

        //发送请求
        $http({
          url: "/sys_hjd/shopinfo/getList",
          method: "POST",
          data: data.join("&"),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.shoplist = response.data.list;
        });
    }
});

