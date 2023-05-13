import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import NewsDetail from '../views/NewsDetail.vue'
import EditNews from '../views/EditNews.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/:slug',
      name: 'news-detail',
      component: NewsDetail
    },
    {
      path: '/edit-news/:slug',
      name: 'edit-news',
      component: EditNews
    }
  ],
})

export default router
