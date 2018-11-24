import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import store from './store/store'
import './utils/directives/index'



import 'babel-polyfill'


//mock
import './../mock/mock'

// axios
import axios from 'axios'
Vue.prototype.$axios = axios

//全局挂载echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts 



//全局组件
import './common/modal/dialog/index' //第一种方法直接注册
//第二种方法 全局注册
//import Dialog from './common/modal/dialog/index'
//Vue.use(Dialog)

// 注册comfirm组件
import comfirm from './common/modal/comfirm/index'
Vue.prototype.$comfirm = comfirm ;




Vue.config.productionTip = false
Vue.use(ElementUI);
import './assets/animate.css';

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
