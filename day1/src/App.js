import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './loginsignup.css';
import Loginsignup from './loginsignup';
import Signuplogin from './signuplogin';
function App() {
  return (
    <Router>
      
      <div>
        <h2>

        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/signup">Sign Up</Link>
            </li>
          </ul>
        </nav>
        </h2>

        <Routes>
          <Route path="/login" element={<Signuplogin />} />
          <Route path="/signup" element={<Loginsignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;