// JustClear updated at 2016-04-20

import Vue from 'vue';
import Router from 'vue-router';
import Resource from 'vue-resource';
import Routers from './routers';

// components
import App from './App.vue';

// install plugins
Vue.use(Router);
Vue.use(Resource);

// instantiate routing
let router = new Router();
Routers(router);

router.start(App, '#just-vue');
