ofo小程序部分功能
=====================
仿写ofo小程序部分功能，以微信map组件为核心写了首页，简单实现定位，扫码，报障，用户等功能。

- 首页使用wx.getSystemInfo方法可以获得当前定位经纬度。进而定位到自己的位置。
- 立即用车方面扫码获得的数据我使用了假数据网站easymock制造假数据，直接替代扫码获得的数据传入信息显示页面。
- 报障页面使用wx:for渲染数据，使用微信icon图标来展现。填写信息input框使用h5的placeholder来聚焦失焦，相比于原来的onfocus、onblur更好使用。
- 用户登陆界面则使用wx.getuserInfo将获取到的用户信息展示出来。
- 用户充值方面由于没有使用服务器和后台接口，直接将充值数据传入Storage里，在钱包页面在获取。



<image src="./images/view1.jpg" style="max-width:40%;"></image>
