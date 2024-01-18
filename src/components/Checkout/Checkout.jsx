import axios from "axios"
import { useSelector, useDispatch } from "react-redux"

const Checkout = () => {
    const store = useSelector(store => store)
    const dispatch = useDispatch()
    const { cart, customerInfo } = store

    const handleCheckout = () => {
        console.log('in handle checkout');
        axios.post('/api/order', {
            ...customerInfo,
            pizzas: cart,
            total: 100 // TODO: get from global store
        }).then(response => {
            dispatch({ type: 'RESET' }) // TODO: a new action type to reset the values of the global store.
        }).catch(error => {
            console.log(error);
            alert('Unable to process order.')
        })
    }

    return (
        <>
            <h2>Checkout</h2>
            <p>{customerInfo.customer_name}</p>
            <p>{customerInfo.street_address}</p>
            <p>{customerInfo.city}, {customerInfo.zip}</p>

            <table>
                <thead>
                    <tr>
                        <th>Pizza Name</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {cart.map(pizza => {
                        return pizza ? <tr key={pizza.id}><td>{pizza.name}</td>{pizza.price}</tr> : null
                    })}
                </tbody>
            </table>
            <h2>Total:</h2> {/*Need to add the total from the global state.*/}
            <button onClick={handleCheckout}>Checkout</button>
        </>
    )
}

export default Checkout