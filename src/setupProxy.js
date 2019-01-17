// 修改本文件，需要重启前端服务yarn start
// parcel不支持
// But you can use parcel as middleware in your express application
const proxy = require('http-proxy-middleware');
module.exports = function (app) {
    // 接口代理e.g.
    app.use(proxy('/authuser/', { target: 'http://*.*.*.*:8080/service' }));
    app.use(proxy('/user/', { target: 'http://*.*.*.*:8080//service' }));
};
