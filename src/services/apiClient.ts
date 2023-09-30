import axios, { CanceledError } from "axios";


export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '5990c6ab7e194de58295e9de15a53959',
    },
});

