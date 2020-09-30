<template>
  <div id="app">
    <div class="row">
      <div class="double-column">
        <Products @add-cart="addCart"/>
      </div>

      <div class="column">
        <Cart ref="cart" @remove-cart="removeCart" :cart="cart"/>
      </div>
    </div>
  </div>
</template>

<script>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'

export default {
  name: 'App',
  components: {
    Products,
    Cart
  },

  data () {
    return {
      cart: []
    }
  },

  methods: {
    addCart (product) {
      const index = this.cart.findIndex(item => item.id === product.id)

      if (index < 0) {
        return this.cart.unshift({ ...product })
      }

      this.cart[index].quantity++
    },

    removeCart (product) {
      const index = this.cart.findIndex(item => item.id === product.id)

      if (index >= 0) {
        this.cart.splice(index, 1)
      }
    }
  }
}
</script>

<style>
@import './assets/css/style.css';

#app {
  padding-top: 10px;
  height: 100%;
  width: 100%;
  margin-bottom: 10px;
}
</style>
