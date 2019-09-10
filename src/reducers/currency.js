const currency = (state = {currency_from: '', currency_to: ''}, action) => {
    switch (action.type) {
        case 'ADD_CURRENCY_FROM':
            return {
                ...state,
                currency_from: action.payload
            } 
        case 'ADD_CURRENCY_TO':
            return {
                ...state,
                currency_to: action.payload
            }
        default:
            return state;
    }
}

export default currency;