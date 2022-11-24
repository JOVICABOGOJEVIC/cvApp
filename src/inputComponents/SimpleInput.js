import { useEffect, useRef, useState } from 'react';
import styles from './SimpleInput.module.css';

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [errorForm, setErrorForm] = useState(false);

    const nameInputBlur = () =>{console.log('radi');}

    const changeEnteredName = (e) => {
        setEnteredName(e.target.value);
    }
  
    const saveForm = (e) => {
        e.preventDefault();
       
        setEnteredName('');
    }
    console.log(errorForm);
    return (
        <form>
            <div className={styles.boxForm}>
                {!errorForm && <p>Is it input contain '@'?</p>}
                {errorForm && <p style={{color:'red'}}>Mail must contains '@'!</p>}
                <label htmlFor='name'>Your mail</label><br />
                <input type='text' id='name' onChange={changeEnteredName} onBlur={nameInputBlur}
                 value={enteredName} />

                <button onClick={saveForm} disabled={errorForm}>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;