import React from 'react'
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import './counter.css'
import { Col } from 'react-bootstrap'
import { useState } from 'react'

const Counter = () => {
    const [counteron, setcounteron] = useState(false)
  return (
    <ScrollTrigger onEnter={()=>setcounteron(true)} onExit={()=>setcounteron(false)}>
        <div id="countup" className='row'>
         <Col md={3} className='col mx-2 float-start'>
            <h2>
              Projects<br/>
             {counteron &&  <CountUp start={0} end={200} duration={2} delay={0}/> }
             +
            </h2>
         </Col>
         <Col className='col mx-2'>
            <h2>
              Happy Clients<br/>
             {counteron &&  <CountUp start={0} end={2000} duration={2} delay={0}/> }
             +
            </h2>
         </Col>
         <Col className='col mx-2 float-end'>
            <h2>
               Awards<br/>
             {counteron &&  <CountUp start={0} end={50} duration={2} delay={0}/> }
             +
            </h2>
         </Col>
        
         </div>

    </ScrollTrigger>
    
  )
}

export default Counter
