import {
    INIT_CURRENCY,
    DELETE_CURRENCY,
    ADD_CURRENCY,
    DRAG_CURRENCY,
    ERROR_CURRENCY,
    UPDATE_CURRENCY
} from './../constants/actionTypes';

const initialState = {
    currency: []
};

export const persistedReducer = (state = initialState, action) => {
    if (action.type === INIT_CURRENCY) {
        return {
            ...state,
            EUR: action.data
        }
    }

    if (action.type === DRAG_CURRENCY) {
        return {
            ...state,
            currency: action.data
        }
    }

    if (action.type === DELETE_CURRENCY) {
        return {
            ...state,
            currency: state.currency.filter(item => item.timestamp !== action.timestamp)
        }
    }
    
    if (action.type === ADD_CURRENCY) {
        return {
            ...state,
            currency: state.currency.concat({
                data: action.data,
                name: action.name,
                timestamp: action.timestamp
            })
        }
    }

    if (action.type === UPDATE_CURRENCY) {
        return {
            ...state,
            currency: state.currency.map(item => {
                if (action.timestamp === item.timestamp) {
                    item.data = action.data;
                }
                return item;
            })
        }
    }
    
    if (action.type === ERROR_CURRENCY) {
        return {
            ...state,
            ...action,
        }
    }
    return state;
}

export default persistedReducer;