<template>
    <main class="main main-contact" style="background: #1E262C;">
        <main-banner
            :title=title
            :subtitle=subtitle
            :buttonName=buttonName
            :imgURL=imgURL
            :route=route
            class="main-banner--red"
        ></main-banner>

        <div class="container">
            <div class="main-form">
                <h1 class="title">MESSAGE ME</h1>
                <span v-if="errors.length" class="main-contact__span">All fields are required.</span>
                <form class="main-form__grid" @submit.prevent="sendMessage()">
                    <div>
                        <fieldset>
                            <legend class="main-form__legend" for="name">NAME</legend>
                            <input v-model="name"class="main-contact__input" placeholder="Name"/>
                        </fieldset>
                        <fieldset>
                            <legend class="main-form__legend" for="email">EMAIL</legend>
                            <input v-model="email" class="main-contact__input" placeholder="Email"/>
                        </fieldset>
                        <fieldset>
                            <legend class="main-form__legend" for="phone">PHONE</legend>
                            <input v-model="phone" class="main-contact__input" placeholder="Phone"/>
                        </fieldset>
                    </div>
                    <div>
                        <fieldset>
                            <legend class="main-form__legend" for="subject">SUBJECT</legend>
                            <input v-model="subject" class="main-contact__input" placeholder="Subject"/>
                        </fieldset>
                        <fieldset>
                            <legend class="main-form__legend" for="message">MESSAGE</legend>
                            <textarea v-model="description" rows="5" class="main-contact__input" placeholder="Type your message...">
                            </textarea>
                        </fieldset>
                        <button class="main-form__button main-form__button--circle" type="submit"><i class="fas fa-play" style="color: white;"></i></button>
                    </div>
                </form>
            </div>
        </div>
    </main>
</template>

<style lang="scss" scoped>
    fieldset {
        margin: 1rem 0;
    }

    input {
        line-height: 2;
    }

    textarea {
        display: block;
        width: 100%;
        line-height: 1.5;
        font-size: 1.3rem;
        padding-left: 1.5rem;
        border-radius: 5px;
        border: 1px solid #DCDCDC;
    }
</style>

<script>
import MainBanner from "../items/MainBanner.vue"

export default {
    components: {
        MainBanner
    },
    data () {
        return {
            name: "",
            email: "",
            phone: "",
            subject: "",
            description: "",
            errors: [],

            // banner content
            title: "CONTACT ME",
            subtitle: "Feel free to contact me anytime using this form or via gmail at loayavelez@gmail.com I will replay as  soon as possible.",
            buttonName: "Contact me",
            imgURL: '/public/mario-beach.jpg',
            route: "contact"
        }
    },
    methods: {
        sendMessage () {
            this.errors = []
            if ((this.name.length > 0) && (this.email.length > 0) && (this.phone.length > 0) && (this.subject.length > 0) && (this.description.length > 0)) {
                if (!this.validEmail(this.email)) {
                    this.errors.push("Valid email required.")
                } else {
                    const data = {
                        name: this.name,
                        email: this.email,
                        phone: this.phone,
                        subject: this.subject,
                        description: this.description
                    }
                    this.$store.dispatch("postMessage", data)
                    this.$router.push("/")
                }
            } else {
                this.errors.push("All fields are required.")
            }
        },
        validEmail: email => {
            let re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    }
}
</script>