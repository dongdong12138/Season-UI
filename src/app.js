import Vue from 'vue'

import Icon from './Icon.vue'
import Button from './Button/Button.vue'
import ButtonGroup from './Button/ButtonGroup.vue'
Vue.component('s-icon', Icon)
Vue.component('s-button', Button)
Vue.component('s-button-group', ButtonGroup)

new Vue({
  el: '#app',
  data: {
    loading1: false,
    loading2: false,
    loading3: true,
    loading4: true,
  }
})
