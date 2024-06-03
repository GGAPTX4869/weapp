// pages/orderdetail/orderdetail.js
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
 // 获取传递过来的订单信息并解析
  let order_num = options.detail_num;
  this.setData({
    orderNum: order_num,
  },()=>{
    console.log("hi")
    console.log(this.data.orderNum);
  wx.request({
    url: 'http://127.0.0.1:5000/getone',
      method: 'GET',
      data: {
        orderNum: this.data.orderNum
      },
      success: (res)=> {
        const data = res.data;
        if (data && data.length > 0) {
          this.setData({
            order: data,
          }, ()=> {
            console.log("lalala")
            console.log(this.data.order);
          });
          
        } 
      },
      fail: function(error) {
        console.error(error);
       }
    });
  });
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