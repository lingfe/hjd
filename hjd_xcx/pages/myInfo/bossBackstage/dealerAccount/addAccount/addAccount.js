/**  
 *   作者:  lingfe 
 *   时间:  2017-12-21
 *   描述:  经销商账号管理——添加
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      distributorName:null,//名称
      pwd:null,//微信号/
    },
  },

  //名称
  inputName:function(e){
    this.setData({
      "form.distributorName":e.detail.value
    });
  },

  //微信号
  inputPwd:function(e){
    this.setData({
      "form.pwd":e.detail.value
    });
  },

  //添加经销商账号
  addDistributor:function(e){
    var that=this;
    var form=that.data.form;

    //发送请求
    wx.request({
      url: app.config.basePath_web + "distributor/saveOrUpdate",
      method:"POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:form,
      success:function(res){
        console.log(res);
        wx.showModal({
          title: '提示',
          content: res.data.msg,
          success: function (e) {
            //得到打开的页面
            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];  //当前页面
            var prevPage = pages[pages.length - 2]; //上一个页面

            //返回上一页
            wx.navigateBack();
          }
        })
      },
      fail:function(res){
        console.log(res);

      }
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