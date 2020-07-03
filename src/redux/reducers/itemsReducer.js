const itemsReducer = (state = 0, action) => {
    switch(action.type) {
        case 'FETCH':
            return state + 1;
        default:
            return state;
    }
}

export default itemsReducer;
