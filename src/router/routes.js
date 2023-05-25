const routes = [
    {
        path: '/',
        name: 'entry',
        component: () => import('@/views/EntryView.vue'),
        children: [
            {
                path: '/',
                name: 'index',
                component: () => import('@/views/IndexView.vue')
            },
            {
                path: '/classify',
                name: 'classify',
                component: () => import('@/views/ClassifyView.vue')
            },
            {
                path: '/cart',
                name: 'cart',
                component: () => import('@/views/CartView.vue')
            },
            {
                path: '/mine',
                name: 'mine',
                component: () => import('@/views/MineView.vue')
            }
        ]
    }
]
export default routes
