// components/infoSwiper/infoSwiper.js
Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  /**
   * 组件的属性列表
   */
  properties: {
    swiper:{
      type:Object,
      value:'transparent',
      observer(){
        this.setData({
          voteSwiper:{
            ...this.data.voteSwiper,
            ...this.properties.swiper
          }
        })
      }
    },
    swiperContent:{
      type:'String',
      value:''
    },
    width:{
      type:Number,
      value:100
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    voteSwiper:{
      haveJoinNumber: true,
      autoplay: true,
      interval: 1000,
      vertical: true,
      swiperTextColor: '#fff',
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})
