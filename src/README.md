# 合并路由、静态资源服务
使用到的中间件
[koa-combine-routers](https://www.npmjs.com/package/koa-combine-routers)
[koa-static](https://www.npmjs.com/package/koa-static)


### 合并路由koa-combine-routers
> npm install koa-combine-routers

将功能模块和路由模块分开

#### 目录介绍

##### ./api
功能模块，实现业务的逻辑

##### ./routes
引用到的功能模块和对路径的管理

##### ./index.js
引用一次`app.use(router())`就可以了


### 静态资源管理koa-static
> const path = require('path')
> const Koa = require('koa')
> const app = new Koa()
> const statics = require('koa-static')
> app.use(statics(path.join(__dirname, '../public')))

使用path指定绝对路径

### Koa安全header处理 koa-helmet
> const Koa = require('koa')
> const app = new Koa()
> const helmet = require('koa-helmet')
> app.use(helmet())

通过增加如Strict-Transport-Security, X-Frame-Options, X-Frame-Options等HTTP头提高Express应用程序的安全性。
[koa-helmet](https://www.npmjs.com/package/koa-helmet)


****

### 运行

编译：
> npm run build

开发：
> npm run dev

清除dist文件
> npm run clean

#### 成功状态
浏览器请求
> http://localhost:3000/demo

返回
> {"msg":"body message"}