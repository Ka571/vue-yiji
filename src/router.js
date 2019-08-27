import Vue from "vue"
import VueRouter from "vue-router"
Vue.use(VueRouter)
import Home from "./components/Home.vue"
import Load from "./components/Loading.vue"
import User from "./components/User.vue"
import Topic from "./components/Topic.vue"
import Recommend from "./components/Recommend.vue"
import Qq from "./components/Qq.vue"
import Main from "./components/Main.vue"
import Di from "./components/Ditu.vue"
import Ping from "./components/PingLun.vue"
import PUBLIC from "./public"
const routes = [
  {
    path: PUBLIC + "/",
    component: Load
  },
  {
    path: PUBLIC + "/home",
    component: Home,
    children: [

      {
        path: PUBLIC + "/home",
        component: Qq,
      },
      {
        path: PUBLIC + "/home/recommend",
        component: Recommend,
      },
      {
        path: PUBLIC + "/home/fabu",
        component: Topic,
      },
      {
        path: PUBLIC + "/home/user",
        component: User,
      }
    ]
  },
  {
    path: PUBLIC + "/home/:id",
    component: Main
  },
  {
    path: PUBLIC + "/ditu/:id",
    component: Di,
  },
  {
    path: PUBLIC + "/comment/:id",
    component: Ping
  }
]
const router = new VueRouter({
  routes,
  mode: "hash"
})
export default router