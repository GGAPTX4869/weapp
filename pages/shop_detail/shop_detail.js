// pages/shop_detail/shop_detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    thumb: '',
    price: '',
    name: '',
    desc: '',
    tag: '',
    number: ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
// 获取当前页面栈的实例
const pages = getCurrentPages();
// 当前页面栈数组的最后一个元素就是当前页面
  const currentPage = pages[pages.length - 1];
  const thumb=options.thumb;
  const price=options.price;
  const name=options.name;
  const desc=options.desc;
  const tag=options.tag;
  const number=options.number;
  console.log(thumb);
  console.log(price);
  console.log(name);
  console.log(desc);
  console.log(tag);
  console.log(number);
  this.setData({
    thumb: thumb,
    price: price,
    name: name,
    desc: desc,
    number: number,
    tag: tag
  });

  },
  onClickButton() {
    wx.showToast({
      title: '功能正在建设中',
      icon: 'none' // 提示框图标，可以根据需求设置
    });

  },
  addToCart(event) {
    const itemData = {
      thumb: this.data.thumb,
      price: this.data.price,
      name: this.data.name,
      desc: this.data.desc,
      number: this.data.number,
      tag: this.data.tag
    };
    // 发送商品数据到后端服务器
    wx.request({
      url: 'http://127.0.0.1:5000/addToCart',
      method: 'POST',
      data: itemData,
      success(res) {

        console.log('商品已成功加入购物车');
        wx.showToast({
          title: '加入购物车成功',
          icon: 'none' // 提示框图标，可以根据需求设置
        });
      },
      fail(err) {
        console.error('加入购物车失败', err);
      }
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