import Vue from 'vue'
import Vuex from 'vuex'

import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'


Vue.use(Vuex)

//模块new module

import news from '../components/news/store/index'



export default new Vuex.Store({
  modules: {
   news
  },
  state,
  actions,
  getters,
  mutations
});



