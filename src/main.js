import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home";
import IndexPage from "./components/IndexPage";
import axios from 'axios'

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
        posts: []
    },
    mutations: {
        setPosts(state, posts) {
            state.posts = posts
        },
    },

    actions: {
        getPosts({commit}) {
            axios
                .get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('setPosts', response.data)
                })
        }
    },

});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

