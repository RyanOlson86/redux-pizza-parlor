import React from 'react';
import axios from 'axios';
import Checkout from '../Checkout/Checkout';
import CustomerInfo from '../CustomerInfo/CustomerInfo';
import './App.css';
import PizzaList from '../PizzaList/PizzaList';
import Header from '../Header/Header';
import { HashRouter as Router, Route } from 'react-router-dom/cjs/react-router-dom.min';

function App() {

  return (
    <div className='App'>
      
      <Router>
        <Route>
          <Header path='/'/>
        </Route>
        <Route path='/' exact>
          <PizzaList />
        </Route>

        <Route path='/checkout' exact>
          <Checkout />
        </Route>

        <Route path='/info' exact>
          <CustomerInfo />
        </Route>
      </Router>
    </div>
  );
}

export default App;
