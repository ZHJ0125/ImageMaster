//index.js
const grant_type = 'client_credentials'
const client_id = 'na7ZiKRvj3n1PvHdeOFSrbEh'
const client_secret = 'bMNEYK6717ebFl2hYzpuL9n0qx8waEl0'
var token = ''

Page({
  data: {
    imageUrl: "/images/upload_test.png"
  },

  get_access_token: function (res) {
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=' + grant_type + '&client_id=' + client_id + '&client_secret=' + client_secret,
      method: 'POST',
      success: function(res) {
        console.log('Request successful !')
        console.log(res.data)
        token = res.data.access_token;
        console.log('My token is : ' + token);
      },
      fail: function(res) {
        console.log('Fail to request !')
        console.log(res)
      }
    })
  },

  get_image: function(res) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        that.setData({
          imageUrl: tempFilePaths
        })
        console.log('Image Path is : ' + tempFilePaths)
        // console.log(res)
        wx.getFileSystemManager().readFile ({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          complete: res=> {
            console.log('complete')
            //console.log(res)
          },
          success: res => {
            console.log('data:image/png;base64,' + res.data)
          }
        })
      }
    })
    
  }
})
