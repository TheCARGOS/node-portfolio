<template>
    <main class="main main-signin">
        <main-banner
            :title=title
            :subtitle=subtitle
            :buttonName=buttonName
            :imgURL=imgURL
            class="main-banner--red"
        ></main-banner>

        <div class="container">
            <div class="main-form">
                <h1 class="main-form__title">SIGN IN AS CARLOS</h1>
                <div v-if="errors.length">
                    <span>Please correct the following error(s):</span>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
                <div class="main-form__grid">
                    <form @submit.prevent="login()">
                        <fieldset>
                            <input placeholder="Username" v-model="username">
                        </fieldset>
                        <fieldset>
                            <input type="password" placeholder="password" v-model="password">
                        </fieldset>
                        <span>Server message</span>
                        <button class="main-form__button main-form__button--block" type="submit">Sign In</button>
                        <legend class="main-form__span">This form is supposed to be for me only, from here i will manage the site.</legend>
                    </form>
                    <div>
                        <img src="/public/mario-old.png" style="max-height: 300px;">
                    </div>
                </div>
            </div>

            <div class="profile-section" v-if="loggedIn">
                {{goToDashboard()}}
            </div>
        </div>
    </main>
</template>

<script>
import MainBanner from "../items/MainBanner.vue"

export default {
    name: "signin",
    components: {
        MainBanner
    },
    data () {
        return {
            username: "",
            password: "",
            errors: [],

            // banner content
            title: "LOGIN AS CARLOS",
            subtitle: "From here I will manage the site. From here I will manage the site. From here I will manage the site.",
            buttonName: "Log in",
            imgURL: '/public/mario-builder.jpg'
        }
    },
    computed: {
        loggedIn () { return this.$store.getters.loggedIn }
    },
    methods: {
        async login () {
            const data = {
                username: this.username,
                password: this.password
            }

            this.errors = []
            if (this.username && this.password ) {
                const response = await this.$store.dispatch("retrieveToken", data)
    
                if (!response) {
                    this.errors.push("Username and password do not match.")
                } 
                else {
                    await this.$store.dispatch("getUserInfo", this.$store.state.auth.token)
                }
            } else {
                this.errors.push("Username and password required")
            }

        },
        async goToDashboard () {
            await this.$store.dispatch("getUserInfo", this.$store.state.auth.token)
            this.$router.push("/dashboard")
        }
    }
}
</script>