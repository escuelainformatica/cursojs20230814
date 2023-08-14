<script setup>

import { ref, onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import productoWebService from '/src/productoWebService.js';
let productos = ref([]);
productoWebService.listar()
    .then((response) => {
        productos.value = response.data;
    })
    .catch((error) => {
        console.log(error);
        productos.value = [];
    });
function borrar(id) {
    productoWebService.borrar(id)
        .then((response) => {
            // refrescar los valores
            productoWebService.listar()
                .then((response) => {
                    productos.value = response.data;
                })
                .catch((error) => {
                    console.log(error);
                    productos.value = [];
                });
        })
        .catch((error) => {
            console.log(error);
            productos.value = [];
        });
}

</script>
<template>
    <table class="table" v-if="productos.length > 0">
        <thead>
            <tr>
                <th>id</th>
                <th>borrar</th>
                <th>name</th>
                <th>description</th>
                <th>price</th>
                <th>quantity</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="producto in productos">
                <td>
                    <RouterLink class="btn btn-primary btn-sm" :to="'/producto/actualizar/' + producto.id">Actualizar #{{ producto.id }}</RouterLink>
                </td>
                <td> <button v-on:click="borrar(producto.id)" class="btn btn-danger btn-sm">Borrar</button></td>
                <td>{{ producto.name }}</td>
                <td>{{ producto.description }}</td>
                <td>{{ producto.price }}</td>
                <td>{{ producto.quantity }}</td>
            </tr>
        </tbody>
    </table>
    <div v-else class="d-flex justify-content-center">
            <img src="/waiting-icon-gif-1.jpg"/>    
    </div>
</template>