import axios from "axios"
import { useEffect, useState } from "react"
import PizzaItem from "../PizzaItem/PizzaItem"
import { Link } from "react-router-dom/cjs/react-router-dom.min"
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import SendIcon from '@mui/icons-material/Send';

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
        <Box component="div" sx={{ display: 'flex', mx: '2px', flexWrap: 'wrap', justifyContent: 'center'}}>
            {pizzaList.map((pizza)=>(
                <PizzaItem pizza={pizza} key={pizza.id}/>
            ))}
        </Box>
            
            
            <Link to='/info'>
                <Button variant="contained" endIcon={<SendIcon />} sx={{
                    backgroundColor: '#009c15',
                    left: '40%',
                    bottom: '5%',
                    width: '240px',
                    height: '60px',
                    fontSize: '24px'
                    }}>Next</Button>
            </Link>
            
        </>
    )
}

export default PizzaList