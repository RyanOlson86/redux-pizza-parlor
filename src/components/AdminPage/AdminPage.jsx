import { useEffect, useState } from 'react'
import './AdminPage.css'
import axios from 'axios'

const AdminPage = () => {
    // Local state to store orders from server
    const [orderList, setOrderList] = useState([])

    // useEffect to do GET request when page loads
    useEffect(()=>{
        getOrders()
    },[])

    // axios GET request for orders from server
    // set local state with response.data
    const getOrders = ()=>{
        axios.get('api/order')
        .then(response => {
            // console.log('orders from GET', response.data)
            setOrderList(response.data)
        })
        .catch(error => {
            console.error(error);
            alert('Error in GET /order')
        })
    }

    const AdminItem = ({order})=>{
        return (
            <tr>
                <td>{order.customer_name}</td>
                <td>{order.time}</td>
                <td>{order.type}</td>
                <td>{order.total}</td>
            </tr>
        )
    }

    return (
        <table className="admin-table">
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Time Order Placed</th>
                    <th>Type</th>
                    <th>Cost</th>
                </tr>
                {orderList.map(order=>(
                    <AdminItem order={order} key={order.id}/>
                ))}
            </tbody>
        </table>
    )
}

export default AdminPage