import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home";
import IndexPage from "./components/IndexPage";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Home},
    {path: '/IndexPage', name:'IndexPage', component: IndexPage},
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
    },
    mutations: {
        },
    getters: {
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

