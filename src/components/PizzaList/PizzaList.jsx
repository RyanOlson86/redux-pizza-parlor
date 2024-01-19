import axios from "axios"
import { useEffect, useState } from "react"
import PizzaItem from "../PizzaItem/PizzaItem"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

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
                <PizzaItem pizza={pizza} key={pizza.id}/>
            ))}
            
            <Link to='/info'>
                <button>Next</button>
            </Link>
            
        </>
    )
}

export default PizzaList