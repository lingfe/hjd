/***
 * request请求的封装
 * 学习地址:http://blog.csdn.net/u010046908/article/details/53170130
 */

var app = getApp();

/**
 * get或post组合请求
 * url            请求路径
 * method         请求方式，get或post
 * postData       参数data
 * doSuccess      成功的回调
 * doFail         失败的回调
 * doComplete     不管成功或失败的回调
 */
function request(url,method, postData, header,  doSuccess, doFail, doComplete) {
  wx.request({
    url: url,
    method: method,
    data: postData,
    header: header,
    success: function (res) {
      if (typeof doSuccess == "function") {
        doSuccess(res);
      }
    },
    fail: function () {
      if (typeof doFail == "function") {
        doFail();
      }
    },
    complete: function () {
      if (typeof doComplete == "function") {
        doComplete();
      }
    }
  });
}

/**
 * get请求
 * url        请求地址
 * header     请求头
 * success    成功的回调
 * fail       失败的回调
 */
function reqGet(url,data, success, fail) {
  wx.request({
    url: url,
    data:data,
    method: 'GET',
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });
}

/**
 * post请求
 * url      请求地址
 * header   请求头
 * data     请求参数    
 * success  成功的回调
 * fail     失败的回调
 */
function reqPost(url, header, data, success, fail) {
  wx.request({
    url: url,
    header: header,
    method: 'POST',
    data: data,
    success: function (res) {
      success(res);
    },
    fail: function (res) {
      fail(res);
    }
  });
}

module.exports = {
  request: request,
  reqGet: reqGet,
  reqPost: reqPost
}
