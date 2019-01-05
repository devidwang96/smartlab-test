import VueRouter from 'vue-router';

const routes = [
    {
        path: '/:locale(' + Laravel.locales_chars.join('|') + ')?',
        name: 'app-index',
        component : process.BROWSER
            ? (resolve) => {
                require(['../components/Pages/Index.vue'], resolve)
            }
            : require('../components/Pages/Index.vue'),
        children : [
            {
                path: 'home',
                name: 'home',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Home.vue'], resolve)
                    }
                    : require('../components/Pages/Home.vue'),
            },
            {
                path: 'about',
                name: 'about',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/About.vue'], resolve)
                    }
                    : require('../components/Pages/About.vue'),
            },
            {
                path: 'vacancy',
                name: 'vacancy',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Vacancy.vue'], resolve)
                    }
                    : require('../components/Pages/Vacancy.vue'),
            },
            {
                path: 'projects',
                name: 'projects',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/Index.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/Index.vue'),
            },


            {
                path: 'projects/monocle',
                name: 'monocle',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/Monocle.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/Monocle.vue'),
            },
            {
                path: 'projects/ib',
                name: 'ib',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/ib.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/ib.vue'),
            },
            {
                path: 'projects/sr',
                name: 'sr',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/sr.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/sr.vue'),
            },
            {
                path: 'projects/qaryz',
                name: 'qaryz',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/qariz.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/qariz.vue'),
            },
            {
                path: 'projects/sc',
                name: 'sc',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Projects/sc.vue'], resolve)
                    }
                    : require('../components/Pages/Projects/sc.vue'),
            },

            {
                path: 'contact',
                name: 'contact',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/Contact.vue'], resolve)
                    }
                    : require('../components/Pages/Contact.vue'),
            },
            {
                path: 'news',
                name: 'news',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/News/Index.vue'], resolve)
                    }
                    : require('../components/Pages/News/Index.vue'),
            },
            {
                path: 'news/:news_id',
                name: 'news_item',
                component: process.BROWSER
                    ? (resolve) => {
                        require(['../components/Pages/News/Post.vue'], resolve)
                    }
                    : require('../components/Pages/News/Post.vue'),
            },
        ]
    },
    {
        path: '*',
        name: 'not_found',
        component: process.BROWSER
            ? (resolve) => {
                require(['../components/Pages/404.vue'], resolve)
            }
            : require('../components/Pages/404.vue')
    },
];

export const router = new VueRouter({
    routes,
    linkActiveClass : 'active',
    mode : 'history',
    base : '/'
});