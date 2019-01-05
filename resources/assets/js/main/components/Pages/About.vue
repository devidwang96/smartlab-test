<template>
    <div>
        <div class="page page-about">
            <div class="section section-intro clearfix">
                <div class="center-text">
                    <span class="animate zoom" data-duration="800" data-delay="0">L</span>
                    <span class="animate zoom" data-duration="800" data-delay="150">A</span>
                    <span class="animate zoom" data-duration="800" data-delay="300">B</span>
                </div>
                <div class="left animate fade-right hidden-xs" data-duration="1000">
                    <img src="/images/about-bg.png" alt="">
                </div>
                <div class="right">
                    <h1 class="page__title animate fade-down" data-duration="500" data-delay="700">
                        {{ translations[state.lang].pageTitle }}
                    </h1>
                    <div class="page__description animate fade-up" data-duration="500" data-delay="800"
                         v-html="translations[state.lang].pageDescription">
                    </div>
                </div>
            </div>
            <div class="section section-about clearfix">
                <div class="left">
                    <div class="text-block1 animate fade-up" data-duration="500">
                        <p class="text-block1__description scroll-motion-animate" data-sensivity="5">
                            {{ translations[state.lang].sectionAbout.text1 }}
                        </p>
                    </div>

                    <div class="clearfix"></div>

                    <div class="text-block2 scroll-motion-animate" data-sensivity="6">
                        <p class="text-block2__title animate fade-up" data-duration="500">
                            {{ translations[state.lang].sectionAbout.text2 }}
                        </p>
                        <p class="text-block2__description animate fade-up" data-delay="200" data-duration="500">
                            {{ translations[state.lang].sectionAbout.text3 }}
                        </p>
                    </div>
                </div>

                <div class="right animate zoom" data-duration="700">
                    <div class="text-block3 scroll-motion-animate" data-sensivity="4">
                        <ul>
                            <li class="animate fade-left" data-delay="0" data-duration="1000">Monocle</li>
                            <li class="animate fade-left" data-delay="100" data-duration="1000">Smartcall</li>
                            <li class="animate fade-left" data-delay="200" data-duration="1000">Intel system</li>
                            <li class="animate fade-left" data-delay="300" data-duration="1000">Smart recognition</li>
                            <li class="animate fade-left" data-delay="400" data-duration="1000">Qariz</li>
                        </ul>
                        <p class="more animate fade-left" data-delay="500" data-duration="1000">
                            <router-link :to="Laravel.getLocalizedRoute({name : 'projects'})">
                                {{ state.translations[state.lang].viewAll }}
                            </router-link>
                        </p>
                    </div>
                </div>

            </div>
            <div class="section section-partners">
                <div class="container">
                    <h2 class="section__title char-animate fade-left" data-speed="20">{{ state.translations[state.lang].ourPartners }}</h2>
                    <div class="section__blocks">
                        <div class="partner animate zoom" data-duration="500" data-delay="0">
                            <a href="#">
                                <img src="/images/partner-logo1.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="100">
                            <a href="#">
                                <img src="/images/partner-logo2.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="200">
                            <a href="#">
                                <img src="/images/partner-logo3.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="300">
                            <a href="#">
                                <img src="/images/partner-logo4.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="100">
                            <a href="#">
                                <img src="/images/partner-logo5.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="200">
                            <a href="#">
                                <img src="/images/partner-logo6.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="300">
                            <a href="#">
                                <img src="/images/partner-logo7.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="400">
                            <a href="#">
                                <img src="/images/partner-logo8.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="200">
                            <a href="#">
                                <img src="/images/partner-logo9.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="300">
                            <a href="#">
                                <img src="/images/partner-logo10.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="400">
                            <a href="#">
                                <img src="/images/partner-logo11.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="500">
                            <a href="#">
                                <img src="/images/partner-logo12.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="300">
                            <a href="#">
                                <img src="/images/partner-logo13.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="400">
                            <a href="#">
                                <img src="/images/partner-logo14.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="500">
                            <a href="#">
                                <img src="/images/partner-logo15.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="600">
                            <a href="#">
                                <img src="/images/partner-logo16.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="400">
                            <a href="#">
                                <img src="/images/partner-logo17.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="500">
                            <a href="#">
                                <img src="/images/partner-logo18.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="600">
                            <a href="#">
                                <img src="/images/partner-logo19.png" alt="">
                            </a>
                        </div>
                        <div class="partner animate zoom" data-duration="500" data-delay="700">
                            <a href="#">
                                <img src="/images/partner-logo20.png" alt="">
                            </a>
                        </div>

                    </div>
                </div>
            </div>
            <div class="section section-about-bg animate fade" data-duration="1000">
                <img class="scroll-motion-animate" data-sensivity="3" src="/images/about-bg3.png" alt="">
            </div>
            <div class="section section-additions">
                <div class="image-inside hidden-sm hidden-xs">
                    <img class="scroll-motion-animate" data-sensivity="3" src="/images/about-bg4.png" alt="">
                </div>
                <div class="container">
                    <div class="row">

                        <div class="col-sm-1 hidden-sm hidden-xs"></div>

                        <div v-for="(item, index) in getServices" class="col-sm-6 col-md-5">
                            <div v-for="block in item" class="block animate fade-up" data-duration="1000">
                                <p class="block__title">
                                    {{ block.title }}
                                </p>
                                <p class="block__description">
                                    {{ block.description }}
                                </p>
                            </div>
                        </div>

                        <div class="col-sm-6 col-md-5">
                            <div class="block">
                                <p class="more">
                                    <router-link :to="Laravel.getLocalizedRoute({name : 'projects'})">
                                        {{ state.translations[state.lang].viewProjects }}
                                    </router-link>
                                </p>
                            </div>
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
                        pageTitle: 'About us',
                        pageDescription: '<p>' +
                        'We help the leading Kazakhstani companies to create incredible digital products' +
                        '</p>' +
                        '<p>' +
                        'We help the leading Kazakhstani companies to create incredible applications, products, and services. Within the last three years, we helped many small web-startups and companies create products that are beautiful and simple to use. Perhaps, you did not know that back then, but probably you have used the product, that we had developed. \n' +
                        'We are one the few agencies in Kazakhstan that can handle the idea of the production from the beginning until the end. From the napkin sketch to the real product. Do you have an excellent idea of a new product which nobody intends to build? We’ve got your back.\n' +
                        'Client consult us on different stages of product’s life. As a result, we have created versatile team of world-class designers, website and app developers, marketing specialists, project managers and quality control specialists, to guarantee that we can solve ay task  \n' +
                        'We cooperate with other organizations in terms of research, experiments, and development. It prompts the final users from the very beginning  \n</p>',
                        sectionAbout: {
                            text1: 'The group focused on innovative solutions, transformations,and business development',
                            text2: 'Our vision',
                            text3: 'Our goal is to enhance the quality of life using hi-tech products and services. We intend to become the global leader of quality in this field helping companies and their clients.'

                        },
                        services: [
                            {
                                title: 'INTERFACE DESIGN',
                                description: 'A great user interface goes much deeper that just pretty pixels. We create interfaces that are wonderful and intuitively clear at the same time.'
                            },
                            {
                                title: 'USER EXPERIENCE',
                                description: 'A solid foundation is required for each interface. A well-done UX allows us to detect the project development problems, before they become real.'
                            },
                            {
                                title: 'GROWTH',
                                description: 'We love when our concepts turn into reality. Whether they are on the Internet, desktop, mobile phone or on all of them, using different languages and platforms.'
                            },
                        ]
                    },
                    ru: {
                        pageTitle: 'О нас',
                        pageDescription: '<p>Мы помогаем ведущим казахстанским компаниям создавать уникальные приложения и продукты. За последние 3 года мы дали возможность многим небольшим веб-стартапам и компаниям разработать красивые и простые в использовании продукты.</p>' +
                        '<p>Мы являемся одним из немногих агентств в Казахстане, которое берется за любую идею с энтузиазмом. Клиенты обращаются к нам на разных этапах жизни продукта. Мы готовы вести разработку продукта от эскиза салфетки до реального полномасштабного проекта. На данный момент мы располагаем талантливой командой, состоящей из дизайнеров мирового класса, разработчиков веб-сайтов и мобильных устройств, маркетологов, менеджеров проектов и специалистов по обеспечению качества, чтобы гарантировать решение любой задачи.</p>',
                        sectionAbout: {
                            text1: 'Группа сфокусированная на инновационных решениях, трансформации и развитии бизнеса',
                            text2: 'Наша главная цель',
                            text3: 'Цель лаборатории SmartLab - улучшать качество жизни с помощью высокотехнологичных продуктов и услуг. Мы намерены стать мировым лидером качества в этой отрасли помогая, как и компаниям так и их клиентам.'
                        },
                        services: [
                            {
                                title: 'Дизайн интерфейса',
                                description: 'Большой пользовательский интерфейс идет глубже, чем красивые пиксели. Мы создаем интерфейсы, которые восхитительны и интуитивно понятны'
                            },
                            {
                                title: 'Пользовательский опыт',
                                description: 'Для каждого интерфейса необходим прочный фундамент. Хорошо выполненный UX предоставляет и помогает нам диагностировать проблемы проектирования, прежде чем они станут глобальным проблемами.'
                            },
                            {
                                title: 'Развитие',
                                description: 'Мы любим воплощать наши концепции в жизнь, будь то в Интернете, на рабочем столе, в мобильном телефон или на всех трех, используя различные языки и платформы. '
                            },
                        ]
                    }
                }
            }
        },
        computed: {
            getServices(){
                return this.translations[this.state.lang].services.chunk(2)
            }
        },
        mounted(){
            // console.log(this.translations[this.state.lang].services.chunk(2));
        }
    }
</script>