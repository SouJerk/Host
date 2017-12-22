var app=getApp();
if (app.globalData.num==11){
Page({
  data: {
    MusicList: [{
      url: 'http://soujerk.gitee.io/learngit/music/11.mp3',
      image: 'http://soujerk.gitee.io/learngit/music/page.png',
      name: '不醉不会',
      author: '徐佳莹',
    }],
    progress: 0
  },
  MusicStart: function (e) {
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
    console.log(progress + '%')
  },
  MusicEnd: function () {
    wx.showModal({
      title: '提示',
      content: '音乐已播放完毕',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})}
else if (app.globalData.num == 12) {
  Page({
    data: {
      MusicList: [{
        url: 'http://soujerk.gitee.io/learngit/music/12.mp3',
        image: 'http://soujerk.gitee.io/learngit/music/page.png',
        name: '记昨日书',
        author: '伏仪',
      }],
      progress: 0
    },
    MusicStart: function (e) {
      var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
      var that = this
      that.setData({
        progress: progress
      })
      console.log(progress + '%')
    },
    MusicEnd: function () {
      wx.showModal({
        title: '提示',
        content: '音乐已播放完毕',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
  })
}
else if (app.globalData.num == 13) {
  Page({
    data: {
      MusicList: [{
        url: 'http://soujerk.gitee.io/learngit/music/13.mp3',
        image: 'http://soujerk.gitee.io/learngit/music/page.png',
        name: '不负相负',
        author: '漆柚',
      }],
      progress: 0
    },
    MusicStart: function (e) {
      var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
      var that = this
      that.setData({
        progress: progress
      })
      console.log(progress + '%')
    },
    MusicEnd: function () {
      wx.showModal({
        title: '提示',
        content: '音乐放完啦 有个好心情哟',
      })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

    },
  })
}
//num为计算出的环境情景值
