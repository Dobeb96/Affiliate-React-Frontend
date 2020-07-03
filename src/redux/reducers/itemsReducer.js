const itemsReducer = (state = {}, action) => {
    switch(action.type) {
        case 'FETCH':
            return {'TODO': 'Fetch items here'};
        default:
            return state;
    }
}

export default itemsReducer;
