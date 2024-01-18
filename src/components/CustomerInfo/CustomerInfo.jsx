import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"

const CustomerInfo = () => {
    const history = useHistory()
    
    // ! Global State
    const dispatch = useDispatch()

    // ! Local State
    const [customer, setCustomer] = useState({
        customer_name: '',
        street_address: '',
        city: '',
        zip: '',
        type: 'Delivery'
    })

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch({type: 'ADD_CUSTOMER', payload: customer})
        // history.push('/checkout')
    }
    
    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="nameInput">Name</label>
                <input required type="text" placeholder="Enter Name" id="nameInput" onChange={(event) => setCustomer({...customer, customer_name: event.target.value})} value={customer.customer_name}/>
                <label htmlFor="streetInput">Street Address</label>
                <input required type="text" placeholder="Enter St. Address" id="streetInput" onChange={(event) => setCustomer({...customer, street_address: event.target.value})} value={customer.street_address}/>
                <label htmlFor="cityInput">City</label>
                <input required type="text" placeholder="Enter City" id="cityInput" onChange={(event) => setCustomer({...customer, city: event.target.value})} value={customer.city}/>
                <label htmlFor="zipInput">Zip</label>
                <input required type="number" placeholder="Enter Zip Code" id="zipInput" onChange={(event) => setCustomer({...customer, zip: event.target.value})} value={customer.zip}/>
                
                <input type="radio" id="Pickup" onChange={(event) => setCustomer({...customer, type: event.target.value})} value='Pickup' checked={customer.type === 'Pickup'}/>
                <label htmlFor="Pickup">Pickup</label>
                <input type="radio" value='Delivery' id="Delivery" onChange={(event) => setCustomer({...customer, type: event.target.value})} checked={customer.type === 'Delivery'}/>
                <label htmlFor="Delivery">Delivery</label>            
                <button>Continue to Checkout</button>
            </form>
        </>
    )
}

export default CustomerInfo