<template>
    <div>
        <div class="page page-contact">
            <div class="side-button hidden-xs hidden-sm">
                <button class="button-blue animate zoom" data-duration="1000">
                    <router-link :to="Laravel.getLocalizedRoute({name : 'vacancy'})">
                        {{ state.translations[state.lang].vacancies }}
                    </router-link>
                </button>
            </div>

            <div class="section section-subscribe">
                <div class="container">
                    <h1 class="section__title">{{ state.translations[state.lang].contacts }}</h1>

                    <div class="section__table">
                        <table>
                            <tr>
                                <td>Пишите</td>
                                <td><a href="mailto:office@smartlab.kz">office@smartlab.kz</a></td>
                            </tr>
                            <tr>
                                <td>Звоните</td>
                                <td>+7 (777) 700-05-05</td>
                            </tr>
                            <tr>
                                <td>Приезжайте</td>
                                <td>{{ translations[state.lang].page.address }}</td>
                            </tr>

                        </table>
                    </div>


                    <!--<p class="section__title">-->
                        <!--{{ translations[state.lang].page.title }}-->
                    <!--</p>-->

                    <!--<div class="subscribe-form">-->
                        <!--<form action="#" class="row">-->
                            <!--<input type="text" id="email" :placeholder="translations[state.lang].page.writeEmail">-->
                            <!--<input type="submit" id="submit" :value="translations[state.lang].page.subscribe">-->
                        <!--</form>-->
                    <!--</div>-->
                </div>
            </div>
            <div class="section section-map">
                <div class="container">
                    <!--<div class="row">-->
                        <!--<div class="col-md-7 col-sm-6">-->
                            <!--<div class="address">-->
                                <!--<p class="address__title">-->
                                    <!--{{ state.translations[state.lang].address }}-->
                                <!--</p>-->
                                <!--<div class="address__address">-->
                                    <!--{{ translations[state.lang].page.address }}-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                        <!--<div class="col-md-5 col-sm-6">-->
                            <!--<div class="address">-->
                                <!--<p class="address__title">-->
                                    <!--EMAIL-->
                                <!--</p>-->
                                <!--<div class="address__address">-->
                                    <!--office@smartcall.kz-->
                                <!--</div>-->
                            <!--</div>-->
                        <!--</div>-->
                    <!--</div>-->

                    <div class="map" id="map">

                    </div>

                    <!--<div class="follow">-->
                        <!--<p class="follow__title">-->
                            <!--{{ state.translations[state.lang].followUs }}-->
                        <!--</p>-->
                        <!--<div class="socials">-->

                        <!--</div>-->
                    <!--</div>-->
                </div>
            </div>

        </div>
    </div>

</template>

<script>
    export default {
        data() {
            return {
                map: null,
                translations: {
                    en: {
                        page: {
                            title: "Do you want to visit us for a conversation and a cup of good coffee? Don’t hesitate to contact us and become our client or a pertner!",
                            writeEmail: "Enter your email to subscribe for newsletter",
                            subscribe: "Subscribe",
                            address: "Kazakhsan, Almaty Kyz Zhibek st., 131B"
                        }
                    },
                    ru: {
                        page: {
                            title: "Хотите приехать за дружеской беседой и чашкой очень хорошего кофе? Не стесняйтесь связаться с нами, чтобы стать клиентами или партнерами.",
                            writeEmail: "Напиши email чтобы быть в курсе новостей",
                            subscribe: "Подписаться",
                            address: "г.Алматы, мкр. Кок-Тобе, ул. Кыз-Жибек, 131Б"
                        }
                    }
                }
            }
        },
        methods: {
            yMapInit(){
                this.map = new ymaps.Map("map", {
                    center: [43.213790, 76.976461],
                    zoom: 15
                });
                let smartLab = new ymaps.Placemark([43.213790, 76.976461]);
                this.map.geoObjects.add(smartLab);
            },
            yMapDestroy(){
                this.map.destroy();
            }
        },
        mounted(){
            ymaps.ready(() => {
                this.yMapInit();
            });
        },
        beforeRouteLeave (to, from, next) {
            this.yMapDestroy();
            next();
        }
    }
</script>