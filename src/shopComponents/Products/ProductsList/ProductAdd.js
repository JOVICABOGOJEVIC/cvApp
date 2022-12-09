import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import styles from './ProductAdd.module.css';

const ProductAdd = (props) => {
    const [isValid, setIsValid] = useState(true);
    const amountInputRef = useRef();
    const submitHandler = event => {
        event.preventDefault();
        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;
        if (enteredAmountNumber < 1) {
            setIsValid(false)
            return
        }
        props.onAddToCart(enteredAmountNumber);
    } 
    return (
        <form className={styles.form} onSubmit={submitHandler} >
            <Input
                ref={amountInputRef}
                label='Kolicina'
                input={
                    {
                        id: 'amount',
                        type: 'number',
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }
                } />
            <button>+ Dodaj</button>
            {!isValid && <p style={{ color: 'red' }}>Nije uneta odgovarajuca vrednost</p>}
        </form>
    )
}

export default ProductAdd;