import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
    history: createWebHashHistory(),
    routes: [
        {
            path: '/',
            component: () => import('@/views/Home.vue')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register')
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/views/Login')
        },
        {
            path: '/user/setup',
            name: 'userSetup',
            component: () => import('@/views/UserSetup')
        },
        {
            path: '/bookclass',
            name: 'bookclass',
            // component: () => import('@/views/BookClass')
        },
        {
            path: '/book_rank',
            name: 'bookRank',
            // component: () => import('@/views/BookRank')
        },
    ]
})

// eslint-disable-next-line no-unused-vars
router.afterEach((to,from,next) => {
    window.scrollTo(0,0)
  })
  
  export default router