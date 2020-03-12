import Vue from 'vue';
import Vuex from 'vuex';

import readings from './modules/state1'

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    readings
  }
});