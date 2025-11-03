import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout"; // Import du layout principal
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Users from "./components/Users";
import User from "./components/User";
import Albums from "./components/Albums";
import Panier from "./components/Panier";

// Définir les routes avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Utilisation de RootLayout comme parent
    children: [
      { index: true, element: <Accueil /> },
      { path: "albums", element: <Albums /> },
      { path: "panier", element: <Panier /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "users", element: <Users /> },
      { path: "users/:id", element: <User /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
