import React from 'react';
import styles from './OrderList.module.css';

const OrderList = (props) =>{
return(
    <div className={styles.boxOrders}>
<p>{props.city}</p>

<p>{props.name}</p>
<p>{props.address}</p>
<p>{props.phone}</p>
<p>{props.message}</p>
    </div>
)
}

export default OrderList;