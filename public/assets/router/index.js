import Vue from "vue";
import routes from "./routes";
import VueRouter from "vue-router";
Vue.use(VueRouter)



const router = new VueRouter({
    routes,
    mode: 'hash'
})

export default router