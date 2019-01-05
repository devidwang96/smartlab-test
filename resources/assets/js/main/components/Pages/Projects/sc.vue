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
                            title: 'Smart Call',
                            teaser: 'Unique mobile application',
                            description:
                                '<p>The call-back widget SMART CALL widget is a fundamentally new instrument designed to increase sales from the website, without advertisement and changes on the website itself</p>' +
                                '<p>It can differentiate the clients from random visitors using 12 behavioral criteria and offers to leave a number for automatic connection with a manager just in 10 seconds Details</p>',
                            pdfLink: '',
                            siteUrl: 'https://smartcall.kz/',
                            additionContent:
                                '<p><b>7 products in one platform:</b></p>' +
                                '<ul>' +
                                '<li>A call back in 15 seconds</li>' +
                                '<li>SmartChat</li>' +
                                '<li>Behavioral analytics</li>' +
                                '<li>Data analytics</li>' +
                                '<li>Mobile widget</li>' +
                                '<li>Protection from missed calls</li>' +
                                '<li>Customer database</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'ib',
                                preview: '/images/sc/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/sc/img1.png',
                                },
                                {
                                    url: '/images/sc/img2.png',
                                },
                                {
                                    url: '/images/sc/img3.png',
                                },
                            ],
                        }
                    },
                    ru: {
                        project: {
                            title: 'Smart Call',
                            teaser: 'Виджет обратного звонка',
                            description:
                                '<p> Виджет SMARTCALL -фундаментально новый инструмент увеличения продаж с сайта, без рекламы и изменений на сайте.</p>' +
                                '<p>Различает потенциальных клиентов от случайных посетителей сайта по 12 поведенческим критериям и предлагает оставить номер телефона для автоматического соединения с менеджером всего за15 секунд.</p>',
                            siteUrl: 'https://smartcall.kz/',
                            additionContent:
                                '<p><b>7 продуктов в 1 платформе:</b></p>' +
                                '<ul>' +
                                '<li>Обратный звонок за 15 секунд</li>' +
                                '<li>SmartChat</li>' +
                                '<li>Анализ поведения</li>' +
                                '<li>Аналитика данных</li>' +
                                '<li>Мобильный виджет</li>' +
                                '<li>Защита от пропущенных</li>' +
                                '<li>База клиентов</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'ib',
                                preview: '/images/sc/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/sc/img1.png',
                                },
                                {
                                    url: '/images/sc/img2.png',
                                },
                                {
                                    url: '/images/sc/img3.png',
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