/**  
 *   作者:  lingfe 
 *   时间:  2017-12-21
 *   描述:  经销商账号管理——修改
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form: {
      id:null,//id
      distributorName: null,//名称
      pwd: null,//微信号/
    },
  },

  //名称
  inputName: function (e) {
    this.setData({
      "form.distributorName": e.detail.value
    });
  },

  //微信号
  inputPwd: function (e) {
    this.setData({
      "form.pwd": e.detail.value
    });
  },

  //修改经销商账号
  updateDistributor: function (e) {
    var that = this;
    var form = that.data.form;
    //发送请求
    wx.request({
      url: app.config.basePath_web + "distributor/saveOrUpdate",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: form,
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          success:function(e){
            //得到打开的页面
            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];  //当前页面
            var prevPage = pages[pages.length - 2]; //上一个页面

            //返回上一页
            wx.navigateBack();
          }
        })

      },
      fail: function (res) {
        console.log(res);

      }
    })
  },


  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that=this;
    //根据pwd获取账号信息
    that.getInfo(that,options.pwd);
  },

  //根据pwd获取账号信息
  getInfo:function(that,pwd){
    //发送请求
    wx.request({
      url: app.config.basePath_web + "distributor/getInfo",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data: {
        pwd:pwd
      },
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '提示',
          content: res.data.msg,
        })
        //设置
        that.setData({
          form:{
            id: res.data.id,//id
            distributorName: res.data.distributorName,//名称
            pwd: res.data.pwd//微信号/
          }
        });
      }
    })
  },

})