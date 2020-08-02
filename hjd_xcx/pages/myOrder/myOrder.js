/**  
 *   作者:  lingfe 
 *   时间:  2017-12-26
 *   描述:  我的订单
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
        var that=this;
        that.setData({
            inputVal: "",
            list: that.data.toList
        });
    },

    inputTyping: function (e) {
      var that=this;
      var list = that.data.toList;
      var tolist=[];      
      if (app.checkInput(e.detail.value)){
        that.setData({
          inputVal: e.detail.value,
          list: list
        });
        return;
      }
      for(var i=0;i<list.length;++i){
        if(list[i].title.indexOf(e.detail.value)!=-1){
          tolist.push(list[i]);
        } else if (list[i].distributorName.indexOf(e.detail.value)!=-1){
          tolist.push(list[i]);
        } else if (list[i].address.indexOf(e.detail.value)!=-1){
          tolist.push(list[i]);
        }
      }

      that.setData({
        inputVal: e.detail.value,
        list:tolist
      });
    },
    
    //跳转
    naviterOrderInfo:function(e){
      var id=e.currentTarget.id;
      var json = this.data.toList[parseInt(id)];
      wx.setStorageSync("orderinfo", json);
      wx.navigateTo({
        url: "/pages/myOrder/orderInfo/orderInfo?orderinfo=" +json ,
        success: function(res) {},
        fail: function(res) {},
        complete: function(res) {},
      })
    },

    //页面显示
    onShow:function(e){
      var that=this;
      //获取我的订单
      that.getMyOrder(that);
    },

    //获取我的订单
    getMyOrder:function(that){
      //发送请求
      wx.request({
        url: app.config.basePath_web + "shoporder/getWherePersonalIdList",
        method: "POST",
        data: {
          personalId: wx.getStorageSync("personalId")
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        }, 
        success:function(res){
          console.log(res);
          that.setData({
            list:res.data,
            toList:res.data
          });
        }
      })
    },

    //再次购买
    bindtapSohuo: function (e) {
      wx.navigateTo({
        url: "/pages/index/shop/commodityInfo/orderCubmit/orderCubmit?id=" + e.currentTarget.id
      })
    },

    //修改状态
    setState:function(e){
      var that=this;
      //发送请求
      wx.request({
        url: app.config.basePath_web + "shoporder/setState",
        method: "POST",
        data: {
          id: e.currentTarget.id,
          state: e.currentTarget.dataset.state
        },
        header: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        success: function (res) {
          console.log(res);
          //获取我的订单
          that.getMyOrder(that);
        }
      })
    }
})