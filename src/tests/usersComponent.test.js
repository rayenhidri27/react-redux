import { render, screen } from "@testing-library/react";
import axios from "axios";

import { usersMock } from "../data/users.data";
import Users from "../components/Users";

jest.mock("axios");

describe("ListeUsers component avec API", () => {
  test("affiche les utilisateurs récupérés depuis l'API", async () => {
    axios.get.mockResolvedValue({ data: usersMock });

    render(<Users />);

    expect(screen.getByText("Liste des users")).toBeInTheDocument();

    // attend que les utilisateurs soient affichés
    for (const user of usersMock) {
      expect(await screen.findByText(user.name)).toBeInTheDocument();
      expect(await screen.findByText(user.username)).toBeInTheDocument();
      expect(await screen.findByText(user.email)).toBeInTheDocument();
    }

    // Vérifie le nombre de lignes
    const rows = screen.getAllByRole("row");
    expect(rows).toHaveLength(usersMock.length + 1); // +1 pour l'entête
  });
});
