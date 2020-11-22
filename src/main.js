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
    { path: '/Browse', name: "Browse", component: Browse}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        user: [],
        posts: [],
        people: []
    },
    mutations: {
        setUser(state, user) {
            state.user = user
        },
        setPosts(state, posts) {
            state.posts = posts
        },
        setPeople(state, people) {
            state.people = people
        },
    },

    actions: {
        getUser({commit}) {
            axios.get('https://private-anon-609e31d177-wad20postit.apiary-mock.com/users/1')
                .then(response => {
                    commit('setUser', response.data)
                })
        },
        getPeople({ commit }) {
            axios.get('https://private-anon-1a5282cbfb-wad20postit.apiary-mock.com/profiles')
                .then(response => {
                    commit('setPeople', response.data)
                })
        },
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

