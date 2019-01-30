//index.js
//获取应用实例
const app = getApp()

Page({
  data:{
    
  },
  onLoad(){
    wx.request({
      url: 'http://192.168.1.115:8080/content/SelectPageAll',
      data:{

      },
      success:function(res){
        console.log(JSON.parse(res.data[0].template))
        
      }
    })
  }
})
