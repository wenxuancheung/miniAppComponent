# 组件库
#### components文件夹下放置各种组件
## components
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/title.png)
### horseRaceLamp跑马灯组件
#### 效果
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/horseRaceLamp.png)
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
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/loading.png)
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
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/radioSlider.png)
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
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/tip.png)
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
  <tip Tip="" tipTitle="标题" tipContent="内容"></tip>
```

### infoSwiper 信息轮播组件
#### 效果
![image](https://github.com/wenxuancheung/miniAppComponent/raw/master/image/infoSwiper.png)
#### 使用：
```
 {
  "usingComponents": {
    "tip": "/components/infoSwiper/infoSwiper"
 }
 
```
#### 引用
```
<infoSwiper swiperContent="轮播内容" width="长度"></infoSwiper>
//如wxml
<infoSwiper swiperContent="{{content}}" width="500"></infoSwiper>
//js
content:[
  {
    info:'这是组件'
  },
  {
    info:'这是InfoSwiper'
  }
]
```