import { configureStore } from "@reduxjs/toolkit";
import { persistStore } from 'redux-persist';
import persistedReducer from './redux-persister';

const store = configureStore({
  reducer: {
    panier: persistedReducer,
  },
});

export const persistor = persistStore(store); // Création du persistor d'état
export default store;