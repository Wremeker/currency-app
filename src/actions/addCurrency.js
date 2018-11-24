import { ADD_CURRENCY, ERROR_CURRENCY } from './../constants/actionTypes';
import API_KEY from './../constants/apiKey';
import axios from 'axios';

export const addCurrency = (data) => dispatch => {
    axios.get(`http://data.fixer.io/api/live?access_key=${API_KEY}&currencies=${data.value}`).then(res => {
        dispatch({
            type: ADD_CURRENCY,
            data: res.data,
            name: data.value,
            timestamp: data.timestamp,
            error: false,
        });
    }).catch(error => {
        dispatch({
            type: ERROR_CURRENCY,
            data: error,
            error: true
        });
    })
}

export default addCurrency;
