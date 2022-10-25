import { createRouter, createWebHistory } from 'vue-router'

import pageHome from '../views/PageHome.vue'
import pageBlog from '../views/PageBlog.vue'
import PageBlogTrikrizovyvrch from '../views/PageBlogTrikrizovyvrch.vue'
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
        component: pageHome
    },
    {
        path: '/blog',
        name: 'pageBlog',
        component: pageBlog
    },
    {
        path: '/clanky/trikrizovy-vrch',
        name: 'pageBlogTrikrizovyvrch',
        component: PageBlogTrikrizovyvrch
    },
    {
        path: '/social',
        name: 'pageSocial',
        component: pageSocial
    },
    {
        path: '/iam',
        name: 'pageIam',
        component: pageIam
    },
    {
        path: '/donate',
        name: 'pageDonate',
        component: pageDonate
    },
    {
        path: '/cookies',
        name: 'pageCookies',
        component: pageCookies
    },
    {
        path: '/conditions',
        name: 'pageConditions',
        component: pageConditions
    },
    {
        path: '/styleguide',
        name: 'pageStyleguide',
        component: pageStyleguide
    },
    {
        path: '/:pathMatch(.*)*',
        component: pageNotfound
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
    document.title = `${ process.env.VUE_APP_TITLE } - ${ to.name }`
    next()
})

export default router;