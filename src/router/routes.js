// @ts-check

export default [
  {
    path: '/(.*)*',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '/',
        redirect: _ => {
          return { path: '/cerber/cerbathon' }
        }
      },

      {
        path: '/:character/:type',
        props: true,
        component: () => import('pages/BingoPage.vue')
      }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]
