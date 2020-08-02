/**  
 *   作者:  lingfe 
 *   时间:  2017-12-25
 *   描述:  商品详细信息
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getImg: app.config.domainImage,
  },

  //获取商品信息
  getShopInfo: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getInfo",
      method: "POST",
      data: {
        id:that.data.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          commodity: res.data,
          arrimg:res.data.imgUrl.split(",")
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that=this;

    //获取商品信息
    that.getShopInfo(that);
  },

  //送货上门
  bindtapSohuo:function(e){
    wx.navigateTo({
      url: "/pages/index/shop/commodityInfo/orderCubmit/orderCubmit?id=" + e.currentTarget.id
    })
  }
})