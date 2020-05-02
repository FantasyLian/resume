'use strict';

import Vue from 'vue';
import App from './app.vue';
import './src/assets/js/skrollr.js'
import './src/assets/js/resume.js'
import './src/assets/css/normalize.min.css'
import './src/assets/css/style.css';

new  Vue({
    el: '#app',
    render: h => {
        return h(App)
    }
})