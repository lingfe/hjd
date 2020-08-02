/**  
 *   作者:  lingfe 
 *   时间:  2017-12-26
 *   描述:  经销商商品订单
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    getImg: app.config.domainImage
  },

  //页面显示
  onShow: function (e) {
    var that = this;
    //获取我的订单
    that.getMyOrder(that);
  },

  //跳转
  naviterOrderInfo: function (e) {
    var id = e.currentTarget.id;
    var json = this.data.toList[parseInt(id)];
    wx.setStorageSync("orderinfo", json);
    wx.navigateTo({
      url: "/pages/myOrder/orderInfo/orderInfo?orderinfo=" + json,
      success: function (res) { },
      fail: function (res) { },
      complete: function (res) { },
    })
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

  //获取我的订单
  getMyOrder: function (that) {
    var distributor = wx.getStorageSync("distributor");

    //发送请求
    wx.request({
      url: app.config.basePath_web + "shoporder/getWhereDistributorIdList",
      method: "POST",
      data: {
        distributorId: distributor.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data,
          toList: res.data
        });
      }
    })
  },

  //修改状态
  setState: function (e) {
    var that = this;
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shoporder/setState",
      method: "POST",
      data: {
        id: e.currentTarget.id,
        state: e.currentTarget.dataset.state
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        //获取我的订单
        that.getMyOrder(that);
      }
    })
  }
})