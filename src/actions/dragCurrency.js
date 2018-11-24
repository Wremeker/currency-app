import { DRAG_CURRENCY } from './../constants/actionTypes';

export const dragCurrency = (data) => {
    return {
        type: DRAG_CURRENCY,
        data: data
    }
}

export default dragCurrency;