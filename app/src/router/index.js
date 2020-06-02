import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        redirect: {
            name: 'Dashboard'
        }
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: () => import('../views/Dashboard.vue'),
        // children: [
        //     {
        //         path: '',
        //         name: 'Introduction',
        //         component: () => import('../views/dashboard/Introduction.vue'),
        //     },
        //     {
        //         path: 'world-map',
        //         name: 'WorldMap',
        //         component: () => import('../views/dashboard/Map.vue')
        //     },
        //     {
        //         path: 'pie',
        //         name: 'Pie',
        //         component: () => import('../views/dashboard/Pie.vue'),
        //     }
        // ]
    },
    {
        path: '/team',
        name: 'Team',
        component: () => import('../views/Team.vue')
    },
    {
        path: '/video',
        name: 'Video',
        component: () => import('../views/Video.vue')
    }
];

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
});

export default router
