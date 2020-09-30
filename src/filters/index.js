import Vue from 'vue'

Vue.filter('currency', function (value) {
  if (!value) return ''

  return new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(value)
})