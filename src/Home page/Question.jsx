import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import './Question.css'



const Question = () => {
  return (
    <div className='ber'>
          <div className='justify'>
              <h1 >Frequently Asked Questions About Real Estate.</h1>
          </div>
      <Accordion>
       <Accordion.Item eventKey="0">
        <Accordion.Header>WHAT IS INTESTATE SUCCESION?</Accordion.Header>
        <Accordion.Body>
          This is when there is no will left by the deceased
                      (intestate). In case the deceased left one surviving spouse and a
                      child or children, the surviving spouse shall be entitled to:- •
                      The personal and household effects of the deceased • The intestate
                      property but cannot sell this intestate property as the spouse is
                      holding it on behalf of the children. If the spouse remarries,
                      he/she loses his/her entitlement to the intestate property.
                      Where the deceased has left a surviving child or children but no spouse,
                      the intestate property will be transferred to the surviving child or divided equally among the
                      surviving children. Where the deceased left no surviving spouse or children,
                      the intestate shall be transferred in this order of priority: • Father; or if dead,
                      • Mother; or if dead • Brothers and sisters, and any child or children of deceased brothers and sisters,
                      in equal shares; or if none • Half -brothers and half sisters, and any child or children of deceased half-brothers and half-sisters,
                      in equal shares; or if none • Distant relatives up to the sixth degree in equal shares. If the deceased
                      is not survived by any of the above then the intestate property estate shall be taken up by the state                      
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>WHAT IS THE PAYMENT PLAN</Accordion.Header>
        <Accordion.Body>
                      Discover our flexible payment plan designed to make owning your dream home easier than ever.
                      Start with a manageable down payment and enjoy the convenience of structured installment payments
                      over a tailored timeframe. Benefit from competitive interest rates that ensure predictability and
                      transparency throughout your home-buying journey. Our customer-centric approach includes options for
                      payment flexibility and robust support, ensuring your peace of mind every step of the way. Experience
                      clarity with clear terms and conditions, backed by our commitment to compliance with local laws. Your path
                      to homeownership begins here with a payment plan designed with your needs in mind.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="2">
        <Accordion.Header>WHAT IS TESTATE SUCCESION?</Accordion.Header>
        <Accordion.Body>
                      Testate succession is where the deceased leaves a written or oral
                      will. It is important to note that the deceased must have had the capacity
                      (sound mind and off age) to make the will at the time of making the will.
                      In other words, the deceased must have had the knowledge and approved the
                      contents of the will.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="3">
        <Accordion.Header>Is THERE A POSSIBILITY TO RENEGOTIATE TERMS IF MY FINANCIAL SITUATION CHANGES?</Accordion.Header>
        <Accordion.Body>
                      Yes, we understand that circumstances can change
                      . If your financial situation shifts, we're here to help.
                      Contact our team to discuss possible adjustments to your payment plan,
                      ensuring it continues to meet your needs and financial goals
        </Accordion.Body>
      </Accordion.Item>
      </Accordion>    
    </div>
  )
}

export default Question