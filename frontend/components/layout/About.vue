<template>
    <main class="main main-signin">
        <main-banner
            :title=title
            :subtitle=subtitle
            :buttonName=buttonName
            :imgURL=imgURL
            :route=route
            class="main-banner--white"
        ></main-banner>

        <div class="container">
            <div class="main-about">
                <h1 class="main-about__title title">ABOUT SECTION</h1>

                <div class="main-form">
                    <div class="main-form__grid">
                        <div>
                            <h1 class="main-about__subtitle text-lg">Where this design come from?</h1>
                            <p class="text-md">
                                I'm not a web designer, that was the most frustrating part about creating a website all by my own
                                So I start looking for some website I love, in this project I've based my design on Origin Website
                                using Adobe XD, Adobe Photoshop and GIMP.</br></br>
                                Also notice I'm using Mario images that of course all rights belongs to Nintendo.
                            </p>
                        </div>
                        <div>
                            <h1 class="main-about__subtitle text-lg">How was this web made?</h1>
                            <p class="text-md">
                                For this project I've used the MEVN Stack. One thing to mention is it was build on the new JS Runtime
                                Denojs, but I do have a lot of ideas for upgrating and by the moment I was developing this project
                                there were no Websockets modules.</br></br>
                                Tokens were implemented for authentication using jsonwebtoken library.
                                I have also use the CSS pre-processor called SASS (SCSS).</br>
                                Vue and Vue-Router were used but Vuex was not mandatory (yet)</br>
                            </p>
                        </div>
                    </div>
                </div>
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
            title: "WHAT ABOUT THIS?",
            subtitle: "Since I have a lot of free time I decided to create my personal website for two mainly reasons. To get a remote job and to test my skills.",
            buttonName: "Contact",
            imgURL: '/public/mario-builder.jpg',
            route: "contact"
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