<template>
    <div>
        <div @click="state.menu.state = false" :class="['overlay-content', {'active' : menuState}]">&nbsp;</div>

        <div :class="['main-header', {'default' : state.page.defaultPage}] ">
            <div class="logo animate zoom" data-delay="0" data-duration="500">
                <a href="/">
                    <img src="/images/logo.png" alt="">
                </a>
            </div>
        </div>

        <div :class="['menu-switcher', {'open' : menuState}]">
            <button @click="state.menu.state = !menuState" class="main-menu__button">
                <i class="animate zoom" data-delay="200" data-duration="500">
                    <span></span>
                    <span></span>
                    <span></span>
                </i>
            </button>
        </div>

        <div :class="['menu-content', {'open': menuState}]">
            <ul>
                <router-link tag="li" :to="Laravel.getLocalizedRoute({name : 'about'})">
                    <a>{{ state.translations[state.lang].aboutUs }}</a>
                </router-link>
                <router-link tag="li" :to="Laravel.getLocalizedRoute({name : 'projects'})">
                    <a>{{ state.translations[state.lang].projects }}</a>
                </router-link>
                <router-link tag="li" :to="Laravel.getLocalizedRoute({name : 'contact'})">
                    <a>{{ state.translations[state.lang].contacts }}</a>
                </router-link>
                <router-link tag="li" :to="Laravel.getLocalizedRoute({name : 'news'})">
                    <a>{{ state.translations[state.lang].news }}</a>
                </router-link>
                <router-link tag="li" :to="Laravel.getLocalizedRoute({name : 'vacancy'})">
                    <a>{{ state.translations[state.lang].vacancies }}</a>
                </router-link>
            </ul>
        </div>
    </div>
</template>

<script>
    export default {
        computed: {
            menuState(){
                return this.state.menu.state;
            }
        },
    }
</script>
