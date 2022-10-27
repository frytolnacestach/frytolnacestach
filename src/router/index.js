import { createRouter, createWebHistory } from 'vue-router'

import pageHome from '../views/PageHome.vue'
import pageBlog from '../views/PageBlog.vue'
import PageBlogDetail from '../views/PageBlogDetail.vue'
import pageSocial from '../views/PageSocial.vue'
import pageIam from '../views/PageIam.vue'
import pageDonate from '../views/PageDonate.vue'
import pageCookies from '../views/PageCookies.vue'
import pageConditions from '../views/PageConditions.vue'
import pageStyleguide from '../views/PageStyleguide.vue'
import pageNotfound from '../views/PageNotfound.vue'

const routes = [
    {
        path: '/',
        name: 'pageHome',
        component: pageHome,
        meta: {
            title: 'Úvod'
        }
    },
    {
        path: '/blog',
        name: 'pageBlog',
        component: pageBlog,
        meta: {
            title: 'Články'
        }
    },
    {
        path: '/clanky/:idname',
        name: 'pageBlogDetail',
        component: PageBlogDetail,
        meta: {
            title: 'Tříkřížový vrch'
        }
    },
    {
        path: '/social',
        name: 'pageSocial',
        component: pageSocial,
        meta: {
            title: 'Kde mě najdete'
        }
    },
    {
        path: '/iam',
        name: 'pageIam',
        component: pageIam,
        meta: {
            title: 'Kdo jsem'
        }
    },
    {
        path: '/donate',
        name: 'pageDonate',
        component: pageDonate,
        meta: {
            title: 'Podpořit'
        }
    },
    {
        path: '/cookies',
        name: 'pageCookies',
        component: pageCookies,
        meta: {
            title: 'Zásady Cookies'
        }
    },
    {
        path: '/conditions',
        name: 'pageConditions',
        component: pageConditions,
        meta: {
            title: 'Obchodní podmínky a zásady ochrany osobních údajů'
        }
    },
    {
        path: '/styleguide',
        name: 'pageStyleguide',
        component: pageStyleguide,
        meta: {
            title: 'Styleguide'
        }
    },
    {
        path: '/:pathMatch(.*)*',
        component: pageNotfound,
        meta: {
            title: 'Stránka nenalezena'
        }
    }
];

const router = createRouter({ 
    history: createWebHistory(process.env.BASE_URL), 
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

router.beforeEach((to, from, next) => {
    document.title = `${ process.env.VUE_APP_TITLE } - ${ to.meta.title }`
    next()
})

export default router;