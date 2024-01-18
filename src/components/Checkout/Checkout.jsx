import { useSelector } from "react-redux"

const Checkout = () => {
    const store = useSelector(store => store)
    const { cart, customerInfo } = store
    
    return (
        <>
            <h2>Checkout</h2>
            <p>{customerInfo.customer_name}</p>
            <p>{customerInfo.street_address}</p>
            <p>{}</p>
        </>
    )
}

export default Checkout