<template>
    <div>
        <div class="page page-projects">
            <div class="side-button hidden-xs hidden-sm">
                <button class="button-blue animate zoom" data-duration="1000">
                    <router-link :to="Laravel.getLocalizedRoute({name : 'vacancy'})">
                        {{ state.translations[state.lang].vacancies }}
                    </router-link>
                </button>
            </div>

            <div class="page__container">
                <h1 class="page__title animate fade-up" data-duration="500">{{ state.translations[state.lang].projects
                    }}</h1>
                <p class="page__description animate fade-up" data-duration="500" data-delay="50">
                    {{ translations[state.lang].page.teaser }}
                </p>

                <div class="projects">
                    <div class="row">
                        <div class="col-md-4 col-sm-6 col-xs-12" v-for="(item, index) in getProjects">
                            <div class="project animate zoom" :data-delay="100 * index" data-duration="1000">
                                <router-link :to="Laravel.getLocalizedRoute({name : item.url})">
                                    <div class="project__overlay">
                                        <div class="project__content">
                                            <p class="project__title">
                                                {{ item.name }}
                                            </p>
                                            <p class="project__teaser">
                                                {{ item.teaser }}
                                            </p>
                                        </div>
                                    </div>
                                    <img class="project__preview" :src="item.preview" alt="">
                                </router-link>
                            </div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                translations: {
                    en: {
                        page: {
                            teaser: 'We help the leading companies create innovative products and services.'
                        },
                        projects: [
                            {
                                name: 'Smart Call',
                                teaser: 'Call-back widget',
                                preview: '/images/projects/1.png',
                                url: 'sc',
                            },
                            {
                                name: 'Qaryz',
                                teaser: 'Automated scoring system',
                                preview: '/images/projects/4.png',
                                url: 'qaryz',
                            },
                            {
                                name: 'Monocle',
                                teaser: 'Unique mobile application',
                                preview: '/images/projects/5.png',
                                url: 'monocle',
                            },
                            {
                                name: 'IVC Box',
                                teaser: 'Video call widget',
                                preview: '/images/projects/3.png',
                                url: 'ib',
                            },
                            {
                                name: 'Smart Recognition',
                                teaser: 'Face recognition module',
                                preview: '/images/projects/2.png',
                                url: 'sr',
                            },
                        ]
                    },
                    ru: {
                        page: {
                            teaser: 'Оказываем услуги и создаем уникальные продукты и приложения для ведущих казахстанских компаний'
                        },
                        projects: [
                            {
                                name: 'Smart Call',
                                teaser: 'Виджет обратного звонка',
                                preview: '/images/projects/1.png',
                                url: 'sc',
                            },
                            {
                                name: 'Qaryz',
                                teaser: 'Автоматизированный скоринговый сервис',
                                preview: '/images/projects/4.png',
                                url: 'qaryz',
                            },
                            {
                                name: 'Monocle',
                                teaser: 'Уникальное мобильное приложение',
                                preview: '/images/projects/5.png',
                                url: 'monocle',
                            },
                            {
                                name: 'IVC Box',
                                teaser: 'Виджет видео звонка',
                                preview: '/images/projects/3.png',
                                url: 'ib',
                            },
                            {
                                name: 'Smart Recognition',
                                teaser: 'Модуль распознования лиц',
                                preview: '/images/projects/2.png',
                                url: 'sr',
                            },
                        ]
                    }
                },
            }
        },
        computed: {
            getProjects() {
                return this.translations[this.state.lang].projects
            }
        }
    }
</script>