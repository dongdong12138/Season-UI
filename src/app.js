import Vue from 'vue'

import Icon from './Icon.vue'
import Button from './Button.vue'
Vue.component('s-icon', Icon)
Vue.component('s-button', Button)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: true,
    loading4: true,
  }
})
