/**  
 *   作者:  lingfe 
 *   时间:  2017-12-25
 *   描述:  商品订单提交
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    form:{
      number:1,
      address:null,//收货地址
      distributionTime:null,//配送时间
      phone:null,//联系电话
      remark:null//备注
    }
  },

  //收货地址
  inputAddress:function(e){
    this.setData({
      "form.address":e.detail.value
    });
  },

  //减
  bindtapjian:function(e){
    var that=this;
    if (that.data.form.number>1){
      that.setData({
        "form.number": that.data.form.number-1
      });
    }
  },

  //加
  bindtapjia: function (e) {
    var that = this;
    that.setData({
      "form.number": that.data.form.number + 1
    });
  },

  //联系电话
  inputPhone:function(e){
    this.setData({
      "form.phone":e.detail.value
    });
  },

  //配送时间
  inputCdate:function(e){
    this.setData({
      "form.distributionTime":e.detail.value
    });
  },

  //备注
  inputRemark:function(e){
    this.setData({
      "form.remark":e.detail.value
    });
  },

  //提交订单
  submitOrder:function(e){
    var that=this;
    var form=that.data.form;
    form.distributorId = that.data.commodity.distributorId;
    form.distributorName = that.data.commodity.distributorName;
    form.personalId = wx.getStorageSync("personalId");
    form.shopInfoid=that.data.commodity.id;
    form.title = that.data.commodity.title;
    form.imgUrl = that.data.commodity.infoImgUrl;
    form.price = that.data.commodity.price;

    //发送请求
    wx.request({
      url: app.config.basePath_web + "shoporder/save",
      data:form,
      method:"POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '消息',
          content: res.data.msg,
          success: function (e) {
            //得到打开的页面
            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];  //当前页面
            var prevPage = pages[pages.length - 2]; //上一个页面

            //返回上一页
            wx.navigateBack();
          }
        })
      }
    })
  },  

  //获取商品信息
  getShopInfo: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getInfo",
      method: "POST",
      data: {
        id: that.data.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          commodity: res.data,
          arrimg: res.data.imgUrl.split(",")
        });
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    });
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    var that = this;

    //获取商品信息
    that.getShopInfo(that);
  },

})