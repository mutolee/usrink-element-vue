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

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
