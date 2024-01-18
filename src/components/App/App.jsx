import React from 'react';
import axios from 'axios';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';

function App() {

  return (
    <div className='App'>
      <header className='App-header'>
        <h1 className='App-title'>Prime Pizza</h1>
      </header>
  


      <CustomerInfo />

      <PizzaList />

  
    </div>
  );
}

export default App;
