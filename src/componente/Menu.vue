<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
      <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">Navbar</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/about">About</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/producto/listar">Listar Producto</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/producto/insertar">Insertar Producto</RouterLink>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>