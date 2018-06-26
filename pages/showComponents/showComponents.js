// pages/showComponents/showComponents.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showLoading: false,
    info:"这是跑马灯组件",
    content:[
      {
        info:'这是组件'
      },
      {
        info:'这是InfoSwiper'
      }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.setData({
      name: options.name
    })
  },
  //出现loading
  showLoading(){
    this.setData({
      showLoading: true
    })
    setTimeout(()=>{
      this.setData({
        showLoading: false
      })
    },5000)
    console.log('good')
  },
  //出现showTip
  showTip(){

  },
})