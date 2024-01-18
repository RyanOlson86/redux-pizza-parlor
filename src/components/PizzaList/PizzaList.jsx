import axios from "axios"
import { useEffect, useState } from "react"

const PizzaList = () => {
    const [pizzaList, setPizzaList] = useState([])

    useEffect(()=>{
        fetchPizzas()
    }, [])

    const fetchPizzas = () => {

        axios.get('/api/pizza')
        .then((response) => {
            console.log('response.data', response.data)
            setPizzaList(response.data)
        })
        .catch(error => {
            console.error(error);
            alert('Error in GET /pizza')
        })
    }

    return (
        <>
            {pizzaList.map((pizza)=>(
                <div key={pizza.id}>
                    <div>{pizza.name}</div>
                    <div>Description: {pizza.description}</div>
                    <div>${pizza.price}</div>
                    <button>Add/Remove</button>
                </div>
            ))}
        </>
    )
}

export default PizzaList