import Vue from 'vue';
import Vuex from 'vuex';
import ServerXHR from '../additional-plugins/ServerXHR';

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        menu: {
            state: false
        },
        page: {
            defaultPage: true,
        },
        lang: Laravel.currentLocaleChar,
        translations: {
            en: {
                back : 'Back',
                more : 'More',
                applyNow : 'Apply now',
                vacancies: 'Vacancies',
                news: 'News',
                viewAll: 'View All',
                viewProjects: 'View projects',
                aboutUs: 'About us',
                projects: 'Projects',
                contacts: 'Contacts',
                ourPartners: 'Our partners',
                address: 'Address',
                followUs: 'Follow us',
                gotoSite: 'Go to the web site',
                viewAllNews: 'View all news',
                readMore: 'Read more',
                lessNews: 'Less news',
                moreNews: 'More news',
                productDetails : 'Product details',
                nextProject: 'Next project',
                contactUs: 'Contact Us',
            },
            ru: {
                back: 'Назад',
                more : 'Подробнее',
                applyNow : 'Подать заявку',
                vacancies: 'Вакансии',
                news: 'Новости',
                viewAll: 'Посмотреть все',
                viewProjects: 'Посмотреть проекты',
                aboutUs: 'О нас',
                projects: 'Проекты',
                contacts: 'Контакты',
                ourPartners: 'Наши партнеры',
                address: 'Адрес',
                followUs: 'Следуй за нами',
                gotoSite: 'Перейти на сайт',
                viewAllNews: 'Посмотреть все новости',
                readMore: 'Читать далее',
                lessNews: 'Меньше новостей',
                moreNews: 'Больше новостей',
                productDetails : 'Детали продукта',
                nextProject: 'Следующий проект',
                contactUs: 'Написать нам',
            }
        },

        Laravel,
        backend_data : {},
        ServerXHR,
    },
    getters: {
        Laravel(state){
            return state.Laravel;
        },
        state(state){
            return state;
        },
    },
    mutations: {
        change_backend_data(state, data) {
            Vue.set(state.backend_data, data.route_name, data.backend_data)
        },
    },

    actions: {
        change_backend_data({commit, state}, data) {
            commit('change_backend_data', data);
        },
    }
});
