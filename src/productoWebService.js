import axios from 'axios';
const rutabase='http://127.0.0.1:8000/api/producto';
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
            url: rutabase+'/',
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

