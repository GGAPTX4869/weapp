Page({
  data: {
    sendingList: [] // 存储发送信息的列表
  },
  onLoad: function () {
    // 页面加载时向后端发送请求获取数据
    this.getSendingData();
  },
  // 向后端发送请求获取发送信息数据
  getSendingData: function () {
    var that = this;
    wx.request({
      url: 'http://localhost:5000/api/sending', // 后端接口地址
      method: 'GET',
      success: function (res) {
        if (res.statusCode === 200) {
          // 如果请求成功，将获取到的数据更新到页面的 sendingList 变量中
          that.setData({
            sendingList: res.data
          });
        } else {
          // 请求失败时给出提示
          wx.showToast({
            title: '获取数据失败',
            icon: 'none'
          });
        }
      },
      fail: function () {
        // 请求失败时给出提示
        wx.showToast({
          title: '请求失败',
          icon: 'none'
        });
      }
    });
  }
});
