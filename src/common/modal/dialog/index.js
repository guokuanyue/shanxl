import DialogComponent from './Dialog.vue'
import Vue from 'vue'

//一种直接注册
Vue.component('Dialog',DialogComponent)

// 二种 
//通过封装插件的类似方法注册 使用vue.use()

// const Dialog = {
//   install:function(Vue){
//     Vue.component('Dialog',DialogComponent)
//   }
// }
// export default Dialog