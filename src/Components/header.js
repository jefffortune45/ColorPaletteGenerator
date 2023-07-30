import React from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function Navbar() {
  return (
    <nav className="navbar1  navbar-expand-lg " data-bs-theme="dark" style={{ backgroundColor: '#974b2d' }}>
      <div className="container-fluid">
        <Link className="navbar-brand navbar" to="/">Colorize</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-auto" id="navbarColor01">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active navbar" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar" to="/collection">Collection</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar" to="#">Inspiration</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link navbar" to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
