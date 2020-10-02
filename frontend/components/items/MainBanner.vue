<template>
    <section class="main-banner">
        <!-- <img class="main-banner__img" src="../public/mario.png" alt=""> -->
        <div class="main-banner__img" :style="{ backgroundImage: `url(${imgURL})` }"></div>
        <header class="main-banner__header">
            <div class="container">
                <h1 class="main-banner__header__title">{{title}}</h1>
                <h2 class="main-banner__header__subtitle">{{subtitle}}</h2>
                <button class="main-banner__header__button button button--light" @click="goTo(route)">{{buttonName}}</button>
            </div>
        </header>
    </section>
</template>

<script>
export default {
    name: "MainBanner",
    props: {
        title: String,
        subtitle: String,
        buttonName: String,
        imgURL: String,
        route: String
    },
    methods: {
        async goTo (route) {
            if ( route == "downloadCV" ) {
                document.location.href = `/${route}`
            } else {
                this.$router.push(`/${route}`)
            }
        },
        downloadCV () {
        }
    }
}
</script>