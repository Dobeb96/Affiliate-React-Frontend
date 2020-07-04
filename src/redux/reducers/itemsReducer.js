import { CardActions } from "@material-ui/core"

const initialState = {
    isLoading: true,
    items: null,
    error: null,
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'REQUEST_STARTED':
            return Object.assign({}, state, { isLoading: true })
        case 'REQUEST_ITEMS_SUCCESS':
            return Object.assign({}, state, { isLoading: false, items: action.items })
        case 'REQUEST_FAILED':
            return Object.assign({}, state, { isLoading: false, error: action.error })
        default:
            return state;
    }
}

export default itemsReducer;
