<script setup>
import { ref, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router';
import productoWebService from '/src/productoWebService.js';
const router = useRouter()
const route = useRoute()


let idProducto = route.params.id;
let alerta = ref('');
let producto = ref({
    name: "", description: "", price: 0, quantity: 0
});

productoWebService.leer(idProducto)
    .then((response) => {
        producto.value = response.data;
    })
    .catch((error) => {
        console.log(error);
    });

function enviar() {
    productoWebService.actualizar(producto)
        .then((response) => {
            producto.value = {
                name: "", description: "", price: 0, quantity: 0
            };
            router.push('/producto/listar');
        })
        .catch((error) => {
            alerta.value = error;
            console.log(error);
        });
}

</script>
<template>
    <form>
        <div class="row mb-3">
            <label for="inputEmail3" class="col-sm-2 col-form-label">Nombre</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputEmail3" v-model="producto.name">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Descripcion</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3" v-model="producto.description">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Precio</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3" v-model="producto.price">
            </div>
        </div>
        <div class="row mb-3">
            <label for="inputPassword3" class="col-sm-2 col-form-label">Cantidad</label>
            <div class="col-sm-10">
                <input type="text" class="form-control" id="inputPassword3" v-model="producto.quantity">
            </div>
        </div>

        <button type="button" class="btn btn-primary" v-on:click="enviar">Insertar</button>
    </form>
    <br>
    <div class="alert alert-danger" role="alert" v-if='alerta'>
        {{ alerta }}
    </div>
</template>