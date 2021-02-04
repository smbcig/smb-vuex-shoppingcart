import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({

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
        setProducts(state, products) {
            // update products

            state.products = products
        }
    }
})