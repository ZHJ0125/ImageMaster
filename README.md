# ImageMaster

> WeChat mini-program using image recognition API

## 项目说明

2020年微信小程序期末作业，做了这个小程序。

小程序通过调用百度图像识别的API接口，实现了对动植物以及车辆的识别。

本项目**只是为了好玩**，初学者可以拿来练手。代码挺简单的，逻辑也比较清晰，**仅供学习交流使用**。

## 如何开发本项目

1. 克隆或下载本项目
2. [注册](https://cloud.baidu.com/doc/IMAGERECOGNITION/index.html)您自己的百度图像识别应用
3. 获取您自己的 `API Secret`，填写到程序指定位置
4. 使用[微信小程序开发者工具](https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html)运行此项目，注意要改成您自己的APPID，并[配置合法域名](https://developers.weixin.qq.com/miniprogram/dev/framework/ability/network.html)
5. 您可以查看我发布在 CSDN 的 [相关博客](https://blog.csdn.net/ZHJ123CSDN/article/details/103818721) 以了解开发过程
6. 若有问题，请在查阅相关资料后再联系我，谢谢。

## 关于 API 的说明

当时开源的时候没有注意，把自己百度应用程序的 `Secret` 、`Token` 都开源了出来，导致应用接口被大家多次调用，超过了接口的免费限额，最终导致之前有一段时间我的小程序无法使用。（现已解决，可正常使用）

~~所以如果您现在扫描小程序二维码测试该小程序，会提示 "`open api qps request limit reached`" （QPS超出限额）~~

由于我的免费 API 接口超过使用限额，因此我开通了"按量后计费"功能，目前微信小程序还可以正常使用。

***✔ 若您要开发您自己的小程序，可以 [自行申请](https://console.bce.baidu.com/ai/#/ai/imagerecognition/overview/index) 一个免费应用，将申请得到的 `API Secret` 填写到 [index.js](WeChat/pages/index/index.js) 代码里 ( 包括 `client_id` 和 `client_secret` ) ，这样同样可以免费使用百度 API 接口 !***

**⚠ 在此也严正声明：请大家不要用我的 API 接口做开发和测试，请您自己申请免费接口！**

## 相关链接

CSDN 相关文章：[微信小程序——图片识别](https://blog.csdn.net/ZHJ123CSDN/article/details/103818721)

扫描小程序二维码或微信搜索 `ImageMaster`:

<img width="400" height="120" src="Documents/WeChat_Search.jpg">

## 赞助

如果你喜欢 ImageMaster 并且它对你确实有帮助，欢迎给我打赏一杯咖啡哈~

<table frame=void rules=none><tr>
<td>支付宝</td><td>微信</td></tr><tr>
<td><img width="120" height="120" src="Documents/alipay.jpg"></td>
<td><img width="125" height="125" src="Documents/wechatpay.jpg"></td></tr>
</table>

## 开源协议

* 本项目采用 [Mozilla Public License 2.0](https://github.com/ZHJ0125/ImageMaster/blob/master/LICENSE) 开源许可协议
* Gitee地址： [https://gitee.com/zhj0125/ImageMaster](https://gitee.com/zhj0125/ImageMaster)
* GitHub地址：[https://github.com/ZHJ0125/ImageMaster/](https://github.com/ZHJ0125/ImageMaster/)
