// main.jsx
import React, { useState, Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Home page/Header.jsx';
import Properties from './Pages/Properties.jsx';
import Property from './Pages/Property.jsx';
import Login from './Home page/Login.jsx';
import Signup from './Home page/Signup1.jsx';

// Main component to handle state and routing
const Main = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <Suspense fallback={<div>Loading ...</div>}>
        <React.StrictMode>
          <Routes>
            <Route 
              path="/" 
              element={<Header isLoggedIn={isLoggedIn} onLogout={handleLogout} />}
            >
              <Route exact path="/" element={<App />} />
              <Route path="/Properties" element={<Properties />} />
              <Route path="/property/:id" element={<Property />} />
            </Route>
            <Route path="/register" element={<Signup />} />
            <Route path="/Login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
          </Routes>
        </React.StrictMode>
      </Suspense>
    </Router>
  );
};

// Render the Main component
ReactDOM.createRoot(document.getElementById('root')).render(<Main />);

