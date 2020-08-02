/**  
 *   作者:  lingfe 
 *   时间:  2017-12-19
 *   描述:  商品源
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
    getImg: app.config.domainImage
  },

  //跳转到修改页面
  btn_update:function(e){
    wx.navigateTo({
      url: "/pages/myInfo/bossBackstage/commoditySource/updateCommodity/updateCommodity?id=" + e.currentTarget.id
    })
  },

  //删除
  btn_delete:function(e){
    var that=this;
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/setDelete",
      method: "POST",
      data: {
        id: e.currentTarget.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      }, 
      success: function (res) {
        console.log(res);
        //提示
        wx.showToast({
          title: res.data,
          duration: 1000,
        });

        //获取商品信息
        that.getShopInfo(that);
      }
    })
  },

  //添加商品
  bindtapAdd:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/commoditySource/addCommodity/addCommodity',
    })
  },

  //获取商品信息
  getShopInfo:function(that){
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getList",
      method: "POST",
      data: {
        state:1,
        pageIndex: 1,
        pageNum: 10
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res);
        that.setData({
          list:res.data.list
        });
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
    var that=this;
    //获取商品信息
    that.getShopInfo(that);
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