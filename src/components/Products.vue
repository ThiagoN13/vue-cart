<template>
  <div class="products">
    <Card title="Produtos" :products="products" @click-row="addCart"/>
  </div>
</template>

<script>
import Card from './Card'
import { items } from '../mock/produtos.json'

export default {
  name: 'Products',

  components: {
    Card
  },

  data () {
    return {
      products: this.removeDuplicates(items)
    }
  },

  methods: {
    removeDuplicates (array) {
      return Array.from(new Set(array.map(row => row.id))).map(id => array.find(row => row.id === id))
    },

    addCart (product) {
      this.$emit('add-cart', product)
    }
  }
}
</script>