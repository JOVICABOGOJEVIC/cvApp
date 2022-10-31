import { Fragment, useState } from 'react';
import Button from '../../UI/Button'
import styles from './AddPlayer.module.css';
import ErrorModal from '../../UI/ErrorModal';

const AddPlayer = (props) =>{

   const [name, setName] = useState('');
   const [date, setDate] = useState('');
   const [error, setError] = useState('');
   const [index, setIndex] = useState(1);
   const [limit, setLimit] = useState(true);

   const changeName = (event) =>{
    setName(event.target.value)
   }
   const changeDate= (event) =>{
    setDate(event.target.value)
   }
   const closePopup = () =>{
    setError('')
}

   const addPlayer = () =>{
    let d = new Date().getFullYear();
     let b = date.substring(0, 4)
    let razlika = d-b;
    if(razlika<18){
        setError({
            title:'Login error',
            message:'Player must be over 18 years old'
        })
        return;
    }
    props.onSavePlayers(name, date, razlika);
    setName('');
    setDate('');
    setIndex(index+1)
    console.log(index);
    if(index==!0){
        setLimit(false);
        props.newPlay();
    }
   }
  
return(
    <div>
        {error && <ErrorModal  title={error.title} message={error.message} onClosePopup={closePopup} />}
        <div className={`${styles['addInput']} ${!limit && styles.disabled}`}>
        <input type="text"  className={styles.inputName} value={name} onChange={changeName} placeholder="User name"/>
        <input type="date" className={styles.inputDate} value={date} onChange={changeDate} />
      <Button savePlayers={addPlayer}></Button>
    <i className={styles.warningInfo}>*Player must be over 18 years old</i>

    </div>

    </div>

)
}

export default AddPlayer;