// components/Lopat/listOfPicAndText.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tx1: "欧式牛角包400g",
    tx2: "酥脆可口 奶香浓郁",
    tx3: "¥6.79",
    tx4:"￥12.00",
    num:1
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  },
  add:function( ){
    this.data.num += 1;
    this.setData({
      num : this.data.num
    })
  },
  dis:function(){
    if(this.data.num<=1){
      return
    }
    this.data.num -= 1;
    this.setData({
      num:this.data.num
    })
  }
})