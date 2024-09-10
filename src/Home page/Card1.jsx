import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import Residency from '../Home page/Residency'; // Adjust the path as needed
import './Card.css';

const Card1 = () => {
  const [products, setProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Number of items to display per slide

  // Fetch products in Card1
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/routes/Residency/getresidency');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  // Slice the products array to get the current set of items to display
  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);

  // Handle the "Next" button click
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + itemsPerPage >= products.length ? 0 : prevIndex + itemsPerPage
    );
  };

  // Handle the "Previous" button click
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - itemsPerPage < 0 ? 0 : prevIndex - itemsPerPage
    );
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center align-items-center">
        <Col xs="auto">
          <Button variant="primary" onClick={handlePrev} disabled={currentIndex === 0}>
            &#8592; Previous
          </Button>
        </Col>
        <Col xs={8}>
          {/* Pass only the visible products to Residency */}
          <Residency products1={visibleProducts} />
        </Col>
        <Col xs="auto">
          <Button variant="primary" onClick={handleNext} disabled={currentIndex + itemsPerPage >= products.length}>
            Next &#8594;
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default Card1;



