/**  
 *   作者:  lingfe 
 *   时间:  2017-12-23
 *   描述:  经销商后台
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

  //经销商订单
  dealerOrder:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/dealerBackstage/dealerOrder/dealerOrder',
    })
  },

  //经销商商品信息
  dealerShopInfo:function(e){
    wx.navigateTo({
      url: "/pages/myInfo/dealerBackstage/dealerShopInfo/dealerShopInfo",
    })
  }
})