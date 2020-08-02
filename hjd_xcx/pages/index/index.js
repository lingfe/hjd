/**  
 *   作者:  lingfe 
 *   时间:  2017-12-14
 *   描述:  收到
 * 
 * */

//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    getImg: app.config.domainImage,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //获取轮播图数据
  getcarouselfigure:function(that){
    //url 
    var url = app.config.basePath_web + "carouselfigure/pageList";
    //参数
    var data={
      pageIndex:1,
      pageNum:3
    };

    //发送请求
    wx.request({
      url: url,
      method:"POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      data:data,
      success:function(res){
        console.log(res);
        that.setData({
          list:res.data.list
        });
      },
      fail:function(res){
        console.log(res);
      }
    })
  },

  //页面显示
  onShow:function(e){
    var that = this;

    //获取轮播图数据
    that.getcarouselfigure(that);
    //获取商品信息
    that.getShopInfo(that);
    //从缓存中获取openid
    var openid = wx.getStorageSync('openid');
    if (app.checkInput(openid)){
      //自动登录第一步，获取openid
      that.getOpenId(that);
    }else{
      //直接获取
      that.loginRequest(that);
    }
  },


  //下单
  bindtap_order:function(){
    wx.navigateTo({
      url: "/pages/index/shop/shop"
    })
  },

  //商品详细信息页面
  bindtapNvaito:function(e){
    wx.navigateTo({
      url: "/pages/index/shop/commodityInfo/commodityInfo?id=" + e.currentTarget.id ,
      success: function(res) {},
      fail: function(res) {},
      complete: function(res) {},
    })
  },

  //获取商品信息
  getShopInfo: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "shopinfo/getList",
      method: "POST",
      data: {
        state: 0,
        pageIndex: 1,
        pageNum: 6
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

  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },

  //发起登录请求
  loginRequest: function (that) {
    //地址
    var url = app.config.basePath_web + "userinfo/save";
    //请求头
    var header = {
      "Content-Type": "application/x-www-form-urlencoded"
    };

    var data = {
      openid: wx.getStorageSync('openid'),         //用户id
      username: that.data.userInfo.nickName,
      avatarUrl: that.data.userInfo.avatarUrl,
    };
    //发送请求
    wx.request({
      url: url,
      method:"GET",
      data:data,
      success:function(res){
        console.log(res);
        wx.setStorageSync("user", res.data);
        wx.setStorageSync("personalId", res.data.id);
      },
      fail:function(res){
        console.log(res);
      }
    })
  },

  //获取openid
  getOpenId: function (that) {
    //调用登录接口
    wx.login({
      success: function (logRes) {
        //获取openid
        var url = app.config.login_sys + 'sns/jscode2session';
        var data = {
          appid: app.globalData.appid,
          secret: app.globalData.secret,
          js_code: logRes.code,
          grant_type: 'authorization_code'
        }
        //发送请求
        app.request.reqGet(url, data,
          function (res) {
            app.globalData.openid = res.data.openid;
            wx.setStorageSync('openid', res.data.openid);
            that.setData({ openid: res.data.openid });
            //自动登录第二步，获取微信用户
            that.getUserInfo(that);
          });
      }, fail: function (res) {
        console.log(res);
      }
    });
  },

  //自定义获取用户数据
  getUserInfo: function (that) {
    //调用登录接口
    wx.login({
      success: function () {
        //获取用户
        wx.getUserInfo({
          success: function (res) {
            app.globalData.userInfo = res.userInfo
            wx.setStorageSync('userinfo', res.userInfo);
            that.setData({ userInfo: res.userInfo });
            ////自动登录第三步，发送登录服务器请求
            that.loginRequest(that);
          }
        });
      }
    })
  },
})
