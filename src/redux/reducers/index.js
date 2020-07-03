import itemsReducer from './itemsReducer';
import { combineReducers } from 'redux'

const allReducers = combineReducers({
    itemsReducer,
})

export default allReducers;
