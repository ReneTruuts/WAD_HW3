import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home";
import IndexPage from "./components/IndexPage";
import BrowsePage from "./components/BrowsePage";
import axios from 'axios'


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Home},
    {path: '/IndexPage', name:'IndexPage', component: IndexPage},
    {path: '/Browse', name: "BrowsePage", component: BrowsePage}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        persons: [],
        posts: [],
        user: []
    },
    mutations: {
        SET_PERSONS(state, persons) {
            state.persons = persons
        },
        SET_POSTS(state, posts) {
            state.posts = posts
        },
        SET_USER(state, user) {
            state.user = user
        }
        },
    getters: {
    }, 
    actions: {
        getPersons({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PERSONS', response.data)
                })
        },
        getPosts({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('SET_POSTS', response.data)
                })
        },
        getUser({ commit }) {
            axios.get('https://private-anon-609e31d177-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('SET_USER', response.data)
                })
        }
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

