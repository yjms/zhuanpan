 const rotary=(shopList,self)=>{
  let that = self;
  let num = 5;
  const _START_ROTATE = 90;//初始旋转了的角度
  const _DEFAULT_DEG = 4230; // 默认所转圈数
  num = parseInt(Math.random() * that.data.shopList.length, 10) + 1;// 随机抽取奖品
  let singDeg = 360 / that.data.shopList.length;  /*  一个格子的角度*/
  that.setData({
    curr_rewold: num,
    isdisable: false
  })
  console.log('抽奖次数', that.data.flag, '抽的奖品', that.data.shopList[that.data.curr_rewold - 1].text);
  if (that.data.flag == 1) {
    that.animation.rotate(_DEFAULT_DEG * that.data.flag + num * singDeg - singDeg / 2).step();/*第一次所转角度*/
  } else {
    that.animation.rotate(_DEFAULT_DEG * that.data.flag + _START_ROTATE * (that.data.flag - 1) + num * singDeg - singDeg / 2).step();
  }
  that.setData({ animationData: that.animation.export()})
}
const transition=(self)=>{
      let that = self;
      let flag = that.data.flag;
      ++flag;
      that.setData({ flag: flag, isdisable: true })
      let tip = '恭喜您获得奖品' + that.data.shopList[that.data.curr_rewold - 1].text;
      wx.showToast({
        icon: 'none',
        title: tip,
        duration: 3000
      })
}
module.exports={
  rotary:rotary,
  transition: transition
}