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
    ],
    tipTitle:'这是标题',
    tipContent: '这是内容'
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.Tip = this.selectComponent("#Tip")
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
  },
  //出现showTip
  showTip(){
    this.Tip.showVoteTip()
  },
  //点击确定要触发的事件
  closeVoteTip(){
    this.Tip.closeVoteTip()
  }
})