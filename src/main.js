import Vue from 'vue'

import Tasks from './components/Tasks.vue'
import Modal from './components/Modal.vue'
import Header from './components/Header.vue'

new Vue({
  el: '#app',
  components:{
  	'component-tasks':Tasks,
  	'component-modal':Modal,
  	'component-header':Header,
  }
})
