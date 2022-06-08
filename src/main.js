import Vue from 'vue'
import App from './App'
import router from './router';
import store from './vuex';
import common from './components';
import http from '../src/utils/httpUtil'

Vue.config.productionTip = false

Vue.prototype.$http = http

// 通用组件管理
Vue.use(common);

// 全局日期时间过滤器
Vue.filter("dateFormat", function (originVal) {
    const dt = new Date(originVal);
    const y = dt.getFullYear();
    const m = (dt.getMonth() + 1 + "").padStart(2, "0");
    const d = (dt.getDate() + "").padStart(2, "0");
    const hh = (dt.getHours() + "").padStart(2, "0");
    const mm = (dt.getMinutes() + "").padStart(2, "0");
    const ss = (dt.getSeconds() + "").padStart(2, "0");
    return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
});



new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
