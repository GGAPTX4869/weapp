
Page({
  /**
   * 页面的初始数据
   */
  data: {
        send_name: '',
        send_tel: '',
        send_region: '',
        send_detail: '',
        get_name: '',
        get_tel: '',
        get_region: '',
        get_detail: '',
        
      // tab选项
      tabList: [
          {title: "普通寄",index: "0",},
          {title: "专属寄",index: "1",},
          {title: "批量寄",index: "2",}
      ],
      tabsId: 0, //默认选型为装备
  },
  // 滑动时触发的事件
  slideOn(e) {
      // 拿到当前索引并动态改变
      this.setData({
          tabsId: e.detail.current
      })
  },

  //点击tab时触发
  tabsOn(e) {
      this.setData({
          //拿到当前索引并动态改变
          tabsId: e.currentTarget.dataset.idx
      })
  },

 sendDataBack: function(e){
   const send_name=this.data.send_name;
   const send_tel=this.data.send_tel;
   const send_region=this.data.send_region;
   const send_detail=this.data.send_detail;
   const get_name=this.data.get_name;
   const get_tel=this.data.get_tel;
   const get_region=this.data.get_region;
   const get_detail=this.data.get_detail;
   function generateRandomNumber() {
    return Math.floor(Math.random() * 9000000) + 1000000;
  }
  
    var orderNum = generateRandomNumber();
    var date = new Date();

    var year = date.getFullYear();
    var month = String(date.getMonth() + 1).padStart(2, '0'); // 月份从0开始，需要加1
    var day = String(date.getDate()).padStart(2, '0');
    var hours = String(date.getHours()).padStart(2, '0');
    var minutes = String(date.getMinutes()).padStart(2, '0');
    var seconds = String(date.getSeconds()).padStart(2, '0');
    
    var standardTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    console.log(standardTime);

   wx.request({
     url: 'http://127.0.0.1:5000/send',
       data: {
      send_name: send_name,
      send_tel: send_tel,
      send_region: send_region,
      send_detail: send_detail,
      get_name: get_name,
      get_tel: get_tel,
      get_region: get_region,
      get_detail: get_detail,
      orderNum: orderNum,
      order_time: standardTime
     },
     method: 'POST',
     success(res){
       if(res.statusCode == 200){
        console.log(res.data)
        wx.showToast({
          title: '下单成功',
          icon: 'success',
          duration: 2000
        })
       }
     },
     fail(err){
      console.log("失败")
     }
   })
 },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    
      
    
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