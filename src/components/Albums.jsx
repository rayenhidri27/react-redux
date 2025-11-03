import { useState, useEffect } from "react";
import axios from "axios";

const Albums = () => {
  const [albums, setAlbums] = useState([]); // État pour stocker les albums
  const [loading, setLoading] = useState(true); // État pour indiquer le chargement
  const [error, setError] = useState(null); // État pour gérer les erreurs

  // Utilisation de useEffect pour effectuer l'appel API au montage du composant
  useEffect(() => {
    const fetchAlbums = async () => {
      try {
        // Effectuer une requête GET à l'API JSON Placeholder
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/albums"
        );
        setAlbums(response.data.slice(0, 20)); // Mettre à jour l'état avec les données récupérées
        setLoading(false); // Arrêter l'affichage de l'indicateur de chargement
      } catch (err) {
        setError("Une erreur est survenue lors de la récupération des albums.");
        setLoading(false);
      } finally {
        // bloc optionnel
      }
    };

    fetchAlbums();
  }, []);

  // Si en cours de chargement, afficher un spinner ou un message
  if (loading) {
    return <p>Chargement des albums...</p>;
  }

  // Si une erreur est survenue, afficher un message d'erreur
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="container mt-3">
      <h1>Liste des albums</h1>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Titre</th>
            <th scope="col">Prix</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {albums.map((album) => (
            <tr key={album.id}>
              <th scope="row">1</th>
              <td>{album.title}</td>
              <td>{album.id} €</td>
              <td>
                <button type="button" className="btn btn-success">
                  Ajouter au panier
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Albums;
