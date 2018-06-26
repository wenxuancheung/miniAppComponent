// components/tip/tip.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    Tip: {
      type: Object,
      value: 'transparent',
      observer() {
        this.setData({
          tip: {
            ...this.data.tip,
            ...this.properties.Tip
          }
        })
      }
    },
    tipTitle:{
      type: String,
      value:'title'
    },
    tipContent:{
      type: String,
      value:'content'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    showModal: false,
    tip: {
      voteTipTotalBackgroundColor: '#fff',
      voteTipTitleColor: '#222222;',
      voteTipButtonTextColor: '#ffffff',
      voteTipButtonText: '确定',
      voteTipButtonBackgroundColor: '#fccf35;',
      voteTipContentColor: '#666666',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    confirm() {
      this.triggerEvent('confirm')
    },
    closeVoteTip() {
      this.setData({
        showModal: false
      })
    },
    showVoteTip() {
      this.setData({
        showModal: true
      })
    }
  }
})
