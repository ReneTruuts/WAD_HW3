import Vue from 'vue'
import Vuex from 'vuex'
import VueRouter from 'vue-router'
import Axios from "axios";
import App from './App.vue'
import ItemPage from "./components/ItemPage";
import Home from "./components/Home";
import Item from "./models/Item";
import Cart from "./models/Cart";
import IndexPage from "./components/IndexPage";


Vue.config.productionTip = false;
Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
    {path: '/', component: Home},
    {path: '/items/:id', name: "items", component: ItemPage},
    {path: '/IndexPage', name:'IndexPage', component: IndexPage}
];

const router = new VueRouter({routes});

const store = new Vuex.Store({
    state: {
        cart: new Cart(),
        items: [
            new Item("Programming books bundle", 50.0, "./images/image1.jpg",),
            new Item("Java Programming", 23.0, "./images/image5.jpg"),
            new Item("Programming in C++", 15.0, "./images/image6.jpg"),
            new Item("Programming and fundamentals of Python", 5.50, "./images/image7.jpg"),
            new Item("My first coding book", 10.90, "./images/image8.jpg")
        ]
    },
    mutations: {
        toggleItem: (state, id) => {

            let item = state.items[id];
            let index = state.cart.selected.indexOf(id);

            if (index > -1) {
                state.cart.selected.splice(index, 1);
                state.cart.total -= item.price;
                return false;
            }

            state.cart.selected.push(id);
            state.cart.total += item.price;
            return true;
        }
    },
    getters: {
        itemIsSelected: (state) => (id) => {
            return state.cart.selected.indexOf(id) > -1
        },
        getItem: (state) => (id) => {
            return state.items[id]
        },
    }
});

new Vue({
    router,
    store,
    render: h => h(App),
}).$mount('#app');
