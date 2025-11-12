import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return response.data; // retourne la liste des users
  } catch (error) {
    return { error: error.message || "Erreur inconnue" };
  }
};
