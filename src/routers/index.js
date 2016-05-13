// index.js
// JustClear updated at 2016-05-13

import HomeView from '../views/home/HomeView.vue';
import NotFound from '../views/NotFound.vue';

export default (router) => {
    router.map({
        '/': {
            component: HomeView
        },
        '/NotFound': {
            component: NotFound
        }
    });
    router.redirect({
        '*': '/NotFound'
    })
}
