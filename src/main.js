// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

//配置iview
import iView from 'iview'
import 'iview/dist/styles/iview.css';
import VueRouter from 'vue-router'

//配置echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 

Vue.use(VueRouter);
Vue.use(iView);

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  // components: { App },
  // template: '<App/>'
  render: h => h(App)
})
