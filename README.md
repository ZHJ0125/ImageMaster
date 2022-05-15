# ImageMaster

> WeChat mini-program using image recognition API

## 项目说明

2020年微信小程序期末作业，做了这个小程序。

小程序通过调用百度图像识别的API接口，实现了对动植物以及车辆的识别。

本项目**只是为了好玩**，初学者可以拿来练手。之前写的代码挺烂的，**仅供学习交流使用**。

由于年代久远，此项目中使用的百度图像识别接口有可能已被调整，因此代码仅供参考。

## 如何开发本项目

1. 克隆或下载本项目
2. 注册您自己的百度图像识别应用
3. 获取您自己的 `API Secret`，填写到程序指定位置
4. 使用微信小程序开发者工具本地运行此项目
5. 您可以查看我发布在 CSDN 的 [相关博客](https://blog.csdn.net/ZHJ123CSDN/article/details/103818721) 以了解开发过程

## 关于 API 的说明

当时开源的时候没有注意，把自己百度应用程序的 `Secret` 、`Token` 都开源了出来，导致应用接口被大家多次调用，超过了接口的免费限额，最终导致我创建的应用被封了。

~~所以如果您现在扫描小程序二维码测试该小程序，会提示 "`open api qps request limit reached`" （QPS超出限额）~~

由于我的免费 API 接口超过使用限额，因此我开通了"按量后计费"功能，目前微信小程序还可以正常使用。

***✔ 您也可以 [自行申请](https://console.bce.baidu.com/ai/#/ai/imagerecognition/overview/index) 一个免费应用，将申请得到的 `API Secret` 填写到 [index.js](WeChat/pages/index/index.js) 代码里 ( 包括 `client_id` 和 `client_secret` ) ，这样同样可以免费使用百度 API 接口 !***

**⚠ 在此也严正声明：请大家不要用我的 API 接口做开发和测试，请您自己申请免费接口！**

## 项目进度

本项目开发过程使用 GitHub Projects 跟踪项目进度，感兴趣的话可以 [来看看](https://github.com/ZHJ0125/ImageMaster/projects/1)

## 相关链接

小程序二维码：

<img width="180" height="180" src="Documents/WeChat_Image.jpg"/>

微信搜索 `ImageMaster`：

<img width="400" height="120" src="Documents/WeChat_Search.png"/>

CSDN 相关文章：

[微信小程序——图片识别](https://blog.csdn.net/ZHJ123CSDN/article/details/103818721)

## 开源协议

* 本项目采用 [Mozilla Public License 2.0](https://github.com/ZHJ0125/ImageMaster/blob/master/LICENSE) 开源许可协议
* Gitee地址： [https://gitee.com/zhj0125/ImageMaster](https://gitee.com/zhj0125/ImageMaster)
* GitHub地址：[https://github.com/ZHJ0125/ImageMaster/](https://github.com/ZHJ0125/ImageMaster/)
