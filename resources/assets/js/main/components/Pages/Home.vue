<template>
    <div>
        <div class="page page-home">
            <div class="side-button hidden-xs hidden-sm">
                <button class="button-blue animate zoom" data-duration="1000">
                    <router-link :to="Laravel.getLocalizedRoute({name : 'vacancy'})">
                        {{ state.translations[state.lang].vacancies }}
                    </router-link>
                </button>
            </div>
            <div class="lang-switcher hidden-xs">
                <p class="animate zoom" data-duration="500">
                    <span :class="{'active': state.lang === 'en'}"><a href="/en">ENG</a></span>
                    |
                    <span :class="{'active': state.lang === 'ru'}"><a href="/">RU</a></span>
                </p>
            </div>
            <!--<div class="hot-news animate fade-left hidden-xs hidden-sm" data-duration="1000">-->
            <!--<h3 class="hot-news__title">{{ state.translations[state.lang].news }}</h3>-->
            <!--<div class="hot-news__posts">-->
            <!--<div class="news-post" v-for="item in getNews">-->
            <!--<p>{{ item.description }}</p>-->
            <!--</div>-->
            <!--</div>-->
            <!--</div>-->
            <div class="section section-intro">
                <div class="container">
                    <div class="row imposition">
                        <div class="col-xs-12 col-sm-8">
                            <div class="row animate zoom" data-delay="0" data-duration="1000">
                                <router-link :to="Laravel.getLocalizedRoute({name : 'about'})">
                                    <div class="hidden-xs block block-large smartlab mouse-move-animate" data-sensivity="80">
                                        <div v-if="!notSupportedBrowser" class="block__mask animate fade-right" data-delay="300" data-duration="500">
                                            <img class="mouse-move-animate" data-sensivity="60" src="/images/maskbg1.png" alt="">
                                        </div>

                                        <div v-else class="block__image">
                                            <img src="/images/static-mask1.png" alt="">
                                        </div>

                                        <div class="block__title">
                                            <p>INNOVATIVE LABORATORY 2017</p>
                                        </div>
                                    </div>


                                    <div class="visible-xs block block-large smartlab mouse-move-animate" data-sensivity="80">
                                        <div class="block__image">
                                            <img src="/images/static-mask1.png" alt="">
                                        </div>

                                        <div class="block__title">
                                            <p>INNOVATIVE LABORATORY 2017</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <div class="cols-mobile visible-xs clearfix">
                            <router-link :to="Laravel.getLocalizedRoute({name : 'projects'})">
                                <div class="block block-small project animate fade-right" data-delay="300" data-duration="500">
                                    <div class="block__image">
                                        <img src="/images/static-mask2.png" alt="">
                                    </div>
                                    
                                    <div class="block__title">
                                        <p>OUR PRODUCT</p>
                                    </div>
                                </div>
                            </router-link>
                            <router-link :to="Laravel.getLocalizedRoute({name : 'contact'})">
                                <div class="block block-small cont animate fade-left" data-delay="300" data-duration="500">

                                    <div class="block__image">
                                        <img src="/images/static-mask3.png" alt="">
                                    </div>

                                    <div class="block__title">
                                        <p>OUR CONTACT AND ADDRESS</p>
                                    </div>
                                </div>
                            </router-link>
                        </div>
                        <div class="col-xs-12 col-sm-4 hidden-xs">
                            <div class="row animate zoom text-center" data-delay="200" data-duration="1000">
                                <router-link :to="Laravel.getLocalizedRoute({name : 'projects'})">
                                    <div class="block block-small project mouse-move-animate" data-sensivity="100">
                                        <div v-if="!notSupportedBrowser" class="block__mask animate fade-left" data-delay="500" data-duration="500">
                                            <img class="mouse-move-animate" data-sensivity="60" src="/images/maskbg2.png" alt="">
                                        </div>

                                        <div v-else class="block__image">
                                            <img src="/images/static-mask2.png" alt="">
                                        </div>

                                        <div class="block__title">
                                            <p>OUR PRODUCT</p>
                                        </div>
                                    </div>
                                </router-link>

                            </div>

                            <div class="row animate zoom" data-delay="400" data-duration="1000">
                                <router-link :to="Laravel.getLocalizedRoute({name : 'contact'})">
                                    <div class="block block-small cont mouse-move-animate" data-sensivity="120">
                                        <div v-if="!notSupportedBrowser" class="block__mask animate fade-left" data-delay="700" data-duration="500">
                                            <img class="mouse-move-animate" data-sensivity="60" src="/images/maskbg3.png" alt="">
                                        </div>

                                        <div v-else class="block__image">
                                            <img src="/images/static-mask3.png" alt="">
                                        </div>

                                        <div class="block__title">
                                            <p>OUR CONTACT AND ADDRESS</p>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>

                    <!--<div class="hot-news animate fade-left hidden-md hidden-lg" data-duration="1000">-->
                    <!--<h3 class="hot-news__title">{{ state.translations[state.lang].news }}</h3>-->
                    <!--<div class="hot-news__posts">-->
                    <!--<div class="news-post" v-for="item in getNews">-->
                    <!--<p>{{ item.description }}</p>-->
                    <!--</div>-->
                    <!--</div>-->
                    <!--</div>-->
                </div>
            </div>

            <div class="svg">
                <svg viewBox="0 0 300 80" xmlns="http://www.w3.org/2000/svg">
                    <clipPath id="block-bg1-clip">
                        <text x="0" y="150" class="text1 heavy">SMART</text>
                        <text x="-10" y="360" class="text2 heavy">LAB</text>
                    </clipPath>
                    <clipPath id="block-bg2-clip">
                        <text x="0" y="120" class="text1 heavy">PRO</text>
                        <text x="0" y="240" class="text2 heavy">JECT</text>
                    </clipPath>
                    <clipPath id="block-bg3-clip">
                        <text x="0" y="180" class="text1 heavy">CONT.</text>
                    </clipPath>
                </svg>
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
                        hotNews: [
                            {
                                id: 0,
                                name: 'fweafwaf',
                                description: 'ksremngoseigj'
                            }
                        ]
                    },
                    ru: {
                        hotNews: [
                            {
                                id: 0,
                                name: '',
                                description: 'Новость'
                            }
                        ]
                    }
                },
            }
        },
        computed: {
            getNews(){
                return this.translations[this.state.lang].hotNews
            },
            notSupportedBrowser(){
                if( (Laravel.browser === 'Internet Explorer') ||
                    (Laravel.browser === 'Edge') ||
                    (Laravel.browser === 'Safari')){
                    return true;
                } else {
                    return false;
                }
            }
        }
    }
</script>