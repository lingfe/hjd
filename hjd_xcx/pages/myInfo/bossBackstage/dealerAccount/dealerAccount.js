/**  
 *   作者:  lingfe 
 *   时间:  2017-12-21
 *   描述:  经销商账号管理
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },

  //跳转修改页面
  updateAccount:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/dealerAccount/updateAccount/updateAccount?pwd='+e.currentTarget.id,
    })
  },

  //跳转添加页面
  addAccount:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/dealerAccount/addAccount/addAccount',
    })
  },

  //获取经销商账号
  getList:function(that){
    //发送请求
    wx.request({
      url: app.config.basePath_web + "distributor/getList",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list:res.data
        });
      },
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
    var that=this;
    //获取账号信息
    that.getList(that);
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