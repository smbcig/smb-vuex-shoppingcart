import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

new Vuex.Store({

    state: { // = dtata
        products: []
    },

    getters: { // = computed properties
        productsCount () {
            // Returns the length of the Product Array
        }
    },

    actions: {
        fetchProducts() {
            // Make the call
        }
    },

    mutations: {
        setProducts() {
            // update products
        }
    },

    modules: {
        cart,
        products
    }
})