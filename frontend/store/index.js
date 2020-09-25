import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import auth from "./modules/auth"
import message from "./modules/message"

export default new Vuex.Store({
    modules: {
        auth,
        message
    }
})
