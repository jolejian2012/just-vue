// JustClear updated at 2016-04-20

import Vue from 'vue';
import Router from 'vue-router';

// components
import App from './components/App.vue';
import ItemView from './components/ItemView.vue';

// install router
Vue.use(Router);

// instantiate routing
let router = new Router();

router.map({
    '/item/:id': {
        component: ItemView
    }
});

router.redirect({
    '*': '/item/1'
})

router.start(App, '#just-vue');
