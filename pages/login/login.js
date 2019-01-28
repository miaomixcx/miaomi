// pages/login/login.js
Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    code: "",
    openid: "",
    sessionkey: ""
  },
  onLoad() {
    var that = this;
    wx.getSetting({
      success: function (res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.switchTab({
            url: '../index/index',
          })
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              wx.login({
                success: function (res) {
                  console.log(res.code)
                  that.setData({
                    code: res.code
                  })
                  // wx.request({
                  //   url: 'http://192.168.1.113:8081/wechat/login',
                  //   method:"POST",
                  //   data:{
                  //     code:res.code
                  //   },
                  //   success:function(res){
                  //     console.log(res)
                  //     that.setData({
                  //       openid: res.data.open_id,
                  //       sessionkey: res.data.session_key
                  //     })
                  //   }
                  // })
                }
              })
            }
          })
        } else {
          that.setData({
            isHide: true
          })
        }
      }
    })
  },
  bindGetUserInfo: function (e) {
    if (e.detail.userInfo) {
      var that = this;
      console.log("用户的信息如下：");
      console.log(e.detail.userInfo);
      that.setData({
        isHide: false
      })
      wx.switchTab({
        url: '../index/index',
      })
    } else {
      wx.showModal({
        title: '警告',
        content: '您点击了拒绝授权，将无法进入小程序，请授权之后再进入!!!',
        showCancel: false,
        confirmText: "返回授权",
        success: function (res) {
          if (res.confirm) {
            console.log(1)
          }
        }
      })
    }
  }
})