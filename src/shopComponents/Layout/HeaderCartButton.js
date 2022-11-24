import { useContext } from 'react';
import CartContext from '../../store/cart-context';
import styles from './HeaderCartButton.module.css';

const HeaderCartButton = (props) =>{
    const cartCtx = useContext(CartContext);

    const numberOfCartItems = cartCtx.items.reduce((curNumber,item)=>{
        return curNumber + item.amount
    },0)

return(<button className={styles.iconButton} onClick={props.onShowCart}>
     <span className={styles.icon}><i class='fas fa-shopping-cart'></i></span>
    <span className={styles.cart}>Vidi korpu</span>
    <span className={styles.badge}>{numberOfCartItems}</span>
</button>
)
}

export default HeaderCartButton;