
import Vue from 'vue'
import Vuex from 'vuex'
import Carros from '@/features/carros/store'

Vue.use(Vuex)

const modules = {
  Carros
}

export default new Vuex.Store({
  modules
})
