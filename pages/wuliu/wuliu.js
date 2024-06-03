Page({
  data: {
    companies: [
      { name: '中通快递', code: 'ZTO' },
      { name: '圆通快递', code: 'YTO' },
      { name: '邮政快递', code: 'YZPY' },
      { name: '极兔快递', code: 'JTKD' },
      { name: '韵达快递', code: 'YD' },
      // 可以根据需要添加更多物流公司
    ],
    selectedCompanyIndex: 0,
    trackingNumber: '',
    wuliuData: null,
  },
  
  onCompanyChange(e) {
    this.setData({
      selectedCompanyIndex: e.detail.value
    });
  },
  
  onTrackingNumberInput(e) {
    this.setData({
      trackingNumber: e.detail.value
    });
  },
  
  getWuliu() {
    var that = this;
    const selectedCompany = this.data.companies[this.data.selectedCompanyIndex];
    wx.request({
      url: 'http://127.0.0.1:5000/get-kdi',  // 修改为你的后端地址
      method: 'GET',
      data: {
        no: this.data.trackingNumber,
        t: selectedCompany.code
      },
      success(res) {
        console.log("获取物流数据成功：", res.data);
        that.setData({
          wuliuData: res.data.result
        });
      },
      fail(error) {
        console.error("获取物流数据失败：", error);
      }
    });
  },
  
  onLoad() {
    // 初始时不需要加载物流数据
  }
});
