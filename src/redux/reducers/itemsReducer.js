const initialState = {
    isLoading: false,
    items: null,
}

const itemsReducer = (state = false, action) => {
    switch(action.type) {
        case 'REQUEST_STARTED':
            return Object.assign({}, state, { isLoading: true })
        case 'REQUEST_ITEMS_SUCCESS':
            return Object.assign({}, state, { isLoading: false })
        case 'REQUEST_FAILED':
            return Object.assign({}, state, { isLoading: false })
        default:
            return state;
    }
}

export default itemsReducer;
