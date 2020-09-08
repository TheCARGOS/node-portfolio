import "./scss/styles.scss"
import Vue from "vue"
import VueRouter from "vue-router"
import App from "./App.vue"

import store from "./store/index.js"
import routes from "./routes.js"

Vue.use( VueRouter )

const router = new VueRouter({
    routes,
    mode: "history"
})


const app = new Vue({
    store,
    router,
    render: h => h(App)
}).$mount("#app")