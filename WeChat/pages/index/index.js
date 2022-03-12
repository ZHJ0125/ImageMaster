//index.js

const grant_type = 'client_credentials'
const client_id = 'xxxxxxxxxxxxxxxxxxx'
const client_secret = 'xxxxxxxxxxxxxxx'
var token = null
var base64 = null
var apiUrl = null


Page({
  data: {
    imageUrl: "/images/upload_test.png",
    message: 'Welcome to ImageMaster !\n Author : ZhangH.J.',
    load_logo: 'waiting',
    load_title: "等待上传图片",
    load_message: " 请上传图片",
    btn_enable:true
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
    that.setData({
      load_title: "正在上传",
      load_message: "正在上传图片,请稍后"      
    })
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success(res) {
        var tempFilePaths = res.tempFilePaths
        apiUrl = 'https://aip.baidubce.com/rest/2.0/image-classify/v1/animal'
        that.setData({
          imageUrl: tempFilePaths,
          load_logo: "success",
          load_message: "等待识别图片,请点击识别按钮以识别图片",
          load_title: "上传图片成功",
          btn_enable: false
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
          load_logo: "success",
          load_message: "等待识别图片,请点击识别按钮以识别图片",
          load_title: "上传图片成功",
          btn_enable: false
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
          load_logo: "success",
          load_message: "等待识别图片,请点击识别按钮以识别图片",
          load_title: "上传图片成功",
          btn_enable: false
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
    that.setData({
      load_title: "正在识别",
      load_message: "正在识别图片,请稍后"
    })
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
        var score = 0
        console.log('recognition_image Success')
        if(res.data.result == null) {
          console.log(res.data.error_msg)
          console.log(base64)
          result = res.data.error_msg
        }else {
          console.log(res.data.result)
          result = res.data.result[0].name
          score = res.data.result[0].score
        }
        that.setData({
          load_title: '识别结果 : ' + result,
          load_message: '置信度' + score
        })
      }
    })
  }
})
