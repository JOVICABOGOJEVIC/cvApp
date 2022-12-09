import { useEffect, useState } from "react";
import Card from "../UI/Card";
import styles from "./AvailableProducts.module.css";
import ProductList from "./ProductsList/ProductsList";

/*const DUMMY_PRODUCTS = [
    {
        id:'p1',
        mark:'Gorenje',
        name:'Frizider',
        description: 'R600',
        price:'33000'
    },
    {
        id:'p2',
        mark:'Beko',
        name:'Ves masina',
        description: '1200 obrtaja',
        price:'31000'
    },
    {
        id:'p3',
        mark:'Elin',
        name:'Mikrotalasna pecnica',
        description: '7 programa',
        price:'9000'
    }
    ]*/

const AvailableProducts = () => {

    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [httpError, setHttpError] = useState();

    useEffect(() => {

        const fetchProducts = async () => {
            const response = await fetch('https://catering-affe8-default-rtdb.firebaseio.com/products.json').then();
            const responseData = await response.json();
            if (!response.ok) {
                throw new Error('Doslo je do greske');
            }
            const loadedProducts = [];
            for (const key in responseData) {
                loadedProducts.push({
                    id: key,
                    name: responseData[key].name,
                    mark: responseData[key].mark,
                    description: responseData[key].description,
                    price: responseData[key].price
                })
            }
            setProducts(loadedProducts);
            setIsLoading(false)
        };
        fetchProducts().catch((error) => {
            setIsLoading(false);
            setHttpError(error.message)
        })
    }, [])

    if (isLoading) {
        return (
            <section className={styles.productsLoading}>
                <i>Loading...</i>
            </section>
        )
    }
    if (httpError) {
        return (
            <section className={styles.productsError}>
                <p>{httpError}</p>
            </section>
        )
    }
   

    const productList = products.map((el) => <ProductList key={Math.random()} id={el.id} name={el.name} mark={el.mark} description={el.description} price={el.price} />);
   //RADI FILTRIRANJE
   //let dataPointsValues = products.map(dataPoint => dataPoint.price);
   //let maxValue = Math.max(...dataPointsValues);
    return (
        <Card><div className="container-fluid">
            <h5 className={styles.headingStyle}>Akcije</h5>
            <section className={styles.productList}>
                {productList}
            </section>
        </div>
        </Card>
    )
}

export default AvailableProducts;