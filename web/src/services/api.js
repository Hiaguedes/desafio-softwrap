import axios from 'axios';

const api = axios.create({
    baseURL: `https://${process.env.REACT_APP_FIREBASE_PROJECT_ID}.firebaseio.com/`,
    headers: {
        'Content-Type': 'application/json',//requisito o json
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET'//sem esses headers a aplicação horas funciona horas não
    }
});