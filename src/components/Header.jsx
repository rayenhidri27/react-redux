import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const Header = () => {
  const listePanier = useSelector((state) => state.panier.produits);
  return (
    <nav className="navbar navbar-expand-lg bg-info">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          React Redux
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link me-2" aria-current="page" to="/">
                Accueil
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/albums"
              >
                Albums
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/users"
              >
                Users
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/about"
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/contact"
              >
                Contact
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/contact-with-zod"
              >
                Contact with Zod
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link me-2"
                aria-current="page"
                to="/panier"
              >
                <button type="button" class="btn btn-primary">
                  Panier <span class="badge text-bg-danger">{listePanier.length}</span>
                </button>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
