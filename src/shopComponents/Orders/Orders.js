import { useEffect, useState, Fragment } from 'react';
import OrderList from './OrderList';
import styles from './Orders.module.css';

const Orders = () =>{
    const [orders,setOrders] = useState([]);
useEffect(() =>{
    const fetchOrders = async () =>{
let response  = await fetch('https://catering-affe8-default-rtdb.firebaseio.com/orders.json');
const responseData = await response.json();

if (!response.ok) {
    throw new Error('Doslo je do greske');
}
const loadedOrders = [];
for(const key in responseData){
//Kreirati sadrzaj
loadedOrders.push({
    name:responseData[key].user.name,
    city: responseData[key].user.city,
    phone: responseData[key].user.phone,
    address: responseData[key].user.address,
    message: responseData[key].user.message
})
    console.log(loadedOrders);
    setOrders(loadedOrders)
}
 }
 fetchOrders();

},[]);

let ordersList = orders.map(el => <OrderList name={el.name} city={el.city} phone={el.phone} 
    address={el.address} message={el.message} />)

return<Fragment><h3>Porudzbine:</h3>
{ordersList}
</Fragment>

};

export default Orders;