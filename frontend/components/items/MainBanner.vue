<template>
    <section class="main-banner__welcome">
        <!-- <img class="main-banner__welcome__img" src="../public/mario.png" alt=""> -->
        <div class="main-banner__welcome__img" :style="{ backgroundImage: `url(${imgURL})` }"></div>
        <header class="main-banner__header">
            <div class="container">
                <h1 class="main-banner__header__title">{{title}}</h1>
                <h2 class="main-banner__header__subtitle">{{subtitle}}</h2>
                <button class="main-banner__header__button button--light">{{buttonName}}</button>
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
        imgURL: String
    }
}

</script>