// pages/market/market.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    navbar: [
      {
        eng: "BAKING",
        cn: "烘焙",
        children:[
          {
            cn:"轻食"
          },
          {
            cn:"抖音同款"
          },
          {
            cn:"欧式面包"
          },
          {
            cn:"热销明星款"
          }
        ]
      },
      {
        eng: "MEAT",
        cn: "肉类"
      },
      {
        eng: "SEAFOODS",
        cn: "水产"
      },
      {
        eng: "VEGETANBLE",
        cn: "蔬菜"
      },
      {
        eng: "DRY FRUITS",
        cn: "干果"
      },
      {
        eng: "BAKED",
        cn: "面包"
      }
    ],
    currentTab: 0,
    navIndex: 0,
    tx1: "欧式牛角包",
    tx2: "酥脆可口 奶香浓郁",
    tx3: "¥ 6.79",
    tx4: "￥12.00",
    num: 1
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
  navbarTap: function (e) {
    this.setData({
      currentTab: e.currentTarget.dataset.idx,
      navIndex: 0
    })
  },
  navTab: function (e) {
    this.setData({
      navIndex: e.currentTarget.dataset.index
    })
  },
  handleGo(){
    wx.navigateTo({
      url: '../shoppingCar/shoppingCar',
    })
  },
  handleGoodsDetails(){
    wx.navigateTo({
      url: '../goodsDetails/goodsDetails',
    })
  }
})