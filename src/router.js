import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes:[
        {path:'/', name:'Landing', component: () =>import('./components/Lander') },
        {path:'/portfolio', name:'Portfolio', component: () =>import('./components/Portfolio') }
    ]
});
export default router;