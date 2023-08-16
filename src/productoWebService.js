import axios from 'axios';
//const rutabase='http://topazlabs.com:8000/api/producto';
//const rutabase='http://localhost/laravel/api/producto';
//const rutabase='http://localhost/laravel/public/api/producto';
const rutabase='http://104.36.110.17/api/laravel/public/api/producto';
export default {
    leer:(idProducto) => {
        let configLeer = {
            method: 'get',
            maxBodyLength: Infinity,
            url: rutabase+'/get/' + idProducto,
            headers: {}
        };
        return axios.request(configLeer);
    },
    actualizar:(producto) => {
        let data = JSON.stringify(producto.value);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: rutabase+'/update',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios.request(config);
    },
    listar:() => {
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: rutabase,
            headers: {}
        };
        return axios.request(config);       
    },
    insertar:(producto) => {
        let data = JSON.stringify(producto.value);
        let config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: rutabase+'/insert',
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
        return axios.request(config);
    },
    borrar:(idProducto)=>{
        let config = {
            method: 'get',
            maxBodyLength: Infinity,
            url: rutabase+'/delete/'+idProducto,
            headers: { }
          };
        return axios.request(config);    
    }
}

