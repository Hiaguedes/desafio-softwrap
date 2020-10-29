import axios from 'axios';

const api = axios.create({
    baseURL: `https://desafio-softwrap.firebaseio.com`,
    headers: {
        'Content-Type': 'application/json',//requisito o json
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'//sem esses headers a aplicação horas funciona horas não
    }
});

export default api;