import Vue from 'vue';
import Router from 'vue-router';

import App from './components/App.vue';
import ItemView from './components/ItemView.vue';

// install router
Vue.use(Router);

// routing
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
