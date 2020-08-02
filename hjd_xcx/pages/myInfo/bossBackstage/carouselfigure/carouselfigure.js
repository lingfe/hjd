/**  
 *   作者:  lingfe 
 *   时间:  2017-12-21
 *   描述:  首页轮播图管理
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    files:[],
  },

  //获取轮播图数据
  getcarouselfigure: function (that) {
    //url 
    var url = app.config.basePath_web + "carouselfigure/pageList";
    //参数
    var data = {
      pageIndex: 1,
      pageNum: 10
    };

    //发送请求
    wx.request({
      url: url,
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: data,
      success: function (res) {
        console.log(res);
        that.setData({
          files: res.data.list
        });
      },
      fail: function (res) {
        console.log(res);
      }
    })
  },

  //删除轮播图
  bindtapImageDelete: function (e) {
    var that = this;
    //id
    var id = e.currentTarget.id;
    //发送请求
    wx.request({
      url: app.config.basePath_web +"carouselfigure/setDelete" ,
      data:{
        id:id,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res);
        wx.showModal({
          title: '消息',
          content: res.data.msg,
        });
        //获取轮播图数据
        that.getcarouselfigure(that);
      }
    })

  },

  //获取头图
  chooseImage: function (e) {
    var that = this;
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        if (res.tempFilePaths > 1) {
          //弹出提示
          wx.showModal({
            content: '每次只能选择1张图片！',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
          return;
        }else{
          //上传轮播图
          that.uploadInfo(that, res.tempFilePaths);
        }
      }
    })
  },

  //上传轮播图
  uploadInfo: function (that, imageArray) {
    //验证 得到图片数组
    if (imageArray.length != 0) {
      wx.uploadFile({
        url: app.config.basePath_web + "shopinfo/uploadFiles",                       //开发者服务器 url
        filePath: imageArray[0],                          //要上传文件资源的路径
        name: 'file',                                //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
        header: {                                   //HTTP 请求 Header , header 中不能设置 Referer
          "Content-Type": "application/x-www-form-urlencoded"
        },
        formData: null,                             //参数(HTTP 请求中其他额外的 form data)
        success: (resp) => {                         //接口调用成功的回调函数
          var json = JSON.parse(resp.data);
          //调用请求提交保存到数据库
          that.reqSetData(that, json.join(","));
        },
        fail: function (res) {                         //接口调用失败的回调函数
          //提示
          wx.showToast({
            title: '上传轮播图失败',
            icon: 'loading',
            duration: 3000,
          });
          return;
        },
      });
    } 
  },

  //保存轮播图
  reqSetData:function(that,imgurl){
    //发送请求
    wx.request({
      url: app.config.basePath_web + "carouselfigure/save",
      data: {
        imgUrl: imgurl,
      },
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res);
        wx.showModal({
          title: '消息',
          content: res.data.msg,
        });
        //获取轮播图数据
        that.getcarouselfigure(that);
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //获取轮播图数据
    that.getcarouselfigure(that);
  },
})