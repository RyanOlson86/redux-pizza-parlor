import { useDispatch } from "react-redux"
import { useState } from "react"

const PizzaItem = ({pizza}) => {
    const [isClicked, setIsClicked] =useState(false)
    
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
                id: pizza.id
            }})
            setIsClicked(false)
        }
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