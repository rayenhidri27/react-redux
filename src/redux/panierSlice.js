import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  produits: [],
  total: 0,
};

const panierSlice = createSlice({
  name: "panier",
  initialState,
  reducers: {
    ajouterProduit: (state, action) => {
      state.produits.push(action.payload);
      // je prends l'id comme prix : simulation
      state.total += action.payload.id;
    },
    supprimerProduit: (state, action) => {
      state.produits = state.produits.filter(
        (produit) => produit.id !== action.payload
      );
      // je prends l'id comme prix : simulation
      state.total -= action.payload;
    },
  },
});

export const { ajouterProduit, supprimerProduit } = panierSlice.actions;
export default panierSlice.reducer;
