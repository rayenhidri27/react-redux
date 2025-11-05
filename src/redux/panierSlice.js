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
    viderPanier: (state) => {
      state.produits = []; // Vider le panier
      state.total = 0;     // Remettre le total à 0
    }
  },
});

export const { ajouterProduit, supprimerProduit, viderPanier } = panierSlice.actions;
export default panierSlice.reducer;
