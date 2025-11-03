import { useSelector, useDispatch } from "react-redux";
import { supprimerProduit } from "../redux/panierSlice";

const Panier = () => {
  const listePanier = useSelector((state) => state.panier.produits);
  const total = useSelector((state) => state.panier.total);
  const dispatch = useDispatch();
  if (listePanier.length === 0) {
    return <h2>Le panier est vide</h2>;
  }

  return (
    <div>
      <h1>Panier</h1>
      <ul class="list-group">
        {listePanier.map((produit, index) => (
          <li key={index} className="list-group-item">
            {produit.title} - {produit.id} €
            <button type="button" class="btn btn-danger btn-sm ms-5" onClick={() => dispatch( supprimerProduit(produit.id))}>
              X
            </button>
          </li>
        ))}
      </ul>
      <h3>Total : {total}</h3>
    </div>
  );
};

export default Panier;
