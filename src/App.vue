<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Menu from './componente/Menu.vue';
</script>

<template>
  <Menu/>
  <div class="container-fluid">
    <div class="card">
      <div class="card-body">
        <RouterView />
      </div>
    </div>
  </div>
</template>
