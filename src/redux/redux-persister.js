import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"; // Utilise le localStorage comme mécanisme de stockage
import panierSlice from "./panierSlice";

const persistConfig = {
  key: "root", // Clé unique pour l'ensemble du store
  storage, // Indique la méthode de stockage (localStorage ici)
};

// Application de redux-persist sur ton slice "panier"
const persistedReducer = persistReducer(persistConfig, panierSlice);

export default persistedReducer;