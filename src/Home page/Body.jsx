import React from 'react'
import { Col } from 'react-bootstrap'
import './Body.css'




const Body = () => {
  return (
   <>
   {/* after the carousel */}
   <div>
<div className='row' id="center">
                  <Col className='col'>
                    {/* <i class="bi bi-house-check" style="font-size: 2rem; color: cornflowerblue;"></i> */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#050819" class="bi bi-people-fill" viewBox="0 0 16 16" >
                    <path d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6m-5.784 6A2.24 2.24 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.3 6.3 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1zM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5"/>
                    </svg>
                    <h3>Choose Your<br/>House Type</h3>
                    <p>Our expert team will help you find the perfect home based on your budget and needs.</p>
                  </Col>
                  <Col className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#050819" class="bi bi-house-check-fill" viewBox="0 0 16 16">
                    <path d="M8.707 1.5a1 1 0 0 0-1.414 0L.646 8.146a.5.5 0 0 0 .708.708L8 2.207l6.646 6.647a.5.5 0 0 0 .708-.708L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                    <path d="m8 3.293 4.712 4.712A4.5 4.5 0 0 0 8.758 15H3.5A1.5 1.5 0 0 1 2 13.5V9.293z"/>
                    <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m1.679-4.493-1.335 2.226a.75.75 0 0 1-1.174.144l-.774-.773a.5.5 0 0 1 .708-.707l.547.547 1.17-1.951a.5.5 0 1 1 .858.514"/>
                    </svg>
                    {/* <i class="bi bi-people" style="font-size: 2rem; color: cornflowerblue;"></i> */}
                    <h3>Book Your<br/>Property</h3>
                    <p>Sign up for a free account and book your property with ease.</p>
                  </Col>
                  <Col className='col'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="#050819" class="bi bi-graph-up-arrow" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M0 0h1v15h15v1H0zm10 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V4.9l-3.613 4.417a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61L13.445 4H10.5a.5.5 0 0 1-.5-.5"/>
                    </svg>
                    {/* <i class="bi bi-graph-up-arrow" style="font-size: 2rem; color: cornflowerblue;"></i> */}
                    <h3>Stay Connected<br/>With Us As We Grow Together</h3>
                    <p>Join our community and receive updates about new properties and services.</p>
                  </Col>

                </div>
    </div>
            {/* who we are paragraph */}
              <div id="wrap" className='row'>
              <div id="text" className='col'>
              <h3>WHY CHOOSE OOKO REAL ESTATE LTD?</h3>
              <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="rgb(237, 0, 226)" class="bi bi-buildings-fill" viewBox="0 0 16 16">
              <path d="M15 .5a.5.5 0 0 0-.724-.447l-8 4A.5.5 0 0 0 6 4.5v3.14L.342 9.526A.5.5 0 0 0 0 10v5.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V14h1v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zM2 11h1v1H2zm2 0h1v1H4zm-1 2v1H2v-1zm1 0h1v1H4zm9-10v1h-1V3zM8 5h1v1H8zm1 2v1H8V7zM8 9h1v1H8zm2 0h1v1h-1zm-1 2v1H8v-1zm1 0h1v1h-1zm3-2v1h-1V9zm-1 2h1v1h-1zm-2-4h1v1h-1zm3 0v1h-1V7zm-2-2v1h-1V5zm1 0h1v1h-1z"/>
             </svg>
             <p>
             As a company, we are pioneers in revolutionizing how individuals interact with technology and each other. We harness cutting-edge innovations to create seamless, intuitive solutions that empower our customers to achieve their goals efficiently and effectively. Our commitment to excellence is ingrained in every aspect of our operations,from product development to customer support. We foster a culture of creativity and collaboration, ensuring that each member of our team contributes their unique expertise to drive forward our mission of shaping the future of [industry or field]. By prioritizing innovation, integrity, and customer satisfaction, we continually strive to exceed expectations and set new standards in our industry.our motivation stems from the delight our clients experience when we provide them with ideal plots that fulfill their requirements.
             </p>
             </div>
             <div id="image" className='col d-none d-sm-block'>
              <img
              src="src/pexels-pixabay-276554.jpg"
               fluid
                rounded
               />
    </div>
    </div>
    
    
   </>
    
  )
}

export default Body