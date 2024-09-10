// Login.js
import React, { useState } from 'react';
import './Login.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Carousel from 'react-bootstrap/Carousel';
import { Link, useNavigate } from 'react-router-dom';  // Import useNavigate


const Login = ({ setIsLoggedIn }) => {
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [validated, setValidated] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleShowPasswordChange = () => setShowPassword(!ShowPassword);

  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent default form submission behavior
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);

    fetch("http://localhost:8080/routes/Users/Login", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ email, Password }), 
    })
      .then((res) => {
        if (!res.ok) throw new Error('Invalid credentials');
        return res.json();
      })
      .then((data) => {
        setSuccessMessage(`Login successful! Welcome, ${email}`);
        setError('');
        setIsLoggedIn(true); // Update the login state
        navigate('/'); // Redirect to the home page after successful login
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage('');
        const alert = document.getElementById('error-alert');
        alert.style.display = 'block'; // Show the alert

        // Optional: Hide the alert automatically after 3 seconds
        setTimeout(() => {
          alert.style.display = 'none';
        }, 3000);
      });
  };

  return (
    <>
      <div className="wrap">
        <div className="d-none d-md-block left">
          <Carousel slide={false}>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3 className="justitify-content-center">OOKO HOMES</h3>
                <img
                  className="d-block w-100 fluid h-100"
                  src="src/house1.jpg"
                  alt="First slide"
                  fluid
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3 className="justify-content-center">OOKO HOMES</h3>
                <img
                  className="d-block w-100 fluid h-100"
                  src="src/house1.jpg"
                  alt="First slide"
                  fluid
                />
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3 className='justify-content-center align-items-center'>OOKO HOMES</h3>
                <img
                  className="d-block w-100 img-fluid h-100"
                  src="src/house2.jpg"
                  alt="First slide"
                />
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="right">
          <div className="container1">
            <h1 className="head" variant="primary">
              Login
            </h1>
            <h4>
              Welcome Back To <strong>Ooko Estates</strong>
            </h4>
          </div>

          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                <strong>Email Address</strong>
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>
                <strong>Password</strong>
              </Form.Label>
              <Form.Control
                type={ShowPassword ? "text" : "password"}
                placeholder="Password"
                required
                value={Password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Form.Control.Feedback type="invalid">
                Please provide a password.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check
                type="checkbox"
                label="Show Password"
                variant="outline-secondary"
                onChange={handleShowPasswordChange}
              />
            </Form.Group>

            <Link to={"/register"} style={{ textDecoration: "none" }}>
              Don't have an account? Create here
            </Link>

            <div className="d-grid">
              <Button variant="primary" type="submit">
                Sign In
              </Button>
              <p className="password">
                <a href="#">Forgot Password?</a>
              </p>
            </div>
          </Form>
          <div
            className="alert alert-danger alert-dismissible fade show"
            id="error-alert"
            role="alert"
            style={{ display: "none" }}
          >
            Invalid credentials
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="alert"
              aria-label="Close"
            ></button>
          </div>
          {error && <p style={{ color: "red" }}>{error}</p>}
          {successMessage && <p style={{ color: "green" }}>{successMessage}</p>}
        </div>
      </div>
    </>
  );
}

export default Login;
