import Vue from 'vue'
import App from './App'
import router from './router';
import store from './vuex';
import common from './components';

Vue.config.productionTip = false

// 通用组件管理
Vue.use(common);

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app')
