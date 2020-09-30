<template>
  <div class="card">
    <div class="header">
      <h3>{{ title }}</h3>
    </div>

    <div class="body">
      <div class="row" v-for="(product, index) in products" :key="index" @click="$emit('click-row', product)">
        <div class="column col-img">
          <img class="card-img" :src="product.imageUrl" alt="">
        </div>

        <div class="double-column column-info">
          <h5>{{ product.name }}</h5>
          <span>{{ product.price | currency }}</span>
          <div class="row">
            <div class="column m-0">
              <b>{{ product.sellingPrice | currency }}</b>
            </div>
            <div class="column" v-if="showQuantity">
              <span class="d-block text-right">{{ product.quantity }}x</span>
            </div>
          </div>
        </div>
      </div>

      <div v-if="products.length <= 0">
        <span class="d-block text-center">Sem produto</span>
      </div>
    </div>

    <div class="sub-footer">
      <slot name="sub-footer"></slot>
    </div>

    <div class="footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script>
export default {
	name: 'Card',

	props: {
    title: {
      type: String
    },

    showQuantity: {
      type: Boolean
    },

    products: {
      type: Array
    }
	}
}
</script>

<style scoped>
.card {
  box-shadow: 0 1rem 3rem rgba(0,0,0,.175);
  background-color: #ffffff;
  border-radius: 8px;
}

.card .body .row {
  padding: 5px 0;
}

.card .body .row:hover {
  background-color: #E6E6E6;
}

.card .body {
  cursor: pointer;
  margin: 10px 0;
}

.card .card-img {
  width: 100px;
  height: 100px;
  border: 1px solid #cccccc;
}

.card .col-img {
  flex: initial;
}

.card .column-info {
  margin-left: 10px;
  justify-content: center;
}

.card .column-info span {
  font-size: 12px;
  margin-top: 5px;
  color: #cccccc
}

.card .column-info b {
  font-weight: 500;
}

.card .header {
  border-bottom: 1px solid #cccccc;
  text-align: center;
  height: 50px;
  justify-content: center;
  display: flex;
  align-items: center;
}

.card .header h1 {
  margin-bottom: 0
}

.card .footer {
  border-top: 1px solid #cccccc;
}

.card .sub-footer {
  border-top: 1px solid #cccccc;
}
</style>