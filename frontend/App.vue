<template>
<div class="grid">
    <header class="main-header">
        <div class="container">
            <i onclick="toggleSidenav(this)" class="fa fa-bars"></i>
            <h1 class="main-header__title">Carlos<span style="color: skyblue;">Loayza</span></h1>
            <i onclick="toggleSidenav(this)" class="fa fa-search"></i>
        </div>
        <!-- <div class="main-header__search">
            <input type="text">
        </div> -->
    </header>
    <div class="sidenav">
        <div class="sidenav__content">
            <h1 class="sidenav__title">Carlos<span style="color: skyblue;">Loayza</span></h1>
            <input class="sidenav__search" type="text" placeholder="Search topic">
            <ul class="sidenav__list">
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">University</router-link> -->
                <router-link tag="li" to="/" class="sidenav__list__item">Portfolio</router-link>
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">Blogs</router-link> -->
                <router-link tag="li" to="/contact" class="sidenav__list__item">Contact</router-link>
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">CV</router-link> -->
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">Games</router-link> -->
                <router-link tag="li" to="/about" class="sidenav__list__item">About</router-link>
            </ul>
        </div>
        <div class="button-group">
            <router-link tag="button" to="/signin">Login as Carlos</router-link>
            <!-- <button>Login as Carlos</button> -->
            <!-- <button>Login as my guest</button> -->
        </div>
        <button class="sidenav__close" onclick="toggleSidenav(this)"><i class="fas fa-times">x</i></button>
    </div>
    <!-- <vue-content-loading :width="300" :height="100">
      <circle cx="30" cy="30" r="30" />
      <rect x="75" y="13" rx="4" ry="4" width="100" height="15" />
      <rect x="75" y="37" rx="4" ry="4" width="50" height="10" />
    </vue-content-loading> -->
    <router-view></router-view>
</div>
</template>

<script>
import { VueContentLoading } from 'vue-content-loading';
export default {
    name: "App",
    components: {
        VueContentLoading,
    }
}
</script>