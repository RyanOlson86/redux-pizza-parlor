import { useState } from "react"
import { useDispatch } from "react-redux"
import { useHistory } from "react-router-dom/cjs/react-router-dom.min"
import { Box, TextField, FormControlLabel, RadioGroup, Radio, FormControl, InputLabel, Input } from "@mui/material"


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
        dispatch({ type: 'ADD_CUSTOMER', payload: customer })
        setCustomer({
            customer_name: '',
            street_address: '',
            city: '',
            zip: '',
            type: 'Delivery'
        })
        history.push('/checkout')
    }

    const handleSetting = (key, value) => {
        setCustomer({ ...customer, [key]: value })
    }

    return (
        <>
            <Box component='form' onSubmit={handleSubmit}>
                <InputLabel htmlFor="nameInput" sx={{ m: 1 }}>Name</InputLabel>
                <TextField required id="nameInput" label="Enter Name" variant="outlined" onChange={(event) => handleSetting('customer_name', event.target.value)} value={customer.customer_name} />
                <InputLabel htmlFor="streetInput" sx={{ m: 1 }}>Street Address</InputLabel>
                <TextField required id="streetInput" label="Enter St. Address" variant="outlined" onChange={(event) => handleSetting('street_address', event.target.value)} value={customer.street_address} />
                <InputLabel htmlFor="cityInput" sx={{ m: 1 }}>City</InputLabel>
                <TextField required id="cityInput" label="Enter City" variant="outlined" onChange={(event) => handleSetting('city', event.target.value)} value={customer.city} />
                <InputLabel htmlFor="zipInput" sx={{ m: 1 }}>Zip Code</InputLabel>
                <TextField required id="zipInput" label="Enter Zip Code" variant="outlined" onChange={(event) => handleSetting('zip', event.target.value)} value={customer.zip} />
                <div>
                    <FormControl>
                        <RadioGroup>
                            <FormControlLabel control={<Radio />} label="Pickup" onChange={(event) => handleSetting('type', event.target.value)} value='Pickup' checked={customer.type === 'Pickup'}></FormControlLabel>
                            <FormControlLabel control={<Radio />} label="Delivery" onChange={(event) => handleSetting('type', event.target.value)} checked={customer.type === 'Delivery'} value='Delivery'></FormControlLabel>
                        </RadioGroup>
                    </FormControl>
                </div>
                <button>Continue to Checkout</button>
            </Box >
        </>
    )
}

export default CustomerInfo