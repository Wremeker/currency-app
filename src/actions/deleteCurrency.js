import { DELETE_CURRENCY } from './../constants/actionTypes';

export const deleteCurrency = (data) => {
    return {
        type: DELETE_CURRENCY,
        timestamp: data
    }
}

export default deleteCurrency;