import React from 'react';
import { BrowserRouter } from 'react-router-dom'
import Header from './router/route'
import './App.css';


const App = () => (
  <BrowserRouter>
    <div className='container'>
      <h2>Contact Us :</h2>
      <Header />
    </div>
  </BrowserRouter>
)

export default App;
