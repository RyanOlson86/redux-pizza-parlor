import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';

// Be sure to replace this reducer! 🙂
const cart = (state = [], action) => {
  console.log(action.payload)
  if (action.type === "ADD_TO_CART") {
    return [...state, action.payload]
  }
  if (action.type === "REMOVE_FROM_CART") {
    return state.filter(pizza => pizza.id != action.payload.id)
  }
  return state;
}

const customerInfo = (state = {}, action) => {
  if (action.type === "ADD_CUSTOMER") {
    return action.payload
  }
  return state
}

const store = createStore(
  combineReducers({
    cart,
    customerInfo
  }),
  applyMiddleware(logger),
);


export default store;
