import HomeView from '../views/home/HomeView.vue';
import NotFound from '../views/404.vue';

export default (router) => {
    router.map({
        '/': {
            component: HomeView
        },
        '/404': {
            component: NotFound
        }
    });
    router.redirect({
        '*': '/404',
    })
}
