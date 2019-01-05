<template>
    <div>
        <div class="page page-vacancy">
            <div class="side-button hidden-xs hidden-sm">
                <button class="button-blue animate zoom" data-duration="1000">
                    <router-link :to="Laravel.getLocalizedRoute({name : 'home'})">
                        {{ state.translations[state.lang].back }}
                    </router-link>
                </button>
            </div>

            <div class="container">
                <h1 class="page__title animate fade-up" data-duration="800"> {{ translations[state.lang].pageTitle  }} </h1>
                <p class="page__description animate fade-up" data-duration="800" data-delay="200">
                    {{ translations[state.lang].pageDescription }}
                </p>

                <div class="section section-vacancies">
                    <div v-for="(item, index) in getVacancies"
                         data-duration="800"
                         :data-delay="index * 100"
                         :class="['main-collapse', 'animate', {'fade-left': index % 2 === 0}, {'fade-right': index % 2 === 1}]">
                        <button data-toggle="collapse" :data-target="'#vacancy_'+index">{{ item.name }}</button>

                        <div :id="'vacancy_'+index" class="collapse clearfix">
                            <div class="main-collapse__content">
                                {{ item.description }}
                            </div>
                            <!--<p class="more">-->
                                <!--<a href="#">{{ state.translations[state.lang].more }}</a>-->
                            <!--</p>-->
                            <!--<p class="bid">-->
                                <!--<a href="#" class="button button-gray">-->
                                    <!--{{ state.translations[state.lang].applyNow }}-->
                                <!--</a>-->
                            <!--</p>-->
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
                        pageTitle: 'Careers',
                        pageDescription: 'Great moments happen here, in SmartLab. Join us in the creative process together with our wonderful and exceptional team, helping global companies create amazing products.',
                        vacancies: [
                            {
                                name: 'Designer',
                                description: 'Designing the interfaces of the websites, mobile applications, landings, development of concepts and implementation of user interface designs, development of design projects (sketches + 3D visuals). Development of images, schemes, graphs, diagrams, icons, etc.',
                            },
                            {
                                name: 'Creative director',
                                description: 'Have a creative vision? We need a creative lead for working with designers, artists, copywriters, sales teams and marketers to create a vision for products sold. Creativity, analytical, managerial and interpersonal skills are required',
                            },
                            {
                                name: 'Developer',
                                description: 'Developing web-applications and websites. Imposition of blueprints. Participation in discussions about architecture and usability.'
                            }
                        ]
                    },
                    ru: {
                        pageTitle: 'Предложение работы',
                        pageDescription: 'Присоединяйтесь к нашей команде удивительных и исключительных людей, и помогайте мировым компаниям создавать потрясающие продукты.',
                        vacancies: [
                            {
                                name: 'Дизайнер',
                                description: 'Проектирование интерфейсов сайтов, мобильных приложений, промо-страниц (лендингов); разработка концепции и реализация дизайна пользовательских интерфейсов; разработка дизайн-проектов (чертежи + 3D-визуализации) Разработка рисунков, схем, графиков, диаграмм, иконок'
                            },
                            {
                                name: 'Креативный директор',
                                description: 'Имеете креативную жилку? Нам нужен творческий человек для работы с дизайнерами, художниками, копирайтерами, командой по продажам и маркетологами для создания видения продуктов, которые мы предлагаем. Требования: креативность, аналитическое мышление, управленческие способности и коммуникабельность',
                            },
                            {
                                name: 'Программист',
                                description: 'Разработка веб-приложений и веб-сайтов. Верстка макетов. Написание технической документации к проектам. Участие в обсуждениях по архитектуре и usability.'
                            }
                        ]
                    }
                },
            }
        },
        computed: {
            getVacancies(){
                return this.translations[this.state.lang].vacancies
            }
        }
    }
</script>