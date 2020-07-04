import fetch from 'cross-fetch';

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

export const requestFailed = () => {
    return {
        type: 'REQUEST_FAILED'
    }
}

export function fetchItems() {
    return async function (dispatch) {
        dispatch(requestStarted)

        const response = await fetch(`${process.env.REACT_APP_API_ENDPOINT}/items`);
        const json = await response.json();
        return dispatch(requestItemsSuccess(json));
    }
}
