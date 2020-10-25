//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
    },

    formSubmit: function(e) {
      app.globalData.user_name = e.detail.value.name;
      app.globalData.user_repo = e.detail.value.repo;
      wx.showToast({
        title: '设置成功',
      })

    },

    formReset: function() {
      app.globalData.user_name = undefined;
      app.globalData.user_repo = undefined;
    },
})
