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
    list: [],
    state:1,
    getImg: app.config.domainImage
  },

  //设置状态模块
  bindtapSetState:function(e){
    this.setData({
      state: e.currentTarget.id
    });
    //获取商品信息
    this.getShopInfo(this, e.currentTarget.id);
  },

  //修改状态，下架或上架
  updateState: function (e) {
    var that = this;
    //获取经销商信息
    var distributor = wx.getStorageSync("distributor");

    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/setStateUpdate",
      method: "POST",
      data: {
        id: e.currentTarget.id,
        state: e.currentTarget.dataset.ste,
        distributorId: distributor.id,
        distributorName: distributor.distributorName
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        //提示
        wx.showToast({
          title: res.data.msg,
          duration: 1000,
        });
        //获取商品信息
        that.getShopInfo(that,that.data.state);
      }
    })
  },

  //获取商品信息
  getShopInfo: function (that,state) {
    //获取经销商信息
    var distributor = wx.getStorageSync("distributor");
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getList",
      method: "POST",
      data: {
        distributorId: distributor.id,
        state: state,
        pageIndex: 1,
        pageNum: 10
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data.list
        });
      }
    })
  },

  //监听页面显示
  onShow: function () {
    var that = this;
    //获取商品信息
    that.getShopInfo(that,1);
  }

})