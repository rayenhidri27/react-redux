import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./RootLayout"; // Import du layout principal
import Accueil from "./pages/Accueil";
import Contact from "./pages/Contact";  
import About from "./pages/About";
import Users from "./components/Users";
import User from "./components/User";



// Définir les routes avec createBrowserRouter
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />, // Utilisation de RootLayout comme parent
    children: [
      { index: true, element: <Accueil /> }, // Route d'accueil par défaut
      { path: "about", element: <About /> }, // Route À propos
      { path: "contact", element: <Contact /> }, // Route Contact
      { path: "users", element: <Users /> }, // Route Contact
      { path: "users/:id", element: <User /> }, // Route Contact
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;