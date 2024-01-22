/* import { createStore } from 'redux'
import storeReducer from '../reducers'; */

/* const initialState = {
    jobSearch: []
    favourites: []
}; */

/* const bigReducers = combineReducer({
    jobSearch: jobReducer
    favourites: storeReducer
}) */

// createStore(storeReducer, initialState?, middleware?)
//export const store = createStore(bigReducers, initialState)

import { configureStore } from "@reduxjs/toolkit";
import favouritesReducer from "../slice/favouritesSlice";
import jobSearchReducer from "../slice/jobSlice";
import storage from "redux-persist/lib/storage"; // localstorage
//import sessionStorage from "redux-persist/lib/storage/session"; // sessionStorage
import { persistReducer, persistStore } from "redux-persist";
import { combineReducers } from "redux";
import { encryptTransform } from 'redux-persist-transform-encrypt';

const rootPersistConfig = {
  key: "root", // inserisci "root" per salvare l'intero store storage,
  storage, // su che storage voglio salvare i dati
  // sessionStorage
  // Codificare lo storage
   transforms: [
    encryptTransform({
      secretKey: 'my-super-secret-key',
      onError: function (error) {
        console.log(error)
      },
    })]
};

// Combinare più reducers
const rootReducer = combineReducers({
  jobSearch: jobSearchReducer,
  favourites: favouritesReducer,
});

// Applico il persist ai miei reducers
const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  /* reducer: {
        favourites: favouritesReducer,
        jobSearch: jobSearchReducer
    } */
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

