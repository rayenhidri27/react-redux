import { useState, useEffect } from "react";
import { getUsers } from "../services/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, seterrorMessage] = useState("");

  useEffect(() => {
    getUsers().then((data) => {
      if (data.error) {
        console.error("Erreur :", data);
        seterrorMessage(data.error);
      } else {
        setUsers(data);
      }
    });
  }, []);

  if (errorMessage) {
    return <div>erreur lors du chargement de la liste : {errorMessage}</div>;
  }

  return (
    <div className="container mt-3">
      <h1>Liste des users</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Nom</th>
            <th scope="col">Username</th>
            <th scope="col">Mail</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <th scope="row">{user.id}</th>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Users;
