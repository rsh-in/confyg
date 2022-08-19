import Vue from 'vue';
// import Web3 from 'Web3';

import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'github-fork-ribbon-css/gh-fork-ribbon.css';

import App from './App.vue';

new Vue({ render: createElement => createElement(App) }).$mount('#app');