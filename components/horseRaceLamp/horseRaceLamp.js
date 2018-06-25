// components/horseRaceLamp/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    imgSrc: {
      type: String,
      value: 'https://wx-open-img.xizi.com/201804/28/Fn-ABHxZRVyCf_wkMVsjdirMUDdD.png',
      observer(newVal, oldVal) {
      }
    },
    info: {
      type: String,
      value: '',
      observer(newVal, oldVal) {
      }
    },
    backgroundColor: {
      type: String,
      value: '#fff'
    },
    color: {
      type: String,
      value: '#999'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
