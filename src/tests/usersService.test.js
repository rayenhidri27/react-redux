import axios from "axios";
import { getUsers } from "../services/users";
import { usersMock } from "../data/users.data";

// Mock complet d'Axios
jest.mock("axios");

describe("getUsers service", () => {
  afterEach(() => {
    jest.resetAllMocks(); // réinitialise les mocks après chaque test
  });

  it("retourne la liste des utilisateurs si la requête réussit", async () => {
    axios.get.mockResolvedValue({ data: usersMock });

    const result = await getUsers();
    expect(result).toEqual(usersMock);
    expect(axios.get).toHaveBeenCalledWith(
      "https://jsonplaceholder.typicode.com/users"
    );
  });

  it("retourne une erreur si la requête échoue", async () => {
    axios.get.mockRejectedValue(new Error("Network Error"));

    const result = await getUsers();
    expect(result).toEqual({ error: "Network Error" });
  });
});
