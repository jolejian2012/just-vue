// JustClear updated at 2016-04-20

import Vue from 'vue';
import Router from 'vue-router';
import Routers from './routers';

// components
import App from './App.vue';

// install router
Vue.use(Router);

// instantiate routing
let router = new Router();
Routers(router);

router.start(App, '#just-vue');
