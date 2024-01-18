import React from 'react';
import axios from 'axios';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import './App.css';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  
      <img src='images/pizza_photo.png' />
      <p>Pizza is great.</p>
      <CustomerInfo />
  
    </div>
  );
}

export default App;
