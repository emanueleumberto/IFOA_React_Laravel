import { createStore } from 'redux'
import storeReducer from '../reducers';

const initialState = {
    favourites: []
};

// createStore(storeReducer, initialState?, middleware?)
export const store = createStore(storeReducer, initialState)