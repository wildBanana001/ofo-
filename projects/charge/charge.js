// projects/charge/charge.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  bindinput:function(e) {
    this.value = e.detail.value;
  },
  bindtap:function() {
    if(!isNaN(this.value) && parseInt(this.value) > 0) {
      wx.getStorage({
        key: 'money',
        success: (res)=> {
          wx.setStorage({
            key: 'money',
            data: res.data + parseInt(this.value),
            success:()=> {
              wx.redirectTo({
                url: '../wallet/wallet',
              })
            }
          })
        },
        fail:()=> {
          wx.setStorage({
            key: 'money',
            data: parseInt(this.value),
            success: () => {
              wx.redirectTo({
                url: '../wallet/wallet',
              })
            }
          })
        }
      })
    } else {
      wx.showModal({
        title: '警告',
        content: '请输入正确的金额',
      })
    }
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
  
  }
})