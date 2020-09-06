import { itemsReducer, categoriesReducer } from './requestReducer';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    itemsReducer,
    categoriesReducer,
})

export default allReducers;
