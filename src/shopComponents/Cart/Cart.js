import styles from './Cart.module.css';
import Modal from '../UI/Modal';
import CartContext from '../../store/cart-context';
import CartItem from './CartItem';
import { useContext, useState } from 'react';
import Checkout from './Checkout';

const Cart = (props) =>{
const [isCheckout, setIsCheckout] = useState();
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
const nameItems = cartCtx
    const cartItems = <ul className={styles['cart-items']}>{cartCtx.items.map((item) =>
     <CartItem key={item.id} name={item.name} amount={item.amount} price={item.price}
      onRemove={cartItemRemoveHandler.bind(null, item.id)} onAdd={cartItemAddHandler(null, item)}/>)}
      </ul>
      const modalAction = <div className={styles.action}>
      <button className={styles['button--alt']} onClick={props.onClose}>Close</button>
     {hasItems &&  <button className={styles.button} onClick={orderHandler}>Order</button>}
  </div>
return(
    <Modal onClose={props.onClose}>
           <div className={styles.total}>{cartItems}
    <div><span>Total amount</span><br/>
    <span>{totalAmount}</span>
    </div>
    {isCheckout && <Checkout onCancel={props.onClose}/>}
    {!isCheckout && modalAction }
    </div>
    </Modal>
)
}

export default Cart;