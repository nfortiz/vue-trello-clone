import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from './components/Home'
import Board from './components/Board'

Vue.use(VueRouter)

const routes = [
    { path: '/', component: Home },
    { path: '/board', component: Board }
    
];

export default new VueRouter({
    routes
})