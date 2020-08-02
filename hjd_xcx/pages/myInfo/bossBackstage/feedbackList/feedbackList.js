/**  
 *   作者:  lingfe 
 *   时间:  2017-12-23
 *   描述:  投诉建议管理
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    list: []
  },

  //查看
  btn_update: function (e) {
    wx.showModal({
      title: '内容',
      content: e.currentTarget.id,
    })
  },

  //删除
  btn_delete: function (e) {
    var that = this;
    //发送请求
    wx.request({
      url: app.config.basePath_web + "feedback/setDelete",
      method: "POST",
      data: {
        id: e.currentTarget.id
      },
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: '消息',
          content: res.data.msg,
        })
        //获取投诉建议
        that.getList(that);
      }
    })
  },

  //获取商品信息
  getList: function (that) {
    //发送请求
    wx.request({
      url: app.config.basePath_web + "feedback/getList",
      method: "GET",
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      success: function (res) {
        console.log(res);
        that.setData({
          list: res.data
        });
      }
    })
  },

  //面显示
  onShow: function () {
    var that = this;
    //获取商品信息
    that.getList(that);
  },
})