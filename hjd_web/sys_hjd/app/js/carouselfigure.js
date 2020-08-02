/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));
    
app.controller('carouselfigure', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    //删除轮播图
    $scope.bindtapImageDelete=function (id) {
        //参数
        var data = [
            'id='+id
         ];

        //发送请求
        $http({
          url: "/sys_hjd/carouselfigure/setDelete",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            alert(response.data.msg);
            //获取轮播图数据
            getcarouselfigure();
        });
    }

      //获取轮播图数据
    getcarouselfigure();
    function  getcarouselfigure () {
        //参数
        var data = [
            'pageIndex=1',
            'pageNum=100'
         ];

        //发送请求
        $http({
          url: "/sys_hjd/carouselfigure/pageList",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            $scope.files=response.data.list;
        });
    }

        //上传轮播图
        var arrImgInfo='';
        layui.use(['form','upload'], function(){
          var form = layui.form;
          layui.upload({
            url: '/sys_hjd/shopinfo/uploadFiles'
            ,elem: '#test0' //指定原始元素，默认直接查找class="layui-upload-file"
            ,method: 'POST' //上传接口的http类型
            ,success: function(res){
              arrImgInfo=res[0];
              //保存轮播图
              reqSetData();
            }
          });
        });

      //保存轮播图
    function  reqSetData(){
        //参数
        var data = [
            'imgUrl='+arrImgInfo
         ];

        //发送请求
        $http({
          url: "/sys_hjd/carouselfigure/save",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            alert(response.data.msg);
            //获取轮播图数据
            getcarouselfigure();
        });

    }
});


