// routers/index.js

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
