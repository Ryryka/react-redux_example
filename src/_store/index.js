import {createStore, applyMiddleware} from 'redux';
import thunkMiddlewate from 'redux-thunk';
import mainReducer from '../_reducers';

const enhancer = applyMiddleware(thunkMiddlewate);
const store = createStore(mainReducer, enhancer);
export default store;
