Page({
  
  onLoad: function(options) {
    this.setData({
      pass: options.pass,
      num: options.num
    });
    var t = 9;
    setInterval(() =>{
      this.setData({
        time : t--
      });
      if(t == 0) {
        wx.redirectTo({
          url: `../billing/billing?num=${options.num}`
        })
      }
    },1000);
  }
})