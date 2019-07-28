/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('../bootstrap');

window.Vue = require('vue');
window.eventBus = new Vue();
Vue.prototype._ = _;
Vue.prototype.moment = moment;

import Layout from './components/Layout.vue';
import router from './router/index.js';
import store from './store/index.js';


const app = new Vue({
    el: '#app',
    router,
    store,

    data() {
      return {
        waitData: null
      }
    },

    beforeMount(){

    },
    mounted(){
      
    },
    components:{
    	Layout,
    }
});
