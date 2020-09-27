<template>
    <main class="main main-portfolio">
        <main-banner
            :title=title
            :subtitle=subtitle
            :buttonName=buttonName
            :imgURL=imgURL
        ></main-banner>

        <section class="main-portfolio__projects">
            <header class="main-portfolio__projects__header">
                <h1 class="main-portfolio__projects__header__title">PROJECTS</h1>
            </header>
            <div class="skills-container container">
                <div class="main-portfolio__projects__project container">
                    <div class="main-portfolio__projects__project__header flex-column">
                        <span>{{projectSelected.role}}</span>
                        <div class="flex-container" style="justify-content: space-around;">
                            <i @click="prevProject()" class="fas fa-angle-left hide-on-lg"></i>
                            <span class="main-portfolio__projects__project__header__title">{{projectSelected.title}}</span>
                            <i @click="nextProject()" class="fas fa-angle-right hide-on-lg"></i>
                        </div>
                        <ul class="flex-container">
                            <li><i class="fa fa-bars"></i></li>
                            <li><i class="fa fa-bars"></i></li>
                            <li><i class="fa fa-bars"></i></li>
                        </ul>
                    </div>
                    <div class="main-portfolio__projects__project__body">
                        <p class="main-portfolio__projects__project__body__p">{{projectSelected.description}}</p>
                        <figure>
                            <img :src="projectSelected.image" alt="phones">
                        </figure>
                    </div>
                </div>
                <div class="main-portfolio__projects__project container hide-on-sm">
                    <div class="main-portfolio__projects__project__header flex-column">
                        <span>{{projects[1].role}}</span>
                        <div class="flex-container" style="justify-content: space-around;">
                            <span class="main-portfolio__projects__project__header__title">{{projects[1].title}}</span>
                        </div>
                        <ul class="flex-container">
                            <li><i class="fa fa-bars"></i></li>
                            <li><i class="fa fa-bars"></i></li>
                            <li><i class="fa fa-bars"></i></li>
                        </ul>
                    </div>
                    <div class="main-portfolio__projects__project__body">
                        <p class="main-portfolio__projects__project__body__p">{{projects[1].description}}</p>
                        <figure>
                            <img :src="projects[1].image" alt="phones">
                        </figure>
                    </div>
                </div>
            </div>
        </section>
        <section class="main-portfolio__skills">
            <header class="main-portfolio__skills__header">
                <h1 class="main-portfolio__skills__header__title">MY SKILLS</h1>
            </header>
            <div class="skills-container container">
                <div class="main-portfolio__skills__skill">
                    <div class="main-portfolio__skills__skill__header">
                        <!-- <h1 class="main-portfolio-skills__skills__header__title">FULL STACK</h1> -->
                        <div class="flex-container" style="justify-content: space-around;">
                            <i class="fas fa-angle-left hide-on-lg" @click="prevSkill()"></i>
                            <span class="main-portfolio__skills__skill__header__title">{{skillSelected.title}}</span>
                            <i class="fas fa-angle-right hide-on-lg" @click="nextSkill()"></i>
                        </div>
                    </div>
                    <div class="main-portfolio__skills__skill__body">
                        <p class=main-portfolio__skills__skill__body__p>{{skillSelected.description}}<3</p>
                        <button class="main-portfolio__skills__skill__button button--light">Contact for {{skillSelected.title}}</button>
                    </div>
                    <span class="main-portfolio__skills__skill__span">{{skillSelected.skills}}</span>
                </div>

                <div class="main-portfolio__skills__skill hide-on-sm">
                    <div class="main-portfolio__skills__skill__header">
                        <!-- <h1 class="main-portfolio-skills__skills__header__title">FULL STACK</h1> -->
                        <div class="flex-container" style="justify-content: space-around;">
                            <span class="main-portfolio__skills__skill__header__title">{{skills[1].title}}</span>
                        </div>
                    </div>
                    <div class="main-portfolio__skills__skill__body">
                        <p class=main-portfolio__skills__skill__body__p>{{skills[1].description}}<3</p>
                        <button class="main-portfolio__skills__skill__button">Contact for {{skills[1].title}}</button>
                    </div>
                    <span class="main-portfolio__skills__skill__span">{{skills[1].skills}}</span>
                </div>
            </div>
            <div class="main-portfolio__skills__bg container">
                <img src="/public/mario-bowser.jpg" alt="">
            </div>
        </section>
    </main>
</template>

<script>
import MainBanner from "../items/MainBanner.vue"

export default {
    name: "Portfolio",
    components: {
        MainBanner
    },
    data () {
        return {
            title: "CARLOS' PORTFOLIO",
            // banner content
            subtitle: 'Hey there my name is Carlos Loayza. I am Full Stack Web Developer focus on Frontend Development. Check out my projects and skills if you want to, please consider giving me feedback about this.',
            buttonName: "Give Feedback",
            imgURL: '../public/mario.png',
            // end banner content

            projects: [
                {   
                    id: 0,
                    title: "TRANZFER.ME",
                    role: "FULLSTACK",
                    description: "As developer of the team I proposed and created an API that allows server to find the dollar exchange using a library called CheerioJS.",
                    image: "/public/phones-tranzferme.png"
                },
                {
                    id: 1,
                    title: "SPORTING CALLAO",
                    role: "FULLSTACK",
                    description: "This is my most beloved project since its a webapp made for my close friends,even though is in this first version, I'd like to implement a lot of things. In this project I was in charge of everything from UI/UX to fullstack implementation.",
                    image: "/public/phones-sporting.png"
                }
            ],
            skills: [
                {
                    id: 0,
                    title: "FRONTEND",
                    description: "I'm comfortable doing Front End projects specially translating PDF design to HTML code.",
                    skills: "HTML, PUG, CSS, SCSS, ES6, TS, Vue, Vuex, Webpack NPM Libraries."
                },
                {
                    id: 1,
                    title: "FULLSTACK",
                    description: "Every Full Stack project I worked was pretty challenging to me and I love it.",
                    skills: "Frontend + Nodejs Express, Denojs Oak, Mongodb, REST API, JWT, Typescript"
                }
            ],
            projectSelected:  {   
                id: 0,
                title: "TRANZFER.ME",
                role: "FULLSTACK",
                description: "As developer of the team I proposed and created an API that allows server to find the dollar exchange using a library called CheerioJS.",
                image: "/public/phones-tranzferme.png"

            },
            skillSelected: {
                id: 0,
                title: "FRONTEND",
                description: "I'm comfortable doing Front End projects specially translating PDF design to HTML code.",
                skills: "HTML, PUG, CSS, SCSS, ES6, TS, Vue, Vuex, Webpack NPM Libraries."
            }
            // currentSkill: skills
        }
    },
    methods: {
        nextProject () {
            if (this.projectSelected.id == 0) {
                this.projectSelected = this.projects[1]
            } else {
                this.projectSelected = this.projects[0]
            }
        },

        prevProject () {
            if (this.projectSelected.id == 0) {
                this.projectSelected = this.projects[1]
            } else {
                this.projectSelected = this.projects[0]
            }
        },

        nextSkill () {
            if (this.skillSelected.id == 0) {
                this.skillSelected = this.skills[1]
            } else {
                this.skillSelected = this.skills[0]
            }
        },

        prevSkill () {
            if (this.skillSelected.id == 0) {
                this.skillSelected = this.skills[1]
            } else {
                this.skillSelected = this.skills[0]
            }
        }
    }
}
</script>