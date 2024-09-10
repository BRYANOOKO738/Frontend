import React, { useState } from 'react';
import './Signup2.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import { Link,useNavigate } from 'react-router-dom';

const Signup = () => {
  const [Firstname, setFirstname] = useState("");
  const [Lastname, setLastname] = useState("");
  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [ShowPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("http://localhost:8080/routes/Users/register", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ Firstname, Lastname, email, Password }), // Corrected variable names
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        } else {
          return res.json().then(data => { throw new Error(data.error); }); // Parse JSON error message
        }
      })
      .then((data) => {
        setSuccessMessage(`Signup successful! Welcome, ${Firstname}`);
        setError('');
        navigate('/');
      })
      .catch((error) => {
        setError(error.message);
        setSuccessMessage('');
      });
  };

  return (
    <>
      <div className='wrap' style={{ marginTop: "25px" }}>
        <div className='d-none d-md-block left mt-7p'>
          <Carousel slide={false}>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3>First Slide - Some Text Here</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3>Second Slide - More Text Here</h3>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className="justify-content-center align-items-center txt">
                <h3>Third Slide - Even More Text Here</h3>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>

        <div className="right">
          <div className='container1'>
            <h1 className='head' variant="primary">Sign Up</h1>
            <p>Please fill in this form to create an account.</p>
          </div>

          <Form expand='lg' onSubmit={handleSubmit}>
            <Row>
              <Col>
                <Form.Group className="mb-3 " controlId="formBasicFirstname">
                  <Form.Label>First Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter First Name" required value={Firstname} onChange={(e) => setFirstname(e.target.value)} />
                </Form.Group>
              </Col>
              <Col>
                <Form.Group className="mb-3 " controlId="formBasicSecond Name">
                  <Form.Label>Second Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Second Name" required value={Lastname} onChange={(e) => setLastname(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" required value={email} onChange={(e) => setemail(e.target.value)} />
            </Form.Group>

            <Row>
              <Col>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type={ShowPassword ? "text" : "password"} placeholder="Password" required value={Password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Show password" variant="outline-secondary" onChange={() => setShowPassword(!ShowPassword)} />
            </Form.Group>
            <Link to={"/Login"} style={{ marginBottom: "7px", textDecoration: "none" }}>Already have an account? Sign in here</Link>
            <div className='d-grid'>
              <Button variant="primary" className='d-grid' type="submit">
                Create account
              </Button>
            </div>
          </Form>
          {error && <p style={{ color: 'red' }}>{error}</p>}
          {successMessage && <p style={{ color: 'green' }}>{successMessage}</p>}
        </div>
      </div>
    </>
  );
};

export default Signup;
