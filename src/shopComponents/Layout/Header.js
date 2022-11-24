import { Fragment, useState } from 'react';
import styles from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
import Products from '../Products/Products';
import Cart from '../Cart/Cart';
import CartProvider from '../../store/CartProvider';

const Header = props =>{
    const [cartIsShown, setCartIsShown] = useState(false);

    const showCartHandler = () =>{
        setCartIsShown(true)
    }
    const hideCartHandler = () =>{
        setCartIsShown(false)
    }

return (
<CartProvider>
    {cartIsShown&&<Cart onClose={hideCartHandler}/> } 
    <header>
<h6>LOCAL EXPRESS</h6><i className="fa fa-search"></i>
<HeaderCartButton onShowCart={showCartHandler}/>
    </header>
    <Products />
</ CartProvider>
)
}

export default Header;