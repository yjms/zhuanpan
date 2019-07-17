//index.js
//获取应用实例
const app = getApp()
const rotary_tool = require('../../utils/Rotary.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    animationData:{},
    shopList:[
      { text: '1v币', id: 1 },
      { text: '2v币', id: 2 },
      { text: '视频会员月卡', id: 3 },
      {text:'叮咚音箱',id:4},
      { text: '定制保温杯', id: 5 },
      { text: '定制LOGO篮球', id: 6 },
      { text: '启程D60EV一年体验权', id: 7 },
      { text: 'FIBA球票', id: 8 },
      { text: '1v币', id: 9 },
      { text: '华为手机P30', id: 10 },
      { text: '中国队签名篮球', id: 11 },
      { text: 'AJ篮球鞋', id: 12 },
    ],
    curr_rewold:0, 
    flag: 1,
    isdisable:true
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const _ANIMATION_TIME = 8000;
    this.animation = wx.createAnimation({
         duration:_ANIMATION_TIME,
         timingFunction:"ease-in-out",
         delay:0
    })
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  go_rewords(){
    rotary_tool.rotary(this.data.shopList,this);
  },
  transitionend(){
    rotary_tool.transition(this);
  }
})
