// pages/jijian/jijian.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // multiIndex: [0, 0, 0],
    name: '',
    tel: '',
    region: ['省', '市', '区'],
    address: '',
    customItem: '全部'
  },
  // 点击获取值
  inputname: function(e){
    this.setData({
      name: e.detail.value
    })
  },
  inputtel: function(e){
    this.setData({
      tel: e.detail.value
    })
  },
  inputaddress: function(e){
    this.setData({
      address: e.detail.value
    })
  },
  bindRegionChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      region: e.detail.value
    })
  },
  onConfirm: function(e){
    const name=this.data.name;
    const tel=this.data.tel;
    const region=this.data.region;
    const address=this.data.address;
    //获取当前页面栈
    const pages=getCurrentPages();
    const prevPage=pages[pages.length-2];
    if(prevPage){
      prevPage.setData({
        get_name: name,
        get_tel: tel,
        get_region: region,
        get_detail: address
      });
    }
      wx.navigateBack({
        delta: 1
      });
    
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

  }
})