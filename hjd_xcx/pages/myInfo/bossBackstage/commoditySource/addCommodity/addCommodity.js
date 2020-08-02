/**  
 *   作者:  lingfe 
 *   时间:  2017-12-19
 *   描述:  添加商品
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    files_info:[],
    files: [],
    form:{
      title:null,//商品名称
      imgUrl:null,//商品头图
      infoImgUrl:null,//商品图片详细
      price:null,//价格
      remark:null//商品介绍
    }
  },

  //商品名称
  inputName:function(e){
    this.setData({
      "form.title":e.detail.value
    });
  },
  
  //价格
  inputPrices:function(e){
    this.setData({
      "form.price": e.detail.value
    });
  },

  //商品介绍
  inputRemark:function(e){
    this.setData({
      "form.remark": e.detail.value
    });
  },

  //请求
  reqSetData:function(imgfiles){ 
    var that=this;
    var form=that.data.form;
    form.imgUrl=imgfiles;

    //发送请求保存商品信息
    wx.request({
      url: app.config.basePath_web +"shopinfo/save",
      data:form,
      method:"POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res);
        if (!app.checkInput(res.data)){
          //提示
          wx.showToast({
            title: '添加商品成功!',
            icon: 'ok',
            duration: 1000,
            success: function (e) {
              //得到打开的页面
              var pages = getCurrentPages();
              var currPage = pages[pages.length - 1];  //当前页面
              var prevPage = pages[pages.length - 2]; //上一个页面

              //返回上一页
              wx.navigateBack();
            }
          });
          //初始化
          that.setData({
            files:[],
            files_info:[],
            form:{}
          });
        }
      },
      fail:function(res){
        console.log(res);
      }
    })
  },

  //提交表单
  submit:function(e){
     var that=this;
     //验证
     
     //上传头图
     that.upload(that);
     //上传商品详细图片
     that.uploadInfo(that);
  },

  //上传商品详细图片
  uploadInfo: function (that) {
    //得到图片数组
    var imageArray = that.data.files_info;

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
        that.setData({
          "form.infoImgUrl":json.join(","),
        });
      },
      fail: function (res) {                         //接口调用失败的回调函数
        //提示
        wx.showToast({
          title: '上传商品详细图片失败',
          icon: 'loading',
          duration: 3000,
        });
        return;
      },
    });
  },

  //头图上传
  upload:function(that){

    //得到图片数组
    var imageArray=that.data.files;

    //上传图片数组
    uploadimg(imageArray.splice(0, 1), [], imageArray);

    //多张图片上传
    function uploadimg(path, pathArr, dataArr) {
      wx.uploadFile({
        url: app.config.basePath_web +"shopinfo/uploadFiles",                       //开发者服务器 url
        filePath: path[0],                          //要上传文件资源的路径
        name: 'file',                                //文件对应的 key , 开发者在服务器端通过这个 key 可以获取到文件二进制内容
        header: {                                   //HTTP 请求 Header , header 中不能设置 Referer
          "Content-Type": "application/x-www-form-urlencoded"
        },
        formData: null,                             //参数(HTTP 请求中其他额外的 form data)
        success: (resp) => {                         //接口调用成功的回调函数
          var json = JSON.parse(resp.data);
          pathArr.push(json[0])
          if (dataArr.length > 0) {
            //递归
            uploadimg(dataArr.splice(0, 1), pathArr, dataArr);
          } else {
            //调用请求提交
            that.reqSetData(pathArr.join(","));
          }
        },
        fail: function (res) {                         //接口调用失败的回调函数
          //提示
          wx.showToast({
            title: '上传文件失败',
            icon: 'loading',
            duration: 3000,
          });

          return;
        },
        complete: function () {                     //接口调用结束的回调函数（调用成功、失败都会执行）

        }
      });
    }
  },

  //删除头图
  bindtapImageDelete: function (e) {
    var that = this;
    var files = that.data.files;
    var img = e.currentTarget.dataset.img;
    for (var j = 0; j < files.length; j++) {
      if (files[j] == img) {
        files.splice(j, 1);
        break;
      }
    }
    that.setData({
      files: files,
    });
  },

  //获取头图
  chooseImage: function (e) {
    var that = this;
    if (that.data.files.length > 3) {
      //弹出提示
      wx.showModal({
        content: '最多只能上传3张图片！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      });
      return;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var imglength = res.tempFilePaths.length + that.data.files.length;
        if (imglength > 3) {
          //弹出提示
          wx.showModal({
            content: '总共只能上传3张图片！',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
          return;
        }
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files: that.data.files.concat(res.tempFilePaths),
        });
      }
    })
  },

  //删除详情图
  bindtapImageDelete_info: function (e) {
    var that = this;
    var files_info = that.data.files_info;
    var img = e.currentTarget.dataset.img;
    for (var j = 0; j < files_info.length; j++) {
      if (files_info[j] == img) {
        files_info.splice(j, 1);
        break;
      }
    }
    that.setData({
      files_info: files_info,
    });
  },

  //获取详情图
  chooseImage_info: function (e) {
    var that = this;
    if (that.data.files_info.length > 1) {
      //弹出提示
      wx.showModal({
        content: '最多只能上传1张图片！',
        showCancel: false,
        success: function (res) {
          if (res.confirm) {
            console.log('用户点击确定');
          }
        }
      });
      return;
    }
    wx.chooseImage({
      sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
      sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
      success: function (res) {
        var imglength = res.tempFilePaths.length + that.data.files_info.length;
        if (imglength > 1) {
          //弹出提示
          wx.showModal({
            content: '总共只能上传1张图片！',
            showCancel: false,
            success: function (res) {
              if (res.confirm) {
                console.log('用户点击确定');
              }
            }
          });
          return;
        }
        // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
        that.setData({
          files_info: that.data.files_info.concat(res.tempFilePaths),
        });
      }
    })
  },

  //预览
  previewImage: function (e) {
    wx.previewImage({
      current: e.currentTarget.id, // 当前显示图片的http链接
      urls: this.data.files // 需要预览的图片http链接列表
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})