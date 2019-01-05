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
                            title: 'IVCBox',
                            teaser: 'Video call service',
                            description:
                                '<p>IVCBox is a video call widget for websites. IVCBox is an innovative tool, designed to increase sales and customer service quality. This real-time customer communication widget allows to save customer profiles, record video calls and save chat history. The chatbot has learning capabilities, based on the chat history and FAQs, then it automates 80% of answers for incoming messages. IVCBox merged all the channels of communication on the website.</p>',
                            pdfLink: '',
                            siteUrl: '',
                            additionContent:
                                '<ul>' +
                                '<li>Live chat for websites</li>' +
                                '<li>Video and voice call service</li>' +
                                '<li>Recording</li>' +
                                '<li>Website analytics</li>' +
                                '<li>Widget design customization</li>' +
                                '<li>File sharing</li>' +
                                '<li>Chatbot</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/ivc/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/ivc/img1.png',
                                },
                                {
                                    url: '/images/ivc/img2.png',
                                },
                                {
                                    url: '/images/ivc/img3.png',
                                },
                            ],
                        }
                    },
                    ru: {
                        project: {
                            title: 'IVCBox',
                            teaser: 'Сервис видео-звонка',
                            description:'<p>IVCBox позволяет совершать и принимать видеозвонки непосредственно на сайте.</p><p>IVCBox является инновационным инструментом для обеспечения повышения продаж и высокого качества клиентского сервиса. IVCBox - это инструмент для общения с клиентами в режиме реального времени, который позволяет собирать и хранить данные клиента, вести запись звонков и сохранять историю чатов. Чат-бот обучается на истории чата и часто задаваемых вопросах и автоматизирует 80% входящих сообщений. IVCBox объединяет все каналы коммуникаций с клиентом на сайте.</p>',
                            pdfLink: '',
                            siteUrl: '',
                            additionContent:
                                '<ul>' +
                                '<li>Чат для сайта</li>' +
                                '<li>Сервис видео и аудио звонка</li>' +
                                '<li>Запись звонков</li>' +
                                '<li>Аналитика сайта</li>' +
                                '<li>Персонализированный виджет</li>' +
                                '<li>Возможность отправлять файлы</li>' +
                                '<li>Чат-бот</li>' +
                                '</ul>',
                            nextProject: {
                                route: 'qaryz',
                                preview: '/images/ivc/next.png',
                            },
                            previews: [
                                {
                                    url: '/images/ivc/img1.png',
                                },
                                {
                                    url: '/images/ivc/img2.png',
                                },
                                {
                                    url: '/images/ivc/img3.png',
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