// src/store/index.js
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from '../reducers'; // Adjust path if necessary

const store = createStore(dataReducer, applyMiddleware(thunk));

export default store;

