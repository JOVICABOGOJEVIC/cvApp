import { useContext } from 'react';
import ProductAdd from './ProductAdd';
import styles from './ProductsList.module.css';
import CartContext from '../../../store/cart-context';

const ProductList = props =>{

const cartCtx = useContext(CartContext);

const addToCartHandler = (amount) =>{
cartCtx.addItem({
    id: props.id,
    name: props.name,
    amount: amount,
    price: props.price
})
}

    return(
        <div className={styles.productsList}>
                <li>
            <div className={styles.nameStyle}>{props.name}</div>
            <div className={styles.markStyle}>{props.mark}</div>
            <div id='action' className={styles.descriptionStyle}>{props.description}</div>
            <div className={styles.priceStyle}>{props.price}RSD</div>
        <ProductAdd onAddToCart={addToCartHandler} />
        </li>
        </div>  
    )
}
export default ProductList;