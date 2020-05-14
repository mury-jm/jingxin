import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import Main_store from './Main_store'
import publicapi from './public'
import Allorder from './Allorder'

export default new Vuex.Store({
  state: {
    mybool:true,
    mybool2:false,
    username:"",
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Main_store  ,//main的全局数据
    publicapi,
    Allorder
  }
})
