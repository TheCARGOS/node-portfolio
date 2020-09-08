<template>
<div>
    <header class="main-header">
        <div class="container">
            <i onclick="toggleSidenav(this)" class="fa fa-bars"></i>
            <h1 class="main-header__title">CARLOS<span style="color: skyblue;">LOAYZA</span></h1>
            <i onclick="toggleSidenav(this)" class="fa fa-search"></i>
        </div>
        <!-- <div class="main-header__search">
            <input type="text">
        </div> -->
    </header>
    
    <div class="sidenav">
        <div class="sidenav__content">
            <h1 class="sidenav__title">CARLOS<span style="color: skyblue;">LOAYZA</span></h1>
            <input class="sidenav__search" type="text" placeholder="Search topic">
            <ul class="sidenav__list">
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">University</router-link> -->
                <router-link tag="li" to="/" class="sidenav__list__item">Portfolio</router-link>
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">Blogs</router-link> -->
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">Contact</router-link> -->
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">CV</router-link> -->
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">Games</router-link> -->
                <!-- <router-link tag="li" to="/" class="sidenav__list__item">About</router-link> -->
            </ul>
        </div>

        <div class="button-group">
            <router-link tag="button" to="/signin">Login as Carlos</router-link>
            <!-- <button>Login as Carlos</button> -->
            <!-- <button>Login as my guest</button> -->
        </div>
        <button class="sidenav__close" onclick="toggleSidenav(this)"><i class="fas fa-times"></i></button>
    </div>

    <router-view></router-view>
</div>
</template>

<script>
export default {
    name: "App"
}
</script>