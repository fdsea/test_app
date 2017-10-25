import { createStore } from 'redux';
import { combineReducers } from 'redux';
import  mainReducer from './reducers/mainReducer';

const reducer = combineReducers({
	mainReducer
});

const store = createStore(reducer);

export default store;