import axios from 'axios';

export const itemsRequestStarted = () => {
    return { type: 'ITEMS_REQUEST_STARTED' }
}

export const itemsRequestSuccess = (json) => {
    return { type: 'ITEMS_REQUEST_SUCCESS', response: json }
}

export const itemsRequestFailed = (error) => {
    return { type: 'ITEMS_REQUEST_FAILED', error: error }
}

export const categoriesRequestStarted = () => {
    return { type: 'CATEGORIES_REQUEST_STARTED' }
}

export const categoriesRequestSuccess = (json) => {
    return { type: 'CATEGORIES_REQUEST_SUCCESS', response: json }
}

export const categoriesRequestFailed = (error) => {
    return { type: 'CATEGORIES_REQUEST_FAILED', error: error }
}

export function fetchCategories(options) {
    return async function (dispatch) {
        dispatch(categoriesRequestStarted())

        let apiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}/categories`

        axios
            .get(apiEndpoint)
            .then( response => dispatch(categoriesRequestSuccess(response)) )
    }
}

export function fetchItems(options) {
    return async function (dispatch) {
        dispatch(itemsRequestStarted())

        let apiEndpoint = _prepareItemsRequest(options)

        axios
            .get(apiEndpoint)
            .then( response => dispatch(itemsRequestSuccess(response)) )
    }
}

function _prepareItemsRequest(options) {
    let apiEndpoint = `${process.env.REACT_APP_API_ENDPOINT}/items`
    let params = []
    Object.entries(options).forEach(param => {
        if (param[1] !== undefined) { params.push(`${param[0]}=${param[1]}`) }
    })
    let stringParams = params.join('&')

    if (stringParams !== '') { return `${apiEndpoint}?${stringParams}` }
    return `${apiEndpoint}`
}