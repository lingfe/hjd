/**  
 *   作者:  lingfe 
 *   时间:  2017-12.23
 *   描述:  投诉建议
 * 
 * */

//获取应用实例
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    content:'' ,  //反馈内容
    num:0,        //计数
  },

  //获取投诉建议值
  dataChange: function (e) {
    if (e.detail.value.length > 501) {
      wx.showModal({
        title: '内容不能打多余500字',
        showCancel: false,
      });
      return;
    }
    this.setData({
      num: e.detail.value.length,
      content: e.detail.value
    });
  },

  //保存投诉建议
  savebindtapfeedback:function(e){
    var that=this;

    //发送请求
    wx.request({
      url: app.config.basePath_web + "feedback/save",
      method: "POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      data: {
        personalId: wx.getStorageSync('personalId'),
        content: that.data.content,
      },
      success: function (res) {
        console.log(res);
        wx.showModal({
          title: "消息",
          content:res.data.msg,
          success:function(){
            //得到打开的页面
            var pages = getCurrentPages();
            var currPage = pages[pages.length - 1];  //当前页面
            var prevPage = pages[pages.length - 2]; //上一个页面
            //返回上一页
            wx.navigateBack();
          }
        });
      }
    });
  },
})