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

                        <div class="project__links">
                            <a :href="translations[state.lang].project.siteUrl">
                                {{ state.translations[state.lang].gotoSite }}
                            </a>
                        </div>

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
                            title: 'Monocle',
                            teaser: 'Unique mobile application',
                            description:
                                '<p>Monocle is an application based on the well-known SmartCall, which has been helping you to connect with different companies without any problems. Follow the news and promotions of needed companies; connect with them within 15 seconds, without wasting any time and money while you are waiting for the response.</p>' +
                                '<p>Special for you, we have created the service of “Personal helper”. Our staff will be happy to tell you about our latest news and events in the city! It can help you decide where to go on the weekend and help you organize your leisure time. Just press the “Request a callback” button and connect with us in 15 seconds!</p>',
                            pdfLink: '',
                            siteUrl: 'https://monocle.kz/',
                            additionContent:
                                '<ul>' +
                                '<li>Personalized content</li>' +
                                '<li>User-friendly</li>' +
                                '<li>City guide</li>' +
                                '<li>Saving time and money</li>' +
                                '<li>Loyalty</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'ib',
                                preview: '/images/monocle/preview-project-monocle.png',
                            },
                            previews: [
                                {
                                    url: '/images/monocle/img1.png',
                                },
                                {
                                    url: '/images/monocle/img2.png',
                                },
                                {
                                    url: '/images/monocle/img3.png',
                                },
                            ],
                        }
                    },
                    ru: {
                        project: {
                            title: 'Monocle',
                            teaser: 'Уникальное мобильное приложение',
                            description:
                                '<p>Monocle- приложение в основе которого лежит всем известный SmartCall, который на протяжении 2 лет помогал вам связаться с разными компаниями без каких либо проблем. Следите за акциями и новостями нужных вам организаций, связывайтесь с ними за 15 секунд, не тратя при этом баланса и времени на ожидание ответа.</p>' +
                                '<p>Специально для Вас, мы создали услугу «Персонального помощника». Наши сотрудники с радостью расскажут вам о последних событиях и ивентах в городе! Подскажут куда лучше сходить на выходных и где провести свой досуг. Нажмите на кнопку «Заказать звонок» и свяжитесь с нами за 15 секунд!</p>',
                            pdfLink: '',
                            siteUrl: 'https://monocle.kz/',
                            additionContent:
                                '<ul>' +
                                '<li>ПЕРСОНАЛИЗИРОВАННЫЙ КОНТЕНТ</li>' +
                                '<li>ЛЕГКИЙ В ИСПОЛЬЗОВАНИИ</li>' +
                                '<li>ПРОВОДНИК В ГОРОДЕ</li>' +
                                '<li>ЭКОНОМИЯ ВРЕМЕНИ И СРЕДСТВ</li>' +
                                '<li>ЛОЯЛЬНОСТЬ</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'ib',
                                preview: '/images/monocle/preview-project-monocle.png',
                            },
                            previews: [
                                {
                                    url: '/images/monocle/img1.png',
                                },
                                {
                                    url: '/images/monocle/img2.png',
                                },
                                {
                                    url: '/images/monocle/img3.png',
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