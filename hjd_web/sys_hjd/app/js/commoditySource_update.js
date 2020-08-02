/*angularJs */
var app = angular.module('myApp', []);

            var urlValue='';
            //取得整个地址栏
            var href = location.href; 
            //此处只有一个参数，先截取参数值（等号后的值）。
            urlValue = href.substr(href.indexOf("=") + 1);
            //传参会转码，所以先解码，再把字符串string转对象
            var user=angular.fromJson(decodeURI(urlValue));

    
app.controller('commoditySource_update', function($scope, $http) {
    $scope.getImg="https://static.daho.club/static/upload/hjd/shopImg/";
    $scope.user = user;
    $scope.LAY_demo_upload0=false;
    $scope.LAY_demo_upload1=false;
    $scope.LAY_demo_upload2=false;
    $scope.form={
      title:'11111',//商品名称
      imgUrl:null,//商品头图
      infoImgUrl:null,//商品图片详细
      price:null,//价格
      remark:null//商品介绍
    };

    //根据id获取商品信息
    getShopInfo();
    function getShopInfo () {
        var data=[
            'id='+user.shopInfoid
        ];
        $http({
          url: "/sys_hjd/shopinfo/getInfo",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            if(response.data!=null){
                $scope.form={
                      id:response.data.id,
                      title:response.data.title,//商品名称
                      imgUrl:response.data.imgUrl,//商品头图
                      infoImgUrl:response.data.infoImgUrl,//商品图片详细
                      price:response.data.price,//价格
                      remark:response.data.remark//商品介绍
                }
                arrImg=response.data.imgUrl.split(",");
                arrImgInfo=response.data.infoImgUrl;
                  if(arrImg.length>0){
                    $("#upload0").addClass('true');
                      LAY_demo_upload0.src = imgurl+arrImg[0];
                    $("#test0").addClass('false');
                  }
                  if(arrImg.length>1){
                    $("#upload1").addClass('true');
                      LAY_demo_upload1.src = imgurl+arrImg[1];
                    $("#test1").addClass('false');
                  } 
                  if(arrImg.length>2){
                    $("#upload2").addClass('true');
                      LAY_demo_upload2.src = imgurl+arrImg[2];
                    $("#test2").addClass('false');
                  }
                  if(arrImgInfo!=null){
                    $("#upload3").addClass('true');
                      LAY_demo_upload3.src = imgurl+arrImgInfo;
                    $("#test3").addClass('false');
                  }
            }

        });
    }
  

    //bindtapImageDelete
    $scope.bindtapImageDelete=function(num){
      if(num==0){
        $("#upload0").removeClass('true');
        arrImg.splice(0,1);
        $("#test0").removeClass('false');
      }else if(num==1){
        $("#upload1").removeClass('true');
        arrImg.splice(1,1);
        $("#test1").removeClass('false');
      }else if(num==2){
        $("#upload2").removeClass('true');
        arrImg.splice(2,1);
        $("#test2").removeClass('false');
      }else if(num==3){
        $("#upload3").removeClass('true');
        arrImgInfo='';
        $("#test3").removeClass('false');
      }
    }

    //提交修改
    $scope.submit=function(){
      var data=[
        "id="+$scope.form.id,
        "title="+$scope.form.title,
        'imgUrl='+arrImg.join(","),
        'infoImgUrl='+arrImgInfo,
        'price='+$scope.form.price,
        'remark='+$scope.form.remark
      ];
        //发送请求
        $http({
          url: "/sys_hjd/shopinfo/setUpdate",
          method: "POST",
          data:data.join('&'),
          headers: {
            "Content-Type": "application/x-www-form-urlencoded"
          }
        }).then(function successCallback(response) {
            if(response.data!=null){
              alert('修改成功!');
              window.history.back(); 
            }
        });
    }
});

        var imgurl="https://static.daho.club/static/upload/hjd/shopImg/";
        var arrImg=[];
        var arrImgInfo='';
        layui.use(['form','upload'], function(){
          var form = layui.form;
          layui.upload({
            url: '/sys_hjd/shopinfo/uploadFiles'
            ,elem: '#test0' //指定原始元素，默认直接查找class="layui-upload-file"
            ,method: 'POST' //上传接口的http类型
            ,success: function(res){
              $("#upload0").addClass('true');
              arrImg[0]=res[0];
              LAY_demo_upload0.src = imgurl+res[0];
              $("#test0").addClass('false');
            }
          });



          layui.upload({
            url: '/sys_hjd/shopinfo/uploadFiles'
            ,elem: '#test1' //指定原始元素，默认直接查找class="layui-upload-file"
            ,method: 'POST' //上传接口的http类型
            ,success: function(res){
              $("#upload1").addClass('true');
              arrImg[1]=res[0];
              LAY_demo_upload1.src = imgurl+res[0];
              $("#test1").addClass('false');
            }
          });

          layui.upload({
            url: '/sys_hjd/shopinfo/uploadFiles'
            ,elem: '#test2' //指定原始元素，默认直接查找class="layui-upload-file"
            ,method: 'POST' //上传接口的http类型
            ,success: function(res){
              $("#upload2").addClass('true');
              arrImg[2]=res[0];
              LAY_demo_upload2.src = imgurl+res[0];
              $("#test2").addClass('false');
            }
          });

          layui.upload({
            url: '/sys_hjd/shopinfo/uploadFiles'
            ,elem: '#test3' //指定原始元素，默认直接查找class="layui-upload-file"
            ,method: 'POST' //上传接口的http类型
            ,success: function(res){
              $("#upload3").addClass('true');
              arrImgInfo=res[0];
              LAY_demo_upload3.src = imgurl+res[0];
              $("#test3").addClass('false');
            }
          });
        }); 