import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {

  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload]
  }
  if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pizza => pizza.id != action.payload.id)
  }
  if (action.type === 'RESET') {
    return []
  }
  return state;
}

const customerInfo = (state = {}, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return action.payload
  }
  if (action.type === "RESET") {
    return {}
  }
  return state
}

const total = (state = 0, action) => {
  if (action.type === "ADD_TO_CART") {
    return state + Number(action.payload.price)
  }
  if (action.type === "REMOVE_FROM_CART") {
    return state - Number(action.payload.price)
  }
  if (action.type === "RESET") {
    return 0
  }
  return state
}


const store = createStore(
  combineReducers({
    cart,
    customerInfo,
    total
  }),
  applyMiddleware(logger),
);


export default store;
