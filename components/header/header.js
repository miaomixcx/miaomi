// components/header/header.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    txt:"花间测试"
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.request({
      url: 'http://192.168.1.115:8080/content/SelectPageAll',
      success:function(res){
        console.log(JSON.parse(res.data[0].template))
      }
    })
  },
  handlePosition(){
    wx.navigateTo({
      url: '../../pages/storeList/storeList',
    })
  },
  handleSearch(){
    wx.navigateTo({
      url: '../../pages/search/search',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})