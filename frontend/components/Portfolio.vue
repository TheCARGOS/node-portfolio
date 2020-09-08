<template>
    <main class="main main-portfolio">
        <section class="main-portfolio__welcome">
            <!-- <img class="main-portfolio__welcome__img" src="../public/mario.png" alt=""> -->
            <div class="main-portfolio__welcome__img"></div>
            <header class="main-portfolio__header">
                <div class="container">
                    <h1 class="main-portfolio__header__title">CARLOS' PORTFOLIO</h1>
                    <h2 class="main-portfolio__header__subtitle">Hey there my name is Carlos and I'm a Full Stack developer focus on Front End. Check out some projects I made so far.</h2>
                </div>
            </header>
        </section>

        <section class="main-portfolio__projects">
            <header class="main-portfolio__projects__header">
                <h1 class="main-portfolio__projects__header__title">PROJECTS</h1>
            </header>
            <div class="main-portfolio__projects__project container">
                <div class="main-portfolio__projects__project__header flex-column">
                    <span>{{projectSelected.role}}</span>
                    <div class="flex-container" style="justify-content: space-around;">
                        <i data-project-id="0" @click="prevProject()" class="fas fa-angle-left"></i>
                        <span>{{projectSelected.title}}</span>
                        <i data-project-id="0" @click="nextProject()" class="fas fa-angle-right"></i>
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
                        <img src="/public/phone-tranzfer1.png" alt="phones">
                    </figure>
                </div>
            </div>
        </section>
        <section class="main-portfolio__skills">
            <header class="main-portfolio__skills__header">
                <h1 class="main-portfolio__skills__header__title">MY SKILLS</h1>
            </header>
            <div class="main-portfolio__skills__skill container">
                <div class="main-portfolio__skills__skill__header">
                    <!-- <h1 class="main-portfolio-skills__skills__header__title">FULL STACK</h1> -->
                    <div class="flex-container" style="justify-content: space-around;">
                        <i class="fas fa-angle-left" @click="prevSkill()"></i>
                        <span>{{skillSelected.title}}</span>
                        <i class="fas fa-angle-right" @click="nextSkill()"></i>
                    </div>
                </div>
                <div class="main-portfolio__skills__skill__body">
                    <p class=main-portfolio__skills__skill__body__p>{{skillSelected.description}}<3</p>
                    <button class="main-portfolio__skills__skill__button">Contact for {{skillSelected.title}}</button>
                </div>
                <span class="main-portfolio__skills__skill__span">{{skillSelected.skills}}</span>
            </div>
            <div class="container">
                <img src="/public/mario-bowser.jpg" alt="">
            </div>
        </section>
    </main>
</template>

<script>
export default {
    name: "Portfolio",
    data () {
        return {
            projects: [
                {   
                    id: 0,
                    title: "TRANZFER.ME",
                    role: "FULLSTACK",
                    description: "As developer of the team I proposed and created an API that allows server to find the dollar exchange using a library called CheerioJS."
                },
                {
                    id: 1,
                    title: "SPORTING CALLAO",
                    role: "FULLSTACK",
                    description: "This is my most beloved project since its a webapp made for my close friends,even though is in this first version, I'd like to implement a lot of things. In this project I was in charge of everything from UI/UX to fullstack implementation."
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
                description: "As developer of the team I proposed and created an API that allows server to find the dollar exchange using a library called CheerioJS."
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