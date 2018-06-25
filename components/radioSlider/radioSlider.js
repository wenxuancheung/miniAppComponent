// components/radioSlider/radioSlider.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    radio: {
      type: Object,
      value: "transparent"
    },
    src: {
      type: String,
      value: 'transparent',
      observer(newVal, oldValue) {
        this.voteAudioContext.src = this.properties.src
        this.voteAudioContext.play()
        this.voteAudioContext.onPlay(() => {
          this.voteAudioContext.volume = 0
        })
        this.voteAudioContext.onTimeUpdate(() => {
          const totalMinuteTime = 'radioSlider.totalMinuteTime'
          const totalSecondTime = 'radioSlider.totalSecondTime'
          const totalMinute = parseInt(this.voteAudioContext.duration / 60)
          const totalSecond = parseInt(this.voteAudioContext.duration) - totalMinute * 60
          this.setData({
            [totalMinuteTime]: this.checkTime(totalMinute),
            [totalSecondTime]: this.checkTime(totalSecond),
          })
          this.voteAudioContext.stop()
          this.voteAudioContext.offTimeUpdate()
        })
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isPlay: true,
    value: 0,
    radioSlider: {
      beginMinuteTime: '00',
      beginSecondTime: '00',
      totalMinuteTime: '00',
      totalSecondTime: '00'
    },
    newTime: 0
  },
  created() {
    this.voteAudioContext = wx.createInnerAudioContext()
    this.voteAudioContext.obeyMuteSwitch = false
    // console.log(this.properties.src)
    // this.voteAudioContext.src=this.properties.src
  },
  attached() {

  },
  detached() {
    this.voteAudioContext.stop()
  },
  /**
   * 组件的方法列表
   */
  methods: {
    sliderChange(e) {
      // this.triggerEvent('sliderChange',e.detail)

      // console.log(e.detail)
      const value = e.detail.value
      this.setData({
        value: e.detail.value
      })
      this.voteAudioContext.onPlay(() => {
      })
      console.log(this.voteAudioContext.paused)
      if (this.voteAudioContext.paused === false) {
        this.setData({
          newTime: value / 100 * this.voteAudioContext.duration
        })
        this.voteAudioContext.seek(this.data.newTime)
      }
      this.voteAudioContext.onTimeUpdate(() => {
        const nowTime = value / 100 * this.voteAudioContext.duration
        this.voteAudioContext.startTime = nowTime
        this.playRadio(nowTime)
      })
    },
    changing(e) {
      const value = e.detail.value
      this.setData({
        value: e.detail.value
      })
      console.log(this.voteAudioContext.paused)
      this.voteAudioContext.onPlay(() => {
      })
      if (this.voteAudioContext.paused === false) {
        this.setData({
          newTime: value / 100 * this.voteAudioContext.duration
        })
        this.voteAudioContext.seek(this.data.newTime)
      }
      this.voteAudioContext.onTimeUpdate(() => {
        const nowTime = value / 100 * this.voteAudioContext.duration
        this.voteAudioContext.startTime = nowTime
        this.playRadio(nowTime)
      })
    },
    playRadio(nowTime) {
      this.voteAudioContext.play()
      this.voteAudioContext.onPlay(() => {
      })
      this.voteAudioContext.onTimeUpdate(() => {
        this.voteAudioContext.volume = 1
        let beginSecond
        let beginMinute
        const beginSecondTime = 'radioSlider.beginSecondTime'
        const beginMinuteTime = 'radioSlider.beginMinuteTime'
        const totalMinuteTime = 'radioSlider.totalMinuteTime'
        const totalSecondTime = 'radioSlider.totalSecondTime'
        const totalMinute = parseInt(this.voteAudioContext.duration / 60)
        const totalSecond = parseInt(this.voteAudioContext.duration) - totalMinute * 60
        const value = parseFloat((this.voteAudioContext.currentTime / this.voteAudioContext.duration) * 100)
        if (nowTime) {
          beginMinute = parseInt(nowTime / 60)
          beginSecond = parseInt(nowTime) - beginMinute * 60
        } else {
          beginSecond = parseInt(this.voteAudioContext.currentTime) - this.data.radioSlider.beginMinuteTime * 60
          beginMinute = parseInt(this.voteAudioContext.currentTime / 60)
        }
        this.setData({
          [beginMinuteTime]: this.checkTime(beginMinute),
          [beginSecondTime]: this.checkTime(beginSecond),
          [totalMinuteTime]: this.checkTime(totalMinute),
          [totalSecondTime]: this.checkTime(totalSecond),
          value: value
        })
      })
      this.voteAudioContext.onEnded(() => {
        const beginSecondTime = 'radioSlider.beginSecondTime'
        const beginMinuteTime = 'radioSlider.beginMinuteTime'
        this.voteAudioContext.stop()
        this.setData({
          isPlay: true,
          value: 0,
          [beginMinuteTime]: '00',
          [beginSecondTime]: '00'
        })
      })
    },
    listenRadio() {
      this.setData({
        isPlay: false
      })
      //首次点击播放按钮和暂停后重新播放
      if (this.data.newTime == 0) {
        this.playRadio()
      } else {
        this.playRadio(this.data.newTime)
      }
    },
    stopRadio() {
      this.setData({
        isPlay: true
      })
      this.voteAudioContext.pause()
    },
    checkTime(i) {
      if (i < 10) {
        i = "0" + i
      }
      return i
    }
  }
})
