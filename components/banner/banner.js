// components/banner/banner.js
Component({
  options:{
    multipleSlots:true //多slot支持
  },
  //组件的属性列表
  properties:{

  },
  //组件的初始数据
  data:{

  },
  //组件方法列表
  methods:{

  },
  data:{
    imgUrls: [
      'http://i2.bvimg.com/673045/8163542912dce066.png',
      'http://i2.bvimg.com/673045/8163542912dce066.png',
      'http://i2.bvimg.com/673045/8163542912dce066.png',
      'http://i2.bvimg.com/673045/8163542912dce066.png',
    ],
    indicatorDots: true,  //是否显示面板指示点
    autoplay: true,      //是否自动切换
    interval: 3000,       //自动切换时间间隔
    duration: 1000,       //滑动动画时长
  }
})