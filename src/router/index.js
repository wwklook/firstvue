import Vue from 'vue'
import VueRouter from 'vue-router'

const Home = () =>
  import ('../views/Home.vue')
const Note = () =>
  import ('../views/Note.vue')
Vue.use(VueRouter)

const routes = [{
    path: '/',
    component: Home
  },
  {
    path: '/note',
    component: Note,
    query: {

    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router