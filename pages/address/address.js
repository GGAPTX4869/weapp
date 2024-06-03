// pages/addressBook/addressBook.js

Page({
  data: {
    addresses: []
  },

  onLoad: function() {

  },
  onShow:function() {
    this.getAllAddresses();
  },
  getAllAddresses: function() {
    wx.request({
      url: 'http://localhost:5000/address/list', // 根据您的实际情况修改URL
      method: 'GET',
      success: res => {
        this.setData({
          addresses: res.data.addresses
        });
      },
      fail: err => {
        console.error('Failed to fetch addresses:', err);
      }
    });
  },

  // 删除地址
deleteAddress: function(e) {
  const id = e.currentTarget.dataset.id;
  wx.request({
    url: `http://localhost:5000/address/delete/${id}`,
    method: 'DELETE',
    success: res => {
      console.log('Address deleted successfully:', res.data.message);
      this.getAllAddresses();
    },
    fail: err => {
      console.error('Failed to delete address:', err);
    }
  });
},

  // 更新地址
  updateAddress: function(event) {
    console.log(event.currentTarget.dataset); // 检查传入的数据
    const id = event.currentTarget.dataset.id; 
    const name = event.currentTarget.dataset.name;
    
    console.log(id)
  }

});
