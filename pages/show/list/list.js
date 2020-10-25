//information.js
const app = getApp();

Page({
  data: {
    reponse: undefined,
    title: undefined,
    request_name: undefined
  },
  onLoad: function (e) { // 接收父页面给的数据
    //console.log(JSON.parse(e.abc)) // 获取可以展示的数组

    this.setData({
      title: e.chinese_name,
      request_name: e.name
    })

    wx.request({
      url: "https://gitee.com/api/v5/repos/" + app.globalData.user_name + "/" + app.globalData.user_repo + "/" + e.name,

    success:(e) => {  // 用原本写法会有指向问题
      this.setData({
        reponse: e.data
      })
    }})

  }})
