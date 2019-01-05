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
                            title: 'Qariz',
                            teaser: 'Automated scoring service',
                            description:
                                '<p>Qariz.kz is a fully automated scoring service for urgent loan delivery using the website or mobile applications based on iOS or android. The user identification and application form takes no more than 10 minutes and allows receiving a loan on your bank account from the comfort of your home. That requires only your identification document. It supports trouble-free crediting; selecting the most appropriate amount of loan based on one’s scoring data. Integrated with «Government Center of Retirement Payments» (ГЦВП) and «First Credit Bureau» (ПКБ). Available 24/7</p>',
                            pdfLink: '',
                            siteUrl: 'http://quariz.kz/',
                            additionContent:'',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/quariz/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/quariz/img1.png',
                                },
                                {
                                    url: '/images/quariz/img2.png',
                                },
                                {
                                    url: '/images/quariz/img3.png',
                                },
                            ],
                        }
                    },
                    ru: {
                        project: {
                            title: 'Qariz',
                            teaser: 'Автоматизированный скоринговый сервис',
                            description:
                                '<p>Qariz.kz это полностью автоматизированный скоринговый сервис для срочной выдачи микрокредитов онлайн с помощью сайта или мобильных приложений на базе ios и  андроид. Идентификация пользователя и  заполнение анкеты занимает не больше  10 минут и позволяет получить займ на  банковскую карту не выходя из дома при  наличии всего лишь удостоверения личности. Поддерживает безотказное кредитование подбирая клиенту оптимальную сумму займа основываясь на его скоринговых данных. Интегрирована с ГЦВП и ПКБ. Доступна 24 часа в сутки.</p>',
                            pdfLink: '',
                            siteUrl: 'http://quariz.kz/',
                            additionContent: '',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/quariz/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/quariz/img1.png',
                                },
                                {
                                    url: '/images/quariz/img2.png',
                                },
                                {
                                    url: '/images/quariz/img3.png',
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