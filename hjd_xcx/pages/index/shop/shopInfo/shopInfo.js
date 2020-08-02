/**  
 *   作者:  lingfe 
 *   时间:  2017-12-25
 *   描述:  店铺商品信息
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

  //商品详细信息页面
  bindtapNvaito: function (e) {
    wx.navigateTo({
      url: "/pages/index/shop/commodityInfo/commodityInfo?id=" + e.currentTarget.id,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
  },

  //获取商品信息
  getShopInfo: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getList",
      method: "POST",
      data: {
        distributorId:that.data.id,
        state: 0,
        pageIndex: 1,
        pageNum: 50
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          shoplist: res.data.list
        });
      }
    })
  },

  //页面显示
  onShow: function (e) {
    var that = this;

    //获取商品信息
    that.getShopInfo(that);
  },

  //页面加载
  onLoad:function(options){
    this.setData({
      id:options.id,
      distributorName: options.distributorName
    });
  }
})