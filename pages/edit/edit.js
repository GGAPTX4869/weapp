// edit.js

Page({

  data:{
    id:'',
    name: '',
    tel: '',
    region: '',
    detail: ''
  },
  onLoad: function(options) {
    const id = options.id; // 获取传递过来的地址ID
    const name = options.name;
    const tel = options.tel;
    const region = options.region;
    const detail = options.detail;
    console.log("Received ID:", id);
    console.log(name);
    this.setData({
      id:id,
      name:name,
      tel:tel,
      region:region,
      detail:detail
    })
  },
  handleNameInput:function(e){
    this.setData({
      name:e.detail.value
    })
  },
  handleTelInput:function(e){
    this.setData({
      tel:e.detail.value
    })
  },
  handleDetailInput:function(e){
    this.setData({
      detail:e.detail.value
    })
  },
  handleRegionInput:function(e){
    this.setData({
      region:e.detail.value
    })
  },
  updateAddress(){
    const name = this.data.name;
    const tel = this.data.tel;
    const region = this.data.region;
    const detail = this.data.detail;
    console.log("11123")
    const id = this.data.id;
    console.log(id)
      // 构建请求体
  const requestData = {
    name: name,
    tel: tel,
    region: region,
    detail: detail
  };

  // 发送更新请求
  wx.request({
    url: `http://localhost:5000/address/update/${id}`,
    method: 'PUT',
    data: requestData,
    success: function(res) {
      // 更新成功，处理返回结果
      console.log(res.data);
      // 这里可以添加一些提示或者跳转逻辑
    },
    fail: function(error) {
      // 请求失败，处理错误
      console.error('Update address failed:', error);
      // 这里可以添加一些提示或者错误处理逻辑
    }
  });
  }

});
