import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api/',
    params: {
        key: '1d25d7025fe74e7d9537f01d3fb6b4ac',
    },
});