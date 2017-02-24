//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    msg:'--------我是MSG，我要被模板调用到-------'
    ,msg1:'我是msg1'
    ,msg2:'我是msg2'
    ,hehe:{

    msg1:'我是hehemsg1'
    ,msg2:'我是hehemsg2'
    }
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  }
})
