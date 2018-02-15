<template>
  <header class="header">
    <div class="logo">task manager</div>
    <div class="menu">
      <div class="menu__btn" @click="openmodal()">Add task</div>
    </div>
  </header>
</template>

<script>
import modal from '../controlers/modal'

export default {
  data:function () {
    return {
      modal:modal
    }
  },
  methods:{
    openmodal:function () {
      this.modal.open = true;
    }
  }
}
</script>
