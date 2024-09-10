import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import './Header.css';
import { Outlet, Link } from 'react-router-dom';
import AddProperty from './AddPropertyModal';
// import AddPropertyModal from './AddPropertyModal';

const Header = ({ isLoggedIn, onLogout }) => {
  const [modalOpen, setModalOpen] = useState(false); // Add state for modal



  return (
    <div>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark" fixed="top">
        <Container>
          <Navbar.Brand href="#home">
            <img
              src="src/logo-color.png" // Replace with the correct path to your logo image
              style={{ marginRight: "10px" }}
              className="d-inline-block align-top"
              alt="Ooko Estates Logo"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Link
                to="/"
                style={{
                  color: "white",
                  marginRight: "8px",
                  textDecoration: "none",
                  position: "relative",
                  marginTop: "8px",
                }}
              >
                <strong>Home</strong>
              </Link>
              <Link
                onClick={() => setModalOpen(true)}
                style={{
                  textDecoration: "none",
                  position: "relative",
                  color: "white",
                  marginRight: "4px",
                  marginTop: "8px",
                }}
              >
                Add Property
              </Link>
              <Link
                to="/Properties"
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginLeft: "6px",
                  marginTop: "8px",
                }}
              >
                PROPERTIES
              </Link>
              {/* <div onClick={handleAddPropertyClick}>Add Property</div>
              <AddPropertyModal opened={modalOpened} setOpened={setModalOpened} /> */}
              
              {!isLoggedIn ? (
                <Link to="/Login" className="btn btn-success">
                  Login
                </Link>
              ) : (
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="profileDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Profile
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="profileDropdown"
                  >
                    <li>
                      <Link className="dropdown-item" to="/profile">
                        My Profile
                      </Link>
                    </li>

                    <li>
                      <button className="dropdown-item" onClick={onLogout}>
                        Logout
                      </button>
                    </li>
                  </ul>
                </li>
              )}
              <NavDropdown title="Services" id="basic-nav-dropdown">
                <Link
                  to="/Properties"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Buy
                </Link>
                <hr/>
                <Link
                  
                  to="/Properties"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sell
                </Link>
                <hr/>
                <Link
                 
                  to="/Properties"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Rent
                </Link>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <AddProperty open={modalOpen} onClose={() => setModalOpen(false)} />
      <Outlet />
    </div>
  );
};

export default Header;
