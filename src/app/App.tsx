import React from 'react';
import { BrowserRouter as Router } from "react-router-dom";

import { Pages } from "../pages";

import './App.css';

function App() {
  return (
      <div className='container'>
          <div className='page-container'>
              <div className='page-content'>
                  <Router>
                    <Pages />
                  </Router>
              </div>
          </div>
      </div>
  );
}

export default App;
