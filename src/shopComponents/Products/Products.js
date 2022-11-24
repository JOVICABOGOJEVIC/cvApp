import { Fragment } from 'react';
import AvailableProducts from './AvailableProducts';
import ProductSummary from './ProductsSummary';
import styles from './Products.module.css';
import Categories from '../Categories/Categories';

const Products = () =>{
return(
    <Fragment>
        <ProductSummary />
        <Categories />
        <AvailableProducts />
    </Fragment>
)
}
export default Products;