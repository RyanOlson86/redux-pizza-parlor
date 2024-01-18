import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"

const PizzaItem = ({pizza}) => {
    const [isClicked, setIsClicked] =useState(false)
    const cartStore = useSelector((store) => store.cart);
    const dispatch = useDispatch()

    const handleClick = ()=> {
        if(isClicked === false) {
            dispatch({type: 'ADD_TO_CART', payload: {
                id: pizza.id,
                quantity: 1,
                name: pizza.name,
                price: pizza.price
            }})
            setIsClicked(true)
        } else {
            dispatch({type: 'REMOVE_FROM_CART', payload: {
                id: pizza.id,
                price: pizza.price
            }})
            setIsClicked(false)
        }
    }
  const calculateTotal = () => {
    let total = 0;
    cartStore.forEach((item) => total += Number(item.price));
    dispatch({
        type: 'UPDATE_TOTAL',
        payload: total
    })
  }

    return (
        <div>
            <div>{pizza.name}</div>
            <div>Description: {pizza.description}</div>
            <div>${pizza.price}</div>
            <button onClick={handleClick}>{isClicked ? 'Remove' : 'Add'}</button>
        </div>

    )
}

export default PizzaItem