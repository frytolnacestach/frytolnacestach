import { createRouter, createWebHistory } from 'vue-router'

function lazyLoad(view){
    return import(`./views/${view}.vue`)
}

const routes = [
    {
        path: '/',
        name: 'pageHome',
        component: lazyLoad('PageHome')
    },
    {
        path: '/blog',
        name: 'pageBlog',
        component: lazyLoad('PageBlog')
    },
    {
        path: '/clanky/trikrizovy-vrch',
        name: 'pageBlogTrikrizovyvrch',
        component: lazyLoad('PageBlogTrikrizovyvrch')
    },
    {
        path: '/social',
        name: 'pageSocial',
        component: lazyLoad('PageSocial')
    },
    {
        path: '/iam',
        name: 'pageIam',
        component: lazyLoad('PageIam')
    },
    {
        path: '/donate',
        name: 'pageDonate',
        component: lazyLoad('PageDonate')
    },
    {
        path: '/cookies',
        name: 'pageCookies',
        component: lazyLoad('PageCookies')
    },
    {
        path: '/conditions',
        name: 'pageConditions',
        component: lazyLoad('PageConditions')
    },
    {
        path: '/styleguide',
        name: 'pageStyleguide',
        component: lazyLoad('PageStyleguide')
    },
    {
        path: '/:pathMatch(.*)*',
        component: lazyLoad('PageNotfound')
    }
];

const router = createRouter({ 
    history: createWebHistory(), 
    routes,
    scrollBehavior() {
        document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
    }
})

export default router;