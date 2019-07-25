


import { createStore,applyMiddleware } from "redux";
//import TodoReducer from './../Reducer/reducer'
import rootReducer from '../Reducer/rootReducer';
import thunk from 'redux-thunk';

let store = createStore(
    rootReducer,
    applyMiddleware(thunk));

export default store;