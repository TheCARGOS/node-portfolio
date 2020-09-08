<template>
    <main class="main main-contact">
        <section class="main-contact__section container">
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
    </main>
</template>

<script>
export default {
    name: "signin",
    data () {
        return {
            username: "",
            password: ""
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

            const response = await this.$store.dispatch("retrieveToken", data)

            if (!response) {
                alert("username or password are incorrect")
            } 
            else {
                await this.$store.dispatch("getUserInfo", this.$store.state.auth.token)
            }
        },
        async goToDashboard () {
            await this.$store.dispatch("getUserInfo", this.$store.state.auth.token)
            this.$router.push("/dashboard")
        }
    }
}
</script>