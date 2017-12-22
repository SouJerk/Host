// start.js

Page({
  data:{
    tempx:24.11,
    humx:43.73,
    ligx:121.00,
    numbe:'晴 暖',
    remind:'注意防晒 也别穿太少哟'
  },
  getDataFromOneNet: function () {
    //从oneNET请求我们的Wi-Fi气象站的数据
    const requestTask = wx.request({
      url: 'https://api.heclouds.com/devices/20482088/datapoints?datastream_id=Light,Temperature,Humidity&limit=10',
      header: {
        'content-type': 'application/json',
        'api-key': 't9P2NEMyug=cc7nGUF0ZC6IxipU='
      },
      success: function (res) {
        console.log(res.data)
        //拿到数据后保存到全局数据
        var app = getApp()
        app.globalData.temperature = res.data.data.datastreams[0]
        app.globalData.light = res.data.data.datastreams[1]
        app.globalData.humidity = res.data.data.datastreams[2]
        app.globalData.tempx = app.globalData.temperature.datapoints[1].value
        app.globalData.ligx = app.globalData.light.datapoints[1].value
        app.globalData.humx = app.globalData.humidity.datapoints[1].value
        app.globalData.num = app.globalData.temperature.datapoints[1].value * 0.6 + app.globalData.light.datapoints[1].value*0.4
        console.log(app.globalData.ligx)
        console.log(app.globalData.tempx)
        console.log(app.globalData.humx)
        console.log("读取数据成功")
        wx.setStorage({
          key: 'tempx',
          data: 'app.globalData.tempx',
        })

        //跳转到天气页面，根据拿到的数据绘图
        wx.navigateTo({
          url: '../wifi_station/tianqi/tianqi',
        })          
      },

      fail: function (res) {
        console.log("读取数据失败")
      },

      complete: function (res) {
        console.log("读取完毕")
      }
    })
  },
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})
