const initialState = {
    isLoading: true,
    response: {data: {items: []}},
    error: null,
}

const itemsReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'ITEMS_REQUEST_STARTED':
            return Object.assign({}, state, { isLoading: true })
        case 'ITEMS_REQUEST_SUCCESS':
            if (!action.appendItems) { state = initialState }
            let appendItems = state.response.data.items.concat(action.response.data.items)
            action.response.data.items = appendItems
            return Object.assign({}, state, { isLoading: false, response: action.response })
        case 'ITEMS_REQUEST_FAILED':
            return Object.assign({}, state, { isLoading: false, error: action.error })
        default:
            return state;
    }
}

const categoriesReducer = (state = initialState, action) => {
    switch(action.type) {
        case 'CATEGORIES_REQUEST_STARTED':
            return Object.assign({}, state, { isLoading: true })
        case 'CATEGORIES_REQUEST_SUCCESS':
            return Object.assign({}, state, { isLoading: false, response: action.response })
        case 'CATEGORIES_REQUEST_FAILED':
            return Object.assign({}, state, { isLoading: false, error: action.error })
        default:
            return state;
    }
}

export { itemsReducer, categoriesReducer };
