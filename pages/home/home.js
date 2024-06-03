// pages/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  },
  scanQRCode: function () {
    wx.scanCode({
      success(res) {
        // 获取扫描结果
        const result = res.result;
        
        // 跳转到 send 页面并携带扫描结果参数
        wx.navigateTo({
          url: '/pages/send/send?result=' + encodeURIComponent(result)
        });
      },
      fail(err) {
        console.error(err)
      }
    })
  },
  onLoad: function(options) {
    // 获取携带的参数
    const result = decodeURIComponent(options.result);
    
    // 在页面上显示扫描结果
    console.log(result);
    this.setData({
      scanResult: result
    });
  }
})