//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    componentsList:[
      {
        name:'loading'
      },
      {
        name:'horseRaceLamp'
      },
      {
        name:'radioSlider'
      },
      {
        name:'tip'
      },
      {
        name:"infoSwiper"
      }
    ]
  },

  onLoad() {

  },
  navigateToShowComponents(name){
    wx.navigateTo({
      url: `/pages/showComponents/showComponents?name=${name.currentTarget.dataset.name}` 
    });
  }
})
