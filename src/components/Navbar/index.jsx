// src/Navbar.js
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <button
          data-mdb-collapse-init
          className="navbar-toggler"
          type="button"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <Link className="navbar-brand mt-2 mt-lg-0" to="/">
            <img
              src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
              height="15"
              alt="MDB Logo"
              loading="lazy"
            />
          </Link>

          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/">Inicio</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/participantes">Participantes</Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Projects</a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <a className="text-reset me-3" href="#">
            <i className="fas fa-shopping-cart"></i>
          </a>

          {/* Bell Icon */}
          <div className="dropdown">
            <a
              data-mdb-dropdown-init
              className="text-reset me-3 dropdown-toggle hidden-arrow"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              aria-expanded="false"
            >
              <i className="fas fa-bell"></i>
              <span className="badge rounded-pill badge-notification bg-danger">1</span>
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li><a className="dropdown-item" href="#">Some news</a></li>
              <li><a className="dropdown-item" href="#">Another news</a></li>
              <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
          </div>

          {/* Avatar */}
          <div className="dropdown">
            <a
              data-mdb-dropdown-init
              className="dropdown-toggle d-flex align-items-center hidden-arrow"
              href="#"
              id="navbarDropdownMenuAvatar"
              role="button"
              aria-expanded="false"
            >
              <img
                src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                className="rounded-circle"
                height="25"
                alt="User Avatar"
                loading="lazy"
              />
            </a>
            <ul
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="navbarDropdownMenuAvatar"
            >
              <li><a className="dropdown-item" href="#">My profile</a></li>
              <li><a className="dropdown-item" href="#">Settings</a></li>
              <li><a className="dropdown-item" href="#">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
