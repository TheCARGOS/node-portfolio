<template>
    <main class="main main-dashboard">
        <div class="container">
            <h1 class="title">DASHBOARD</h1>
            <button @click="logout()">Log out</button>

            <div v-for="message in messages" class="card text-md">
                <fieldset>
                    <span>{{message.name}}</span>
                </fieldset>
                <fieldset>
                    <span>{{message.email}}</span>
                </fieldset>
                <fieldset>
                    <span>{{message.phone}}</span>
                </fieldset>
                <fieldset>
                    <span>{{message.subject}}</span>
                </fieldset>
                <fieldset>
                    <span>{{message.description}}</span>
                </fieldset>

                <button class="button--delete">delete</button>
            </div>
        </div>

        <div v-if="!loggedIn">
            {{goToLogin()}}
        </div>
    </main>
</template>

<style lang="scss" scoped>
    h1 {
        font-size: 42px;
    }

    .card {
        border: 1px solid red;
        padding: 14px;
    }
</style>

<script>
    export default {
        data () {
            return {
                messages: []
            }
        },

        computed: {
            loggedIn () {
                return localStorage.getItem("Authorization")? localStorage.getItem("Authorization").split(" ")[1]: "" || false
            }
        },

        async created () {
            this.messages = await (await fetch("/message")).json()
        },
        
        methods: {
            logout () {
                localStorage.removeItem("Authorization")
            },
            goToLogin () {
                this.$router.push("/login")
            }
        }

    }
</script>