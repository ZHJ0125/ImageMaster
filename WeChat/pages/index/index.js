//index.js
const grant_type = 'client_credentials'
const client_id = 'na7ZiKRvj3n1PvHdeOFSrbEh'
const client_secret = 'bMNEYK6717ebFl2hYzpuL9n0qx8waEl0'
var token = null
var base64 = null
var apiUrl = null

Page({
  data: {
    imageUrl: "/images/upload_test.png",
    message: 'Welcome to ImageMaster !\n Author : ZhangH.J.'
  },

  onReady: function(res) {
    // get access_token from BaiDu API
    wx.request({
      url: 'https://aip.baidubce.com/oauth/2.0/token?grant_type=' + grant_type + '&client_id=' + client_id + '&client_secret=' + client_secret,
      method: 'POST',
      success: function (res) {
        console.log('Request successful !')
        // console.log(res.data)
        token = res.data.access_token;
        console.log('My token is : ' + token);
      },
      fail: function (res) {
        console.log('Fail to request !')
        console.log(res)
      }
    })
  },

  get_Animal_image: function(res) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        apiUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal'
        that.setData({
          imageUrl: tempFilePaths,
        })
        console.log('My API URL is : ' + apiUrl)
        console.log('Image Path is : ' + tempFilePaths)
        // console.log(res)
        wx.getFileSystemManager().readFile ({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          // complete: res=> {
          //   console.log('complete')
          //   console.log(res)
          // },
          success: res => {
            base64 = res.data
            // console.log('data:image/png;base64,' + base64)
          }
        })
      }
    })
  },

  get_Plant_image: function (res) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        apiUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/plant'
        that.setData({
          imageUrl: tempFilePaths,
        })
        console.log('My API URL is : ' + apiUrl)
        console.log('Image Path is : ' + tempFilePaths)
        // console.log(res)
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          // complete: res=> {
          //   console.log('complete')
          //   console.log(res)
          // },
          success: res => {
            base64 = res.data
            // console.log('data:image/png;base64,' + base64)
          }
        })
      }
    })
  },

  get_Car_image: function (res) {
    var that = this
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        apiUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/car'
        that.setData({
          imageUrl: tempFilePaths,
        })
        console.log('My API URL is : ' + apiUrl)
        console.log('Image Path is : ' + tempFilePaths)
        // console.log(res)
        wx.getFileSystemManager().readFile({
          filePath: res.tempFilePaths[0],
          encoding: 'base64',
          // complete: res=> {
          //   console.log('complete')
          //   console.log(res)
          // },
          success: res => {
            base64 = res.data
            // console.log('data:image/png;base64,' + base64)
          }
        })
      }
    })
  },

  recognition_image: function(res) {
    var that = this
    wx.request({
      url: apiUrl + '?access_token=' + token,
      method: 'POST',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      data: {
        image: base64
      },
      success: res => {
        var result = null
        console.log('recognition_image Success')
        if(res.data.result == null) {
          console.log(res.data.error_msg)
          console.log(base64)
          result = res.data.error_msg
        }else {
          console.log(res.data.result[0].name)
          result = res.data.result[0].name
        }
        that.setData({
          message: '识别结果 : ' + result,
        })
      }
    })
  }
})
