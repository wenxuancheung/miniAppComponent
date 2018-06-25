# 组件库
#### components文件夹下放置各种组件
## components
### horseRaceLamp跑马灯组件
#### 效果
#### 使用：
```
 {
  "usingComponents": {
    "horseRaceLamp": "/components/horseRaceLamp/horseRaceLamp"
 }
```
#### 引用
```
  //info放入要循环的文本
  <horseRaceLamp info=""></horseRaceLamp>
```

### loading 加载组件
#### 效果
#### 使用：
```
 {
  "usingComponents": {
    "loading": "/components/loading/loading"
 }
 
```
#### 引用
```
  //设一个变量当某个特定时刻将isShow设为false或者true
  <loading src="路径" isShow="{{isShow}}"></loading>
```


### radioSlider 音频播放组件
#### 效果
#### 使用：
```
 {
  "usingComponents": {
    "radioSlider": "/components/radioSlider/radioSlider"
 }
 
```
#### 引用
```
  //src放入要播放的音频路径
  <radioSlider src="路径"></radioSlider>
```
### tip 弹窗组件
#### 效果
#### 使用：
```
 {
  "usingComponents": {
    "tip": "/components/tip/tip"
 }
 
```
#### 引用
```
  //Tip放入要显示的文本
  //wxml
  <tip Tip=""></tip>
  //如
  //js
  const msg = 'voteTip.voteTipContentText'
  const title = 'voteTip.voteTipTitleText'
  this.setData({
        [msg] : '你已经投票成功',
        [title] : '投票成功',
  })
```
