/**  
 *   作者:  lingfe 
 *   时间:  2017-12-26
 *   描述:  销售数据
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dealerStr:[],
    stateStr:["未发货","未确认","已结束","已取消"],
    distributorName:null,
    state:0,
    distributionTime:null,
  },

  //经销商
  bindDistributorName: function (e) {
    var that=this;
    that.data.distributorName = that.data.dealerStr[e.detail.value];

    //获取我的订单
    that.getMyOrder(that);
  },

  //状态
  bindPickerState: function (e) {
    var that=this;
    that.data.state= e.detail.value;

    //获取我的订单
    that.getMyOrder(that);
  },

  //时间
  bindPickerChange: function (e) {
    var that=this;
    that.data.distributionTime=e.detail.value;

    //获取我的订单
    that.getMyOrder(that);
  },

  //获取经销商账号
  getList: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "distributor/getList",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        var dealerStr=[];
        for(var i=0;i<res.data.length;++i){
          dealerStr.push(res.data[i].distributorName);
        }

        that.setData({
          dealerStr: dealerStr
        });
      },
    })
  },

  //页面显示
  onShow: function (e) {
    var that = this;
    //获取我的订单
    that.getMyOrder(that);
    //获取经销商账号
    that.getList(that);
  },

  //获取我的订单
  getMyOrder: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shoporder/getWhere",
      method: "POST",
      data: {
        distributorName: that.data.distributorName,
        state:that.data.state,
        distributionTime: that.data.distributionTime
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data,
        });
      }
    })
  },
})