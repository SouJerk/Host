App({
  onLaunch() {
    console.log('App.onLaunch()');
    wx.showModal({
      title:'欢迎你',
      content: '目前程序还在测试中噢',
    })
    wx.request({
      url: 'https://api.heclouds.com/devices/20482088/datapoints?datastream_id=Light,Temperature,Humidity&limit=20',
      header: {
        'content-type': 'application/json',
        'api-key': 't9P2NEMyug=cc7nGUF0ZC6IxipU='
      },
      success: function (res) {
        console.log(res.data)
        console.log("读取数据成功")        
      },

      fail: function (res) {
        console.log("读取数据失败")
      },

      complete: function (res) {
        console.log("读取完毕")
      }
    })
  },
  onShow: function () {
  },
  onHide: function () {
  },

  //本应用全局数据
  globalData: {
    temperature: {},
    light: {},
    humidity: {} ,
    tempx:{},
    humix:{},
    ligx:{},
    num:'12'
  }
})