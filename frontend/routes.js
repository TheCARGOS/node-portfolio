import Portfolio from "./components/layout/Portfolio.vue"
import Signin from "./components/layout/Signin.vue"
import Dashboard from "./components/layout/Dashboard.vue"
import Contact from "./components/layout/Contact.vue"

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
    },
    {
        path: "/contact",
        component: Contact,
        name: "contact"
    }
]