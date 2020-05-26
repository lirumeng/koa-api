// 合并路由
import combineRouters from 'koa-combine-routers'

import demoroutes from './demoRouter'

export default combineRouters(demoroutes)