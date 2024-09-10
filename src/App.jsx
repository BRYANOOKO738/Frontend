import React from 'react'
import './App.css'
// import Signup from './assets/Credentials/Signup1'
// import Login from './assets/Credentials/Login'
// import Home from './Home page/Home'
// import Header from './Home page/Header'
import Hero from './Home page/Hero'
import Body from './Home page/Body'
// import Card1 from './Home page/Card1'
import Counter from './Home page/counter'
import Question from './Home page/Question'
import Contact from './Home page/Contact'
import Patners from './Home page/Patners'
import Footer from './Home page/Footer'
// import CardSlider from './Home page/Residency'

const App = () => {
  return (
    <>
    <div id="app">
      {/* <Signup/> */}
      {/* <Login/> */}
      {/* <Home/> */}
      
  
      <main id="main">
        <Hero/>
        <Body/>
          {/* <Card1 /> */}
          
          <Counter />
          <Question />
          <Contact />
          <Patners />
          {/* <CardSlider/> */}
          <Footer/>
      </main>
     
      </div>
      
    </>
  )
}

export default App
