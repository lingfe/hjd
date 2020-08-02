/**  
 *   作者:  lingfe 
 *   时间:  2017-12-19
 *   描述:  我的
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    dealer:false,//隐藏
    wxh:null,//微信号
  },

  //页面显示
  onShow:function(e){
    var that = this;
    var user = wx.getStorageSync("user");
    that.setData({
      user: user,
    });
  },

  //微信号
  inputWxh:function(e){
    this.setData({
      wxh:e.detail.value
    });
  },

  //经销商后台
  dealerBackstage:function(e){
    this.setData({
      dealer: this.data.dealer == true?false:true,//显示
    });
  },

  //登录经销商后台
  logindealerBackstage:function(e){
    var that=this;
    //发送请求
    wx.request({
      url: app.config.basePath_web+"distributor/getInfo",
      method:"POST",
      data: {
        pwd:that.data.wxh,
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success:function(res){
        console.log(res);
        //放入本地缓存中
        wx.setStorageSync("distributor", res.data);
        if(res.data.msg!=null){
          //消息
          wx.showModal({
            title: '消息',
            content: res.data.msg,
          })
        } else{
          that.setData({
            dealer: false,//显示
          });

          wx.navigateTo({
            url: '/pages/myInfo/dealerBackstage/dealerBackstage',
          });
        }
      }
    })
  },

  //投诉建议
  feedback:function(e){
    wx.navigateTo({
      url: '/pages/myInfo/feedback/feedback',
    })
  },

  //进入老板后台
  bindtapBossBackstage:function(e){
    wx.navigateTo({
      url: "/pages/myInfo/bossBackstage/bossBackstage"
    })
  }
})