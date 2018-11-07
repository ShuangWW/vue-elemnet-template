import Vue from 'vue'
import Router from 'vue-router'

const Layout = () => import('./views/layout/Layout.vue')
const Login = () => import('./views/Login.vue')

const Home = () => import('./views/home/index.vue')
const Events = () => import('./views/events/index.vue')
const Subject = () => import('./views/subject/index.vue')
const Products = () => import('./views/products/index.vue')
const Orders = () => import('./views/orders/index.vue')

Vue.use(Router)

export const constantRouterMap = [{
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        component: Login,
        hidden: true
    },
    {
        path: '/home',
        component: Layout,
        redirect: '/home/index',
        name: 'Home',
        alwaysShow: true,
        meta: {
            title: '首页配置管理',
            icon: '\ue77f'
        },
        children: [{
            path: 'index',
            name: 'Index',
            component: Home,
            meta: {
                title: '首页'
            }
        }]
    },
    {
        path: '/product',
        component: Layout,
        redirect: '/product/productList',
        name: 'Example',
        alwaysShow: true,
        meta: {
            title: '商品查询',
            icon: '\ue75d'
        },
        children: [{
            path: 'productList',
            name: 'ProductList',
            component: Products,
            meta: {
                title: '商品列表',
            }
        }]
    },
    {
        path: '/event',
        component: Layout,
        redirect: '/event/eventList',
        name: 'Event',
        alwaysShow: true,
        meta: {
            title: '活动管理',
            icon: '\ue616'
        },
        children: [{
            path: 'eventList',
            name: 'EventList',
            component: Events,
            meta: {
                title: '活动列表',
            }
        }]
    },
    {
        path: '/subject',
        component: Layout,
        redirect: '/subject/subjectList',
        name: 'Subject',
        alwaysShow: true,
        meta: {
            title: '专题管理',
            icon: '\ue612'
        },
        children: [{
            path: 'subjectList',
            name: 'SubjectList',
            component: Subject,
            meta: {
                title: '专题列表',
            }
        }]
    },
    {
        path: '/order',
        component: Layout,
        redirect: '/order/orderList',
        name: 'Order',
        alwaysShow: true,
        meta: {
            title: '订单统计',
            icon: '\ue603'
        },
        children: [{
            path: 'orderList',
            name: 'OrderList',
            component: Orders,
            meta: {
                title: '订单列表',
            }
        }]
    },
    {
        path: '/404',
        component: () => import('@/views/404'),
        hidden: true
    },
    {
        path: '*',
        redirect: '/404',
        hidden: true
    }
]

export default new Router({
    scrollBehavior: () => ({
        y: 0
    }),
    routes: constantRouterMap
})