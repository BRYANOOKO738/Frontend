import React from 'react';
import './Hero.css';
import Carousel from 'react-bootstrap/Carousel';
// import Image from 'react-bootstrap/Image';
import {Row, Col} from 'react-bootstrap'
const Hero = () => {
  return (
    <section id="home" className='hero-block'>
<Carousel slide={false}>
<Carousel.Item>
  <div>
  <img
            className="d-block w-100 fluid"
            src="src/house1.jpg"
            alt="First slide"
           fluid          
          />
              <Carousel.Caption>
              <div className=" justify-content-center align-items-center txt">
                <h1 className='front'><strong>Mordern House<br/>Make Life Better</strong></h1>
                <div class="input-group mb-3 " id="hello">
    <input type="text" class="form-control" placeholder="Property Type" />
  <input type="text" class="form-control" placeholder="Location" />
  <input type="number" class="form-control" placeholder="Price Limit" />
  <button class="btn btn-primary" type="submit">Search</button>
</div>
                
                      <h3 id='text'><strong>Find Perfect<br/> House From Your Area</strong></h3>
                      <p id="textend"><strong>Start your journey towards homeownership with personalized<br/> service and unmatched expertise.</strong></p>
                      
                  </div>
          </Carousel.Caption>
  </div>
           
              
                  
              </Carousel.Item>
              <Carousel.Item>
              
              <img
            className="d-block w-100 fluid"
            src="src/house2.jpg"
            alt="First slide"
           fluid          
          />
              <Carousel.Caption>
             <div className=" justify-content-center align-items-center txt">
                <h1 className='front'><strong>Mordern House<br/>Make Life Better</strong></h1>
                <div class="input-group mb-3 " id="hello">
                <input type="text" class="form-control" placeholder="Property Type" />
                <input type="text" class="form-control" placeholder="Location" />
                <input type="number" class="form-control" placeholder="Price Limit" />
                <button class="btn btn-primary" type="submit">Search</button>
              </div>
                
              <h3 id='text'><strong>Find Perfect<br/> House From Your Area</strong></h3>
              <p id="textend1"><strong>Start your journey towards homeownership with personalized<br/> service and unmatched expertise.</strong></p>
                      
                  </div>
          </Carousel.Caption>
                  
              </Carousel.Item>
           
              <Carousel.Item>
              
              <img
            className="d-block w-100 fluid"
            src="src/pexels-naimbic-2030037.jpg"
            alt="First slide"
           fluid          
          />
              <Carousel.Caption>
              <div className=" justify-content-center align-items-center txt">
              <h1 className='front'><strong>Mordern House<br/>Make Life Better</strong></h1>
                <div class="input-group mb-3 " id="hello">
    <input type="text" class="form-control" placeholder="Property Type" />
  <input type="text" class="form-control" placeholder="Location" />
  <input type="number" class="form-control" placeholder="Price Limit" />
  <button class="btn btn-primary" type="submit">Search</button>
</div>
                
                      <h3 id='text'><strong>Find Perfect<br/> House From Your Area</strong></h3>
                      <p id="textend2"><strong>Start your journey towards homeownership with personalized<br/> service and unmatched expertise.</strong></p>
                      
                  </div>
          </Carousel.Caption>
                  
              </Carousel.Item>
        </Carousel>
    </section>
  )
}

export default Hero