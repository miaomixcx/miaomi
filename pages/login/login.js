// pages/login/login.js

var QQMapWX = require('../../utils/qqmap-wx-jssdk.js');
var qqmapsdk;


Page({
  data: {
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    isHide: false,
    code: "",
    openid: "",
    sessionkey: "",
    province: '',
    city: '',
    latitude: '',
    longitude: ''
  },
  onLoad() {
    var that = this;
    qqmapsdk = new QQMapWX({
      key: '6I2BZ-GIV3J-TNUFS-KUS3I-IEXVT-KPFZG'
    })
    wx.getSetting({
      success: function (res) {
        console.log(res)
        if (res.authSetting['scope.userInfo']) {
          wx.redirectTo({
            url: '../begin/begin',
          })
          wx.getUserInfo({
            success: function (res) {
              console.log(res.userInfo)
              wx.setStorageSync('userInfo', res.userInfo)
              // wx.login({
              //   success: function (res) {
              //     console.log(res.code)
              //     that.setData({
              //       code: res.code
              //     })
              //     wx.request({
              //       url: 'https://jk.xm300.com/wechat/wechat/login',
              //       method:"POST",
              //       data:{
              //         code:res.code
              //       },
              //       success:function(res){
              //         console.log(res)
              //         that.setData({
              //           openid: res.data.open_id,
              //           sessionkey: res.data.session_key
              //         })
              //       }
              //     })
              //   }
              // })
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
      wx.redirectTo({
        url: '../begin/begin',
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
  },
  onShow() {
    let vm = this;
    vm.getUserLocation();
  },
  getUserLocation: function () {
    let vm = this;
    wx.getSetting({
      success: function (res) {

        if (res.authSetting['scope.userLocation'] != undefined && res.authSetting['scope.userLocation'] != true) {
          wx.showModal({
            title: '请求授权当前位置',
            content: '需要获取您的地理位置，请确认授权',
            success: function (res) {
              if (res.cancel) {
                wx.showToast({
                  title: '拒绝授权',
                  icon: "none",
                  duration: 1000
                })
              } else if (res.confirm) {
                wx.openSetting({
                  success: function (res) {
                    if (res.authSetting["scope.userLocation"] == true) {
                      wx.showToast({
                        title: '授权成功',
                        icon: 'success',
                        duration: 1000
                      })
                      vm.getLocation();
                    } else {
                      wx.showToast({
                        title: '授权失败',
                        icon: 'none',
                        duration: 1000
                      })
                    }
                  }
                })
              }
            }
          })
        } else if (res.authSetting['scope.userLocation'] == undefined) {
          vm.getLocation();
        } else {
          console.log('授权成功')
          vm.getLocation();
        }
      }
    })
  },
  getLocation() {
    let vm = this;
    wx.getLocation({
      type: "wgs84",
      success: function (res) {
        console.log(JSON.stringify(res))
        var latitude = res.latitude
        var longitude = res.longitude
        var speed = res.speed
        var accuracy = res.accuracy
        vm.getLocal(latitude, longitude)
      },
      fail: function (res) {

      }
    })
  },
  getLocal: function (latitude, longitude) {
    let vm = this;
    qqmapsdk.reverseGeocoder({
      location: {
        latitude: latitude,
        longitude: longitude
      },
      success: function (res) {
        console.log(JSON.stringify(res));
        wx.setStorageSync('location', res)
        let province = res.result.ad_info.province
        let city = res.result.ad_info.city
        vm.setData({
          province: province,
          city: city,
          latitude: latitude,
          longitude: longitude
        })
      },
      fail: function (res) {

      },
      complete: function (res) {

      }
    })
  }
})