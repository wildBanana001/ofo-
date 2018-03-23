// projects/wallet/wallet.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    money : 0
  },
  moveToCharge:function() {
    wx.redirectTo({
      url: '../charge/charge',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'money',
      success: (res) => {
        this.setData({
          money: res.data
        })
      },
      fail: (res) => {
        this.setData({
          money: 0
        })
      },
    })
  }
})