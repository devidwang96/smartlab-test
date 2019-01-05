// const Promise = require('promise-polyfill').default;
import Vue from 'vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import VeeValidate from 'vee-validate';
import VueMask from 'vue-the-mask';
import { Validator } from 'vee-validate';
import { mapActions } from 'vuex';
import { mapGetters } from 'vuex';



Vue.use(VueRouter);
Vue.use(VueResource);

Vue.component(
    'app-header',
    require('./components/Parts/Header.vue')
);

Vue.component(
    'app-footer',
    require('./components/Parts/Footer.vue')
);



Validator.extend('truthy', {
    getMessage: field => 'The ' + field + ' value is not truthy.',
    validate: value => !!value && value != 0
});

if(process.BROWSER){
    Vue.use(VueMask);
    Vue.use(require('vue-scrollto'));
    Vue.component('datepicker', require('vue-flatpickr-component'));
    require('.././additional-plugins/jquery.initialize');
    require('bootstrap-select');
    require('bootstrap-notify');
}


Vue.component(
    'app',
    require('./components/App.vue')
);

let eventHub = new Vue();


// if(process.BROWSER){
//     window.axios.defaults.headers.common['Locale'] = Laravel.currentLocaleChar;
// }


Vue.mixin({
    data(){
        return {

        }
    },
    mounted(){

    },

    methods : {
        ...mapActions([
            'change_backend_data',
            'changeStoreReady',
            'handleStoreErrorResponse',
            'handleStoreError',
            'changeStoreRequestIsBeingSent',
            'changeStoreAPIRequestIsBeingSent'
        ])
    },
    computed : {
        ...mapGetters([
            'Laravel',
            'state'
        ])
    }
});

