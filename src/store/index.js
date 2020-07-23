import Vue from 'vue'
import Vuex from 'vuex'

import board from './modules/board'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    strict: debug,
    modules: {
        board
    }
})