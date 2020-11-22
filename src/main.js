import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import App from './App.vue'
import Home from "./components/Home";
import IndexPage from "./components/IndexPage";
import Browse from "./components/Browse";
import axios from 'axios'

Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Home},
    {path: '/IndexPage', name:'IndexPage', component: IndexPage},
    { path: '/browse', name: "browse", component: Browse},
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        persons: [],
        user: [],
        posts: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        SET_PERSONS(state, persons) {
            state.persons = persons
        },
    },

    actions: {
        getUser({ commit }) {
            axios.get('https://private-anon-609e31d177-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('setUser', response.data)
                })
        },
        getPosts({commit}) {
            axios
                .get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/posts')
                .then(response => {
                    commit('setPosts', response.data)
                })
        },
        getPersons({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('SET_PERSONS', response.data)
                })
        }
    },

});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');

