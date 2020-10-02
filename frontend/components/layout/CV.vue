<template>
    <div class="main main-cv">
        <main-banner
            :title=title
            :subtitle=subtitle
            :buttonName=buttonName
            :imgURL=imgURL
            :route=route
            class="main-banner--white"
        ></main-banner>

        <div class="container">
            <div class="main-cv">
                <h1 class="title">RESUME</h1>
                <div class="main-cv__grid" style="justify-content: space-around;">
                    <div class="flex-column">
                        <h2 class="text-lg">NAME</h2>
                        <p>Carlos Alberto Loayza Vélez.</p>

                        <h2 class="text-lg">EXPERIENCE</h2>
                        <ul>
                            <li class="text-md">English Teacher at Public School in Perú</li>
                            <li class="text-md">Full Stack Developer at Tranzfer.me</li>
                            <li class="text-md">Full Stack Developer at Sportingcallao.club</li>
                            <li class="text-md">Full Stack Developer at Carlosloayza.com</li>
                        </ul>
                    </div>

                    <div class="flex-column">
                        <h2 class="text-lg">SKILLS</h2>
                        <ul>
                            <li class="text-md">HTML, CSS, ES6, SCSS, TS, Vue Vuex, Webpack, NPM libraries.</li>
                            <li class="text-md">NodeJS, DenoJS, JSONWEBTOKEN, MongoDB, REST API, </li>
                            <li class="text-md">Adobe XD, Adobe Photoshop, GIMP, Inkscape.</li>
                        </ul>

                        <h2 class="text-lg">EDUCATION</h2>
                        <p class="text-md">I'm a self-taught person.</br>
                            But I studied Computer Science at UNIVERSIDAD NACIONAL DE PIURA.
                            I also went to ICPNA institute in order to get the ability to speak English.
                        </p>
                    </div>

                    <div class="flex-column">
                        <img src="/public/carlos.jpg" style="border-radius: 50%; border: 3px solid orange;"/>
                    </div>
                </div>
            </div>
        </div>

    </div>

</template>

<script>
import MainBanner from "../items/MainBanner.vue"

export default {
    components: {
        MainBanner
    },
    data () {
        return {
            // banner content
            title: "CARLOS' CV",
            subtitle: "I'm not having such as a great experience but I'm pretty comfortable for whatever i was needed.",
            buttonName: "Download CV",
            imgURL: '/public/mario-dr.jpg',
            route: 'downloadCV'
        }
    }
}

</script>