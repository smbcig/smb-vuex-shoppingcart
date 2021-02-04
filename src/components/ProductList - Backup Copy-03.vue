<template>
  <ul>
    <li
      v-for="product in products"
      :key="product.id">
      {{ product.title }} - {{ product.price | currency }}
      <br>
      <button
        :disabled="!product.inventory"
        @click="addProductToCart(product)">
        Add to cart
      </button>
    </li>
  </ul>
</template>

<script>
import shop from '@/api/shop.js'
import store from '@/store/index.js'

export default {
  data () {
    return {
        products: []
    }
  },

created () {
      shop.getProducts(products => {
          this.products = products
          })
        }
    }
</script>