//app.js
App({
  onLaunch:function(){
    wx.getSetting({
      success(res) {
        if (!res.authSetting['scope.userLocation']) {
          wx.authorize({
            scope: 'scope.userLocation',
            success() {
              wx.getLocation({
                type: 'wgs84',
                success(res) {
                  wx.setStorage({
                    key: 'location',
                    data: JSON.stringify(res),
                  })
                }
              })
            }
          })
        }else{
          wx.getLocation({
            type: 'wgs84',
            success(res) {
              wx.setStorage({
                key: 'location',
                data: JSON.stringify(res),
              })
            }
          })
        }
      }
    })
  }
})