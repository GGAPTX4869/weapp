// pages/addAddress/addAddress.js

Page({
  data: {
    name: '',
    tel: '',
    region: '',
    detail: ''
  },

  handleNameInput: function(e) {
    this.setData({
      name: e.detail.value
    });
  },

  handleTelInput: function(e) {
    this.setData({
      tel: e.detail.value
    });
  },

  handleRegionInput: function(e) {
    this.setData({
      region: e.detail.value
    });
  },

  handleDetailInput: function(e) {
    this.setData({
      detail: e.detail.value
    });
  },

  addAddress: function() {
    wx.request({
      url: 'http://localhost:5000/address/add',
      method: 'POST',
      data: {
        name: this.data.name,
        tel: this.data.tel,
        region: this.data.region.split(','),
        detail: this.data.detail
      },
      success: res => {
        console.log('Address added successfully:', res.data.message);
        wx.navigateBack({
          delta: 1
        });
      },
      fail: err => {
        console.error('Failed to add address:', err);
      }
    });
  }
});
