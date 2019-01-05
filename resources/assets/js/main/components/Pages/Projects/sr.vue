<template>
    <div>
        <div class="page page-project">
            <div class="side-tools animate fade-right" data-duration="1000">
                <div class="back">
                    <router-link :to="Laravel.getLocalizedRoute({name : 'projects'})">
                        <i><img src="/images/arrow-left-white.png" alt=""></i>
                        <span>
                            {{ state.translations[state.lang].back }}
                        </span>
                    </router-link>
                </div>
                <div class="side-tools__title">
                    <p>{{ translations[state.lang].project.title }}</p>
                </div>

                <div class="side-tools__title next-project">
                    <p>{{ state.translations[state.lang].nextProject }}</p>
                </div>
            </div>

            <div class="page__content clearfix">
                <div class="left">
                    <h1 class="page__title animate fade-up" data-duration="700" data-delay="500">
                        {{ translations[state.lang].project.title }}
                    </h1>
                    <div class="project">
                        <p class="project__title animate fade-up" data-duration="700" data-delay="700">
                            {{ translations[state.lang].project.teaser }}
                        </p>
                        <div class="project__description animate fade-up" v-html="translations[state.lang].project.description" data-duration="700" data-delay="700">

                        </div>

                        <div class="project__docs">
                            <a :href="translations[state.lang].project.pdfLink" class="doc">
                                <p><i><img src="/images/pdf-icon.png" alt=""></i>{{
                                    state.translations[state.lang].productDetails }}</p>
                            </a>
                        </div>

                        <!--<div class="project__links">-->
                        <!--<a :href="translations[state.lang].project.siteUrl">-->
                        <!--{{ state.translations[state.lang].gotoSite }}-->
                        <!--</a>-->
                        <!--</div>-->

                    </div>
                    <div class="project__next hidden-xs animate corner" data-duration="1000">
                        <router-link :to="Laravel.getLocalizedRoute({name : translations[state.lang].project.nextProject.route})">
                            <img :src="translations[state.lang].project.nextProject.preview" alt="">
                        </router-link>
                    </div>
                </div>
                <div class="right">
                    <div class="project__previews">


                        <div class="preview animate zoom"
                             v-for="(item, index) in translations[state.lang].project.previews" data-duration="1000"
                             :data-delay="500 + (index * 200)">
                            <img :src="item.url" alt="">
                        </div>
                    </div>
                    <div class="project__additions animate corner" data-duration="1000"
                         v-html="translations[state.lang].project.additionContent">
                    </div>
                </div>

            </div>
        </div>
        <app-footer></app-footer>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                translations: {
                    en: {
                        project: {
                            title: 'Smart Recognition',
                            teaser: 'The face recognition module',
                            description:
                                '<p>The face recognition model is designed for an automatic personal identification by their video recording or a photography.</p> <p>-The face recognition module works with both camera and face detectors. </p> <p>-On the first stage, the face detector identifies appearance of the face in the shot and captures its image.</p> <p>-Next, the two schemes are plausible:1. Identification 2. Verification</p>',
                            pdfLink: '',
                            siteUrl: '',
                            additionContent:
                                '<p><b>The capture module</b></p>' +
                                '<p>The following information is displayed on the screen: </p>' +
                                '<p>- captured faces <br>- time and date of capture <br>- the number of the camera, with which the module is working</p>' +
                                '<p><b>The online monitoring module</b></p>' +
                                '<p>Data display</p>' +
                                '<p>-Facial recognition <br>-Camera number <br>-time and date of recognition <br>-reference photo from the database <br>-Full name <br>-The degree of similarity <br>-Comments, with the editing function, added along with the photo to the database</p>',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/sr/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/sr/img1.png',
                                },
                                {
                                    url: '/images/sr/img2.png',
                                },
                                {
                                    url: '/images/sr/img3.png',
                                },
                            ],
                        }
                    },
                    ru: {
                        project: {
                            title: 'Smart Recognition',
                            teaser: 'Модуль распознования лиц',
                            description:
                                '<p>Модуль распознавания лиц предназначен для автоматической идентификации личности по видеоизображению или фотографии </p>' +
                                '<p>- Модуль распознавания лиц работает с камерой и детектором лиц. </p>' +
                                '<p>- На первом этапе работы детектор лиц определяет появление в кадре лица и захватывает его изображение. </p>' +
                                '<p>- Далее возможны две схемы работы модуляраспознавания лиц 1. идентификация 2. верификацяи </p>',
                            pdfLink: '',
                            siteUrl: '',
                            additionContent:
                                '<p><b>Модуль захвата</b></p>' +
                                '<p>Отображение на экране сопутствующих данных: </p>' +
                                '<p>- захваченные лица <br>- даты и времени захвата <br>- номер камеры, с которой работает модуль</p>' +
                                '<p><b>Модуль онлайн мониторинга</b></p>' +
                                '<p>Отображение данных</p>' +
                                '<p>- распознанные лица <br>- номер камеры <br>- даты и времени распознавания <br>- эталонной фотографии из базы данных <br>- ФИО <br>- степени сходства <br>- комментарии, введенного при добавлении лица в базу с возможностью редартирования</p>',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/sr/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/sr/img1.png',
                                },
                                {
                                    url: '/images/sr/img2.png',
                                },
                                {
                                    url: '/images/sr/img3.png',
                                },
                            ],
                        }
                    }
                }
            }
        },
        mounted() {
            this.state.page.defaultPage = false;
        },
        destroyed() {
            this.state.page.defaultPage = true;
        }
    }
</script>