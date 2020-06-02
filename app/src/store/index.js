import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        map: false
    },
    getters: {
        map: state => state.map
    },
    mutations: {
        map: state => state.map = true
    }
});

export default store;