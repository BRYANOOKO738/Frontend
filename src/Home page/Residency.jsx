import React, { useState, useEffect } from 'react'; // Import useState and useEffect
import './Residency.css';
import { Link } from 'react-router-dom';

const Residency = ({products1}) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:8080/routes/Residency/getresidency');

        console.log('Response status:', response.status);

        if (!response.ok) {
          throw new Error(`Network response was not ok: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }
//  const visibleProducts = products.slice(currentIndex, currentIndex + itemsPerPage);
  return (
    <div className="mt-4">
      <h1>Products</h1>
      <div className="container">
        <div className="row">
          {products.length > 0 ? (
            products.map((product) => (
              <div className="col-md-3 mb-4" key={product.id}>
                <div className="card border-3 flex-fill card-hover">
                  <img
                    src={product.image}
                    alt={product.title}
                    style={{ height: '200px' }}
                    className="img-fluid mx-auto"
                  />
                  <h5>{product.title.substring(0, 12)}</h5>
                  <p style={{ color: 'red' }}>
                    <strong>${product.price}</strong>
                  </p>
                  <div className="">
                    {/* Ensure the `to` prop is correct */}
                    <Link to={`/Property/${product.id}`} className="btn btn-primary" key={product.id}>
                      View Residence
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="col-12">
              <p>No Residence found</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Residency;


