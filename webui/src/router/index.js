import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const routes = [
    {
        path: '*',
        redirect: '/home'
    },
    {
        name: 'login',
        path: '/login',
        component: () => import('../view/login/login'),
        meta: {
            title: '登陆'
        }
    },
    {
        name: 'home',
        redirect: '/home',
        component: () => import('../layout/BasicLayout'),
        children: [
            {
                name: 'home',
                path: '/home',
                redirect: '/gmap',
                component: () => import('../view/home/home'),
                meta: {
                    title: '综合显示'
                }
            },
            {
                name: 'history',
                path: '/history',
                component: () => import('../view/history/newhistory'),
                meta: {
                    title: '数据中心'
                }
            },
            {
                name: 'gmap',
                path: '/gmap',
                component: () => import('../view/gmap/gmap'),
                meta: {
                    title: 'gis模块'
                }
            },
            {
                name: 'tagDetail',
                path: '/tagDetail',
                component: () => import('../view/gmap/tagDetail'),
                meta: {
                    title: 'gis模块'
                }
            },
            {
                name: 'realtime',
                path: '/realtime',
                component: () => import('../view/realtime/newrealtime'),
                meta: {
                    title: '实时告警'
                }
            },
            {
                name: 'test',
                path: '/test',
                component: () => import('../view/test/test'),
                meta: {
                    title: '测试'
                }
            }
        ]
    }
];

// add route path
routes.forEach(route => {
    route.path = route.path || '/' + (route.name || '');
});

const router = new Router({routes});

router.beforeEach((to, from, next) => {
    const title = to.meta && to.meta.title;
    if (title) {
        document.title = title;
    }
    next();
});

export {
    router
};