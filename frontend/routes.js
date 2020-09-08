import Portfolio from "./components/Portfolio.vue"
import Signin from "./components/Signin.vue"
import Dashboard from "./components/Dashboard.vue"

export default [
    {
        path: "/",
        component: Portfolio,
        name: "home"
    },
    {
        path: "/signin",
        component: Signin,
        name: "signin"
    },
    {
        path: "/dashboard",
        component: Dashboard,
        name: "dashboard"
    }
]