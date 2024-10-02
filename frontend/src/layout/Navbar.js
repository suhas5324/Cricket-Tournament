
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('auth');
    navigate('/login');
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Cricket Tournament</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item-brown">
                <Link className='nav-link' to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/match">Match</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/team">Team</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/points">Points Table</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/player">Player</Link>
              </li>
              <li className="nav-item">
                <Link className='nav-link' to="/result">Result</Link>
              </li>
            </ul>
            <button className="btn btn-outline-danger" onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </nav>

    </div>
  );
}
