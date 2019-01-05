/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
require('./bootstrap');



import { sync } from 'vuex-router-sync'
import { store } from './store';
import { router } from './router/index';
import App from './components/App';
import Vue from 'vue';

require('./index');

if(Array.prototype.chunk === undefined){
    Array.range = function(n) {
        return Array.apply(null,Array(n)).map((x,i) => i)
    };

    Object.defineProperty(Array.prototype, 'chunk', {
        value: function(n) {
            return Array.range(Math.ceil(this.length/n)).map((x,i) => this.slice(i*n,i*n+n));
        }
    });
}

sync(store, router);

export default new Vue({
    router,
    store,
    render: h => h(App),
});