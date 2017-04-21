import Vue from 'vue'
import VueRouter from 'vue-router'
const routes = [
     { 
        path: '/',
        component: require('./views/index.vue'),
    }
]
var router = new VueRouter({
    routes
})
Vue.use(VueRouter)
new Vue({
    router
}).$mount("#app")