// pages/shops/shops.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    mainActiveIndex: 0,
    activeId: null,
    items: [
      {
        text: '饮品',
        children: [
          {
            num: '1',
            tag: '八折',
            price: '10.00',
            desc: '樱桃味',
            title: '可乐',
            thumb: 'https://image1.quanmama.com/AdminImageUpload/ueditor/image/20170325/6362603962017870912819889.png',
          },
          {
            num: '1',
            tag: '七五折',
            price: '15.00',
            desc: '风味饮料',
            title: '美年达',
            thumb: '/pages/adv/shop3.jpg',
          },
        ]
      },
      {
        text: '衣服',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '小清新',
            title: '夏季连衣裙',
            thumb: '/pages/adv/shop2.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '纯欲风小碎花',
            title: '碎花连衣裙',
            thumb: '/pages/adv/shop4.png',
          },
        ]
      },
      {
        text: '鞋子',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '柔软耐穿',
            title: '人本',
            thumb: '/pages/adv/shop7.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '百搭耐穿',
            title: '森马',
            thumb: '/pages/adv/shop8.jpg',
          },
        ]
      },
      {
        text: '百货',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '卫生纸',
            title: '心相印',
            thumb: '/pages/adv/shop5.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '加大加厚',
            title: '超值垃圾袋',
            thumb: '/pages/adv/shop6.jpg',
          },
        ]
      },
      {
        text: '美妆',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '补水套装',
            title: '谷雨',
            thumb: '/pages/adv/shop9.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '粉底液',
            title: 'MISTINE',
            thumb: '/pages/adv/shop10.jpg',
          },
        ]
      },
      {
        text: '电器',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '全自动',
            title: '康佳按摩足浴',
            thumb: '/pages/adv/shop11.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '一扇两用',
            title: 'super电风扇',
            thumb: '/pages/adv/shop12.jpg',
          },
        ]
      },
      {
        text: '家具',
        children: [
          {
            num: '1',
            tag: '九折',
            price: '20.00',
            desc: '小清新',
            title: '夏季连衣裙',
            thumb: '/pages/adv/shop13.jpg',
          },
          {
            num: '1',
            tag: '八折',
            price: '25.00',
            desc: '纯欲风小碎花',
            title: '碎花连衣裙',
            thumb: '/pages/adv/shop14.jpg',
          },
        ]
      }
      
    ]
  },

  onClickNav(event) {
    const index = event.detail.index;
    this.setData({
      mainActiveIndex: index,
      activeId: null
    });
  },

  onClickItem(event) {
    const { index } = event.detail;
    this.setData({
      activeId: index
    });
  },
  addToCart(event) {
    const item = event.currentTarget.dataset.item; // 通过 dataset 获取点击的商品数据
    console.log(item)
    const itemData = {
        number: item.num,
        tag: item.tag,
        price: item.price,
        desc: item.desc,
        name: item.title,
        thumb: item.thumb
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
  showDialog(event) {
    wx.showToast({
      title: '功能正在建设中',
      icon: 'none' // 提示框图标，可以根据需求设置
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