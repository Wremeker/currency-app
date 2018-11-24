import { INIT_CURRENCY, ERROR_CURRENCY } from './../constants/actionTypes';
import API_KEY from './../constants/apiKey';
import axios from 'axios';

export const initCurrency = () => dispatch => {
    axios.get(`http://www.apilayer.net/api/live?access_key=${API_KEY}`).then(res => {
        dispatch({
            type: INIT_CURRENCY,
            data: res.data,
            error: false
        });
    }).catch(error => {
        dispatch({
            type: ERROR_CURRENCY,
            data: error,
            error: true
        })
    });
}

export default initCurrency;