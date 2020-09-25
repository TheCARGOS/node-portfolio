<template>
    <main class="main main-contact">
        <div class="container">
            <section class="main-contact__section container main-form">
                <div v-if="errors.length">
                    <span>Please correct the following error(s):</span>
                    <ul>
                        <li v-for="error in errors">{{ error }}</li>
                    </ul>
                </div>
                <h1 class="main-contact__title">Sign in as Carlos</h1>
                <form @submit.prevent="login()">
                    <fieldset>
                        <input placeholder="Username" v-model="username">
                    </fieldset>
                    <fieldset>
                        <input type="password" placeholder="password" v-model="password">
                    </fieldset>
                    <span>Server message</span>

                    <button type="submit">Sign In</button>
                    <legend>This form is supposed to be for me only, from here i will manage the site.</legend>
                </form>
            </section>

            <div class="profile-section" v-if="loggedIn">
                {{goToDashboard()}}
            </div>
        </div>
    </main>
</template>

<script>
export default {
    name: "signin",
    data () {
        return {
            username: "",
            password: "",
            errors: []
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