// projects/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    actionText:"登录",
    btnType:"primary",
    userInfo: {
      avatarUrl:"",
      nickName:"未登录"
    }
  },

  bindtap:function() {
    if(this.data.actionText === "登录") {
      wx.showLoading({
        title: '正在登录',
      })
      wx.login({
        success:()=> {
          wx.getUserInfo({
            success:(res)=> {
              this.setData({
                userInfo:{
                  avatarUrl:res.userInfo.avatarUrl,
                  nickName:res.userInfo.nickName
                },
                actionText:"退出登录",
                btnType:"warn"
              })
              wx.setStorage({
                key: 'userInfo',
                data: {
                  userInfo: {
                    avatarUrl: res.userInfo.avatarUrl,
                    nickName: res.userInfo.nickName
                  }
                },
              })
              wx.hideLoading();
            }
          })
        }
      })    
    } else {
      wx.showModal({
        title: '警告',
        content: '你确定要退出嘛！',
        success:(res)=> {
          if(res.confirm) {
            this.setData({
              actionText:"登录",
              btnType:"primary",
              userInfo: {
                avatarUrl: "",
                nickName: "未登录"
              }
            })
          }
        }
      })
    }
  },
  moveToWallet:function() {
    wx.redirectTo({
      url: '../wallet/wallet',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.getStorage({
      key: 'userInfo',
      success: (res)=> {
        this.setData({
            userInfo: {
              avatarUrl: res.data.userInfo.avatarUrl,
              nickName: res.data.userInfo.nickName
            },
            actionText: "退出登录",
            btnType: "warn"
        })
      },
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