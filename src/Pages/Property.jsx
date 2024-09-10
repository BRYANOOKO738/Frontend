import React, { useState, useEffect } from 'react';
import './Property.css';
import { useParams } from 'react-router-dom';
import Footer from '../Home page/Footer';
import Map from '../Home page/Map';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Property = () => {
  const { id } = useParams(); // Get the 'id' from the URL parameter
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const notify = () => toast("Visit booked!");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(
          `http://localhost:8080/routes/Residency/${id}`
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (Array.isArray(data) && data.length > 0) {
          setProduct(data[0]);
        } else if (typeof data === "object" && data !== null) {
          setProduct(data);
        } else {
          throw new Error("No product found or invalid data format");
        }
      } catch (error) {
        console.error("There was a problem with the fetch operation:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]); // Dependency on 'id' to refetch when it changes

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div style={{ backgroundColor: "white", marginTop: "55px" }}>
      <div className="mx-0 mx-lg-5">
        {product ? (
          <>
            <div className="mx-15">
              <img
                src={product.image}
                alt={product.title}
                className="justify-content-center align-items-center"
                style={{
                  height: "350px",
                  width: "100%",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: "7px",
                }}
              />
            </div>
            <hr />
            <div className="mt-10 row">
              <div className="my-3 mx-4 col-md">
                <div>
                  <div className="d-flex ">
                    <h3 className="float-start m-4 text-danger">
                      <strong>{product.title}</strong>
                    </h3>
                    <h3 className="float-end m-4">
                      <strong>Price :</strong>
                      <strong style={{ color: "orange" }}>
                        $ {product.price}
                      </strong>
                    </h3>
                  </div>
                  <div className="d-flex my-4">
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="blue"
                        class="bi bi-shower"
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 1a4 4 0 0 0-4 4v2.063a2.001 2.001 0 0 0-.445 3.372.5.5 0 0 0 .723-.447v-3.011a.5.5 0 1 0-.723-.447 3.001 3.001 0 1 1 4.713 2.895v.94a3.001 3.001 0 1 1 4.565 0v3.57a.5.5 0 0 0 1 0V9.435a4.001 4.001 0 0 0-4.073-4.953L8 4.5V1a3.987 3.987 0 0 0-1-.708V4.5h2V1a4 4 0 0 0-1-.708v3.7l-.937.037A4.002 4.002 0 0 0 8 1Zm-5 6.5v3.998A1 1 0 1 0 3 11.5V7.5a1 1 0 0 0-1 1v-1.5Zm10.72 6.904c-.398.555-.9 1.043-1.52 1.464-.61.414-1.364.711-2.248.732a1.998 1.998 0 0 0-1.377.554 1.993 1.993 0 0 0-.451.982h6.046a1.993 1.993 0 0 0-.451-.982 1.998 1.998 0 0 0-1.377-.554c-.884-.021-1.637-.318-2.248-.732-.62-.421-1.122-.909-1.52-1.464Z" />
                      </svg>
                      <h5>
                        {product.facilities.bathrooms}{" "}
                        <strong>Bathrooms</strong>
                      </h5>
                    </div>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="blue"
                        class="bi bi-bed"
                        viewBox="0 0 16 16"
                      >
                        <path d="M2 1a1 1 0 0 0-1 1v9a.5.5 0 0 0 1 0v-2h12v2a.5.5 0 0 0 1 0V4a3 3 0 0 0-3-3H2Zm1 5V3h7a2 2 0 0 1 2 2v1H3Z" />
                      </svg>
                      <h5>
                        {product.facilities.bedrooms} <strong>Bedrooms</strong>
                      </h5>
                    </div>
                    <div className="mx-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        fill="blue"
                        class="bi bi-p-circle-fill"
                        viewBox="0 0 16 16"
                      >
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0M5.5 4.002V12h1.283V9.164h1.668C10.033 9.164 11 8.08 11 6.586c0-1.482-.955-2.584-2.538-2.584zm2.77 4.072c.893 0 1.419-.545 1.419-1.488s-.526-1.482-1.42-1.482H6.778v2.97z" />
                      </svg>
                      <h5>
                        <strong>{product.facilities.parking} </strong>
                        <strong>Parking</strong>
                      </h5>
                    </div>
                  </div>
                  <p>
                    <strong>{product.description}</strong>
                  </p>
                  <div className="d-flex">
                    <p>
                      <strong>
                        Address
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="25"
                          height="25"
                          fill="blue"
                          class="bi bi-geo-alt-fill"
                          viewBox="0 0 16 16"
                        >
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10m0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6" />
                        </svg>
                      </strong>{" "}
                      {product.address},
                    </p>
                    <p>
                      <strong> {product.city},</strong>
                    </p>
                    <p>
                      <strong> {product.country}</strong>
                    </p>
                  </div>
                </div>
                <button
                  className="btn btn-primary flex-end"
                  style={{ justifyContent: "flex-end" }}
                  onClick={notify}
                >
                  Book Visit
                </button>
                <ToastContainer />
              </div>
              <div className="col-md mt-3">
                <h3 style={{ color: "blue" }}>
                  <strong>Location on Map</strong>
                </h3>
                <Map
                  address={product.address}
                  city={product.city}
                  country={product.country}
                />
              </div>
            </div>
          </>
        ) : (
          <p>No Residence found</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Property;
