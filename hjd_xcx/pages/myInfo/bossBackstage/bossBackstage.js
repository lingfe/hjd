/**  
 *   作者:  lingfe 
 *   时间:  2017-12-19
 *   描述:  老板后台
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

  //销售数据
  bindtapSalesData:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/salesData/salesData',
    })
  },

  //投诉建议
  feedbackList:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/feedbackList/feedbackList',
    })
  },

  //首页轮播图
  bindtapcarouselfigure:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/carouselfigure/carouselfigure',
    })
  },

  //商品源
  bindtapCommoitidy:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/commoditySource/commoditySource',
    })
  },

  //经销商账号管理
  bindtapdealerAccount:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/bossBackstage/dealerAccount/dealerAccount',
    })
  },
})