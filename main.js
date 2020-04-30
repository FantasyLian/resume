'use strict';

import Vue from 'vue';
import App from './app.vue';
// import $ from 'jquery';
// import './assets/js/skrollr.js'
// import './assets/js/resume.js'
import './assets/css/normalize.min.css'
import './assets/css/style.css';

new  Vue({
    el: '#app',
    render: h => {
        return h(App)
    }
})