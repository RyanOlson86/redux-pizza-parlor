import React from 'react';
import axios from 'axios';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import Header from '../Header/Header';

function App() {

  return (
    <div className='App'>
      <Header />
      <PizzaList />
      <CustomerInfo />
      <Checkout />
    </div>
  );
}

export default App;
