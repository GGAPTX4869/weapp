// pages/search.js
Page({

  data: {
    showResult: false,
    orderNum: '',
    listData: [], // 存储列表数据
    is_end: false, // 标记是否查询到最后一条信息
    currentPage: 1, // 当前页数
    pageSize: 1 // 每页数据条数

  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
     this.getListData()
  },
  getListData(){
    wx.request({
      url: 'http://127.0.0.1:5000/get',
      method: 'GET',
      data:{
        page: this.data.currentPage,
        size: this.data.pageSize
      },
    success: (res) => {
      const newData = res.data;
      if (newData.length < this.data.pageSize) {
        this.setData({
          is_end: true
        });
      }
      this.setData({
        listData: this.data.listData.concat(newData),
       
      });
    },
    fail: (err) => {
      console.error('请求数据失败', err);
    },
    complete: () => {
      wx.stopPullDownRefresh(); // 停止下拉刷新动画
    }
    })
  },

  // 查找单个
  inputorderNum: function (e) {
    this.setData({
      orderNum: e.detail.value
    })
  },
  onSearch: function(e) {
    const orderNum = this.data.orderNum;
    console.log(orderNum);
    wx.request({
      url: 'http://127.0.0.1:5000/getone',
      method: 'GET',
      data: {
        orderNum: orderNum
      },
      success: (res)=> {
        const data = res.data;
        if (data && data.length > 0) {
          this.setData({
            order: data,
            showResult: true
          }, ()=> {
            console.log("search")
            console.log(this.data.order);
          });
        } else {
          this.setData({
            showResult: false
          });
        }
      },
      fail: function(error) {
        console.error(error);
      }
    });
  }
  ,
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
    this.setData({
      listData: [], // 清空之前的数据
      is_end: false, // 重置 is_end 标记
      currentPage: 1 ,// 重置当前页数
      showResult: false,
      inputValue: ''
    });
    this.getListData(); // 重新请求第一页数据
   
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (!this.data.is_end) {
      this.data.currentPage++; // 下一页
      this.getListData(); // 请求下一页数据
    }
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})