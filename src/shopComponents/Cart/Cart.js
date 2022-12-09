import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import React, { useContext, useState } from 'react';
import Checkout from './Checkout';

const Cart = (props) =>{
const [isCheckout, setIsCheckout] = useState();
const [isSubmitting, setIsSubmitting] = useState();
const [didSubmit, setDidSubmit] = useState();
const cartCtx = useContext(CartContext);
const totalAmount =`${cartCtx.totalAmount} RSD`;
const hasItems = cartCtx.items.length > 0;

const cartItemRemoveHandler = id =>{
    cartCtx.removeItem(id);
}
const cartItemAddHandler = item =>{
   
}
const orderHandler = () =>{
setIsCheckout(true);
}
const submitOrderHandler = async(userData) =>{
    setIsSubmitting(true)
    console.log(userData);
 const response = await fetch('https://catering-affe8-default-rtdb.firebaseio.com/orders.json',({
    method:'POST',
    body: JSON.stringify({
        user: userData,
        orderedItems: cartCtx.items
    })
    }));
    setIsSubmitting(false);
    setDidSubmit(true);
    cartCtx.clearCart()
  }
//const nameItems = cartCtx
    const cartItems = (<ul className={styles['cart-items']}>{cartCtx.items.map((item) =>
     <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler(null, item)}/>)}
      </ul>)
      const modalAction = <div className={styles.action}>
      <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
     {hasItems &&  <button className={styles.button} onClick={orderHandler}>Order</button>}
  </div>

const cartModalContent = <React.Fragment>
    <div className={styles.total}>
{cartItems}
<div><span>Total amount</span>
<span>{totalAmount}</span>
</div>
{isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
{!isCheckout && modalAction }
</div>
</React.Fragment>   
const submittingModalContent = <p>Slanje kontakt forme..</p>
const didSubmitModalContent = <React.Fragment>
    <p>Porudzbina je poslata..</p>
 <div className={styles.action}>
      <button className={styles['button--alt']} onClick={props.onClose} style={{float:'right'}}>Zatvori</button>
  </div>
</React.Fragment> 
return(
    <Modal onClose={props.onClose}>
        {!isSubmitting && !didSubmit && cartModalContent}
        {isSubmitting && submittingModalContent}
        {!isSubmitting && didSubmit && didSubmitModalContent}
    </Modal>
)
}

export default Cart;