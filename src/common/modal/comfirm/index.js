import Comfirm from './Comfirm.vue'
import Vue from 'vue'
const VueComponent = Vue.extend(Comfirm);
const vm = new VueComponent().$mount();

let defaultOptions = {
  title:'默认提示头',
  msg:'默认提示信息按时',
  isShow:false
};


let init = false;//已存在不在插入页面
const confirm = function (options) {
Object.assign(vm,defaultOptions,options);
  if (!init) {
    document.body.appendChild(vm.$el);
    init = true;
  }
  return vm.confirm();
};

export default confirm;


