// projects/warn/warn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    checkboxValue:[{
      title: "私锁私用",
      checked:false
    }, {
      title: "车牌缺损",
      checked: false
      }, {
        title: "轮胎坏了",
        checked: false
    }, {
      title: "车锁坏了",
      checked: false
      }, {
        title: "违规乱停",
        checked: false
    }, {
      title: "密码不对",
      checked: false
      }, {
        title: "刹车坏了",
        checked: false
    }, {
      title: "其他故障",
      checked: false
    }],
    picUrls: [],
    actionText:"拍摄/照片",
    bikeInfo: {
      num: 0,
      desc: ""
    },
    checkedValue:[]
  },
  changeNum: function(e) {
      this.setData({
        bikeInfo: {
          num: e.detail.value,
          desc: this.data.bikeInfo.desc
        }
      })
  },
  changeDesc: function (e) {
    this.setData({
      bikeInfo: {
        num: this.data.bikeInfo.num,
        desc: e.detail.value
      }
    })
    console.log(this.data.bikeInfo);
  },
  bindchange: function (e) {
    this.data.checkedValue = e.detail.value;
  },
  takePhoto: function() {
    wx.chooseImage({
      success: (res) =>{
        var pic = this.data.picUrls;
        var arr = pic.concat(res.tempFilePaths)
        this.setData({
          picUrls:arr,
          actionText:"+"
        })
      },
    })
  },
  delPic: function(e) {
    var index = e.target.dataset.id;
    this.data.picUrls.splice(index,1);
    if(this.data.picUrls.length) {
      this.setData({
        picUrls: this.data.picUrls
      })
    } else {
      this.setData({
        picUrls: this.data.picUrls,
        actionText: "+"
      })
    }
  },
  submit: function() {
    if(this.data.checkedValue.length && this.data.picUrls.length) {
      wx.showToast({
        title: '提交成功',
      })
    } else {
      wx.showModal({
        title: '注意',
        content: '请选择故障类型并上传照片',
        confirmText: "我填",
        cancelText: "不填了",
        success:(res)=> {
          if(res.confirm) {

          } else {
            wx.redirectTo({
              url: '../index/index',
            })
          }
        }
      })
    }
  }
})