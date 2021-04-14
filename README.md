# qiyejie-frontend

## 本项目用于服务企业捷的前端业务

**项目基于Vue.js的Uni-App**
**创建uni-app**
***项目构建使用正式版（对应HBuilderX最新正式版）***
```
vue create -p dcloudio/uni-preset-vue my-project
```

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
运行uni-app
```
npm run serve
//npm run dev:%PLATFORM%
```

### Compiles and minifies for production
```
npm run build
//npm run build:%PLATFORM%
```

### npm i --save-dev
```
webpack@^4.0.0
sass-loader
sass-loader@^10.1.1
```

### %PLATFORM% 可取值如下：

| 值         | 平台      | 

| -----------| ---------|

|app-plus  |  app平台生成打包资源（支持npm run build:app-plus，可用于持续集成。不支持run，运行调试仍需在HBuilderX中操作）|

|h5	|H5|

|mp-alipay|	支付宝小程序|

|mp-baidu	|百度小程序|

|mp-weixin|微信小程序|

|mp-toutiao|字节跳动小程序|

|mp-qq|qq 小程序|

|mp-360|360 小程序|

|quickapp-webview	|快应用(webview)|

|quickapp-webview-union |快应用联盟|

|quickapp-webview-huawei|	快应用华为|

