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
  }
})