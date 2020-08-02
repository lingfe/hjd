/**  
 *   作者:  lingfe 
 *   时间:  2017-12-14
 *   描述:  商店
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  //页面参数
  data: {
    inputShowed: false,
    inputVal: "",
    getImg: app.config.domainImage
  },
  showInput: function () {
    this.setData({
      inputShowed: true
    });
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: false,
      list: this.data.toList
    });
  },
  clearInput: function () {
    var that = this;
    that.setData({
      inputVal: "",
      list: that.data.toList
    });
  },

  inputTyping: function (e) {
    var that = this;
    var list = that.data.toList;
    var tolist = [];
    if (app.checkInput(e.detail.value)) {
      that.setData({
        inputVal: e.detail.value,
        list: list
      });
      return;
    }
    for (var i = 0; i < list.length; ++i) {
      if (list[i].distributorName.indexOf(e.detail.value) != -1) {
        tolist.push(list[i]);
      } 
    }

    that.setData({
      inputVal: e.detail.value,
      list: tolist
    });
  },

  //店铺
  bindtapShopinfo:function(e){
    wx.navigateTo({
      url: "/pages/index/shop/shopInfo/shopInfo?id=" + e.currentTarget.id + "&distributorName=" + e.currentTarget.dataset.name
    })
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
        that.setData({
          list: res.data,
          toList:res.data,
          tuiInfo:res.data[0]
        });
      },
    })
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;
    //获取账号信息
    that.getList(that);
  },
})