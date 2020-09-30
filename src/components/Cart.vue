<template>
  <div class="cart">
    <Card title="Meu carrinho" :products="cart" show-quantity @click-row="removeCart">
      <template slot="sub-footer">
        <div class="row sub-footer-total">
          <div class="column">
            <h4>Total</h4>
          </div>

          <div class="column col-total">
            <h4>{{ total | currency }}</h4>
          </div>
        </div>

        <Notify class="footer-notify" success message="Parabéns, sua compra tem frete grátis!" v-if="total > 10"/>
      </template>

      <template slot="footer">
        <div class="row footer-button">
          <div class="column">
            <button type="button">Finalizar compra</button>
          </div>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import Card from './Card'
import Notify from './Notify'

export default {
  name: 'Cart',

  props: {
    cart: {
      type: Array
    }
  },

  components: {
    Card,
    Notify
  },

  data () {
    return {
      total: 0
    }
  },

  methods: {
    removeCart (product) {
      this.$emit('remove-cart', product)
    }
  },

  watch: {
    cart: {
      deep: true,
      handler () {
        this.total = this.cart
          .map(product => (product.sellingPrice * product.quantity))
          .reduce((total, sellingPrice) => total + sellingPrice, 0)
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cart {
  position: sticky;
  top: 10px;
}

.cart .col-total {
  text-align: right;
}

.cart .sub-footer-total {
  align-items: center;
  height: 50px;
}

.cart .sub-footer .footer-notify {
  margin: 10px 0 20px 0;
}

.cart .footer-button button {
  height: 50px;
  margin: 20px 0;
  align-items: center;
  font-weight: bold;
  font-family: Poppins;
  border-radius: 7px;
  border: none;
  outline: none;
  text-decoration: none;
  background: #0069ed;
  color: #ffffff;
  font-size: 18px;
  line-height: 1;
  cursor: pointer;
  text-align: center;
}

.cart .footer-button button:hover,
.cart .footer-button button:focus {
  background: #0076ed;
}

.cart .footer-button button:active {
  transform: scale(0.99);
}
</style>
