Page({
  data: {
    username: '',
    password: ''
  },

  onUsernameInput: function(e) {
    this.setData({
      username: e.detail.value
    });
  },

  onPasswordInput: function(e) {
    this.setData({
      password: e.detail.value
    });
  },

  // onLogin: function() {
    clickOnLoginBtn(){
    wx.login({
      success: res => {
        if (res.code) {
          // 向服务器发送登录凭证 code
          wx.request({
            url: 'http://10.138.18.232:5000/login',
            method: 'POST',
            data: {
              code: res.code,
              username: this.data.username,
              password: this.data.password
            },
            success: response => {
              if (response.statusCode === 200) {
                const openid = response.data.openid;
             
                wx.setStorageSync('openid', openid);
                console.log('openid在这里',openid)
                wx.showToast({
                  title: '',
                  icon: 'success'
                });
                wx.navigateTo({
                  url: '/pages/index/index'
                });
              } else {
                wx.showToast({
                  title: '登录失败',
                  icon: 'error'
                });
              }
            },
            fail: () => {
              wx.showToast({
                title: '请求失败',
                icon: 'error'
              });
            }
          });
        } else {
          console.log('登录失败！' + res.errMsg);
     
        }
      }
    });
  }
});
