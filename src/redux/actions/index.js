import axios from 'axios';

export const requestStarted = () => {
    return {
        type: 'REQUEST_STARTED'
    }
}

export const requestItemsSuccess = (json) => {
    return {
        type: 'REQUEST_ITEMS_SUCCESS',
        items: json
    }
}

export const requestFailed = (error) => {
    return {
        type: 'REQUEST_FAILED',
        error: error
    }
}

export function fetchItems(options) {
    return async function (dispatch) {
        dispatch(requestStarted())

        // TODO: Error handling
        let api_endpoint = `${process.env.REACT_APP_API_ENDPOINT}/items`
        if (options.category) {
            api_endpoint += '?category=' + options.category
        }
        axios.get(api_endpoint)
        .then(
            response => dispatch(requestItemsSuccess(response))
        )
    }
}
