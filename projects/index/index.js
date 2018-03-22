Page({
  data:{
  },
  bindControl: function(e) {
    switch(e.controlId) {
      case 1 : 
        this.map.moveToLocation();
        break;
      case 2 : 
        if(this.flag) {
          wx.navigateBack({
            delta : 1
          })
        } else {
          wx.scanCode({
            success: (res) => {
              wx.showLoading({
                title: 'Loading~'
              })
              wx.request({
                url: "https://www.easy-mock.com/mock/5a6eab677af44c1f4d7798dc/ofo/ofo#!method=get",
                success: (res) => {
                  wx.redirectTo({
                    url: `../scanCode/scanCode?pass=${res.data.data.password}&num=${res.data.data.number}`
                  })
                }
              })
            },
            fail: (err) => {
              console.log(err);
            }
          })
        }   
        break;
      case 3:
        wx.redirectTo({
          url: '../warn/warn',
        })
        break;
      case 4:
        wx.redirectTo({
          url: '../my/my',
        })
        break;
    }
  },
  onLoad:function(res) {
    this.flag = res.flag;
    wx.getLocation({
      success: (res) => {
        this.setData({
          oLatitude : res.latitude,
          oLongitude : res.longitude
        })
      },
    }),
    wx.getSystemInfo({
      success: (res) => {
        this.setData({
          controls: [{
            id: 1,
            iconPath: '/images/location.png',
            position :{
              width:50,
              height: 50,
              top: res.windowHeight - 100,
              left : 20
            },
            clickable: true
          },
          {
            id: 2,
            iconPath: '/images/use.png',
            position: {
              width: 90,
              height: 90,
              top: res.windowHeight - 120,
              left: res.windowWidth/2 - 45
            },
            clickable: true
          }, 
          {
            id: 3,
            iconPath: '/images/warn.png',
            position: {
              width: 50,
              height: 50,
              top: res.windowHeight - 100,
              left: res.windowWidth - 70
            },
            clickable: true
          },
          {
            id: 4,
            iconPath: '/images/avatar.png',
            position: {
              width: 40,
              height: 40,
              top: res.windowHeight - 155,
              left: res.windowWidth - 65
            },
            clickable: true
          },
          {
            id: 5,
            iconPath: '/images/marker.png',
            position: {
              width: 35,
              height: 50,
              top: res.windowHeight/2 - 50,
              left: res.windowWidth/2 - 17.5 
            }
          },]
        })
      },
    })
  },
  onShow:function() {
    this.map = wx.createMapContext('mapId', this);
  }
})