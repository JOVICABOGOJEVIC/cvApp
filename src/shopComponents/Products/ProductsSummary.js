import styles from './ProductsSummary.module.css';

const ProductSummary = () =>{
return (
    <div className={styles.summary}>
        <span>Poruci robu na sajtu</span>
        <span>Isporuka u toku dana od 17-19h na vasoj adresi</span>
        <span>Isplata pouzecem</span>
            
    </div>
)
}

export default ProductSummary;