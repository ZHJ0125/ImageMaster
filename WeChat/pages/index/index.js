//index.js
const grant_type = 'client_credentials'
const client_id = 'na7ZiKRvj3n1PvHdeOFSrbEh'
const client_secret = 'bMNEYK6717ebFl2hYzpuL9n0qx8waEl0'

Page({
  get_access_token: function (res) {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=' + grant_type + '&client_id=' + client_id + '&client_secret=' + client_secret,
      method: 'POST',
      complete:function(res) {
        console.log('Request complete')
      },
      success: function(res) {
        console.log(res)
      },
      fail: function(res) {
        console.log('Fail to request !')
        console.log(res)
      }
    })
  }
})
