import { Fragment, useState, useEffect } from 'react';
import Button from '../../UI/Button'
import styles from './AddPlayer.module.css';
import ErrorModal from '../../UI/ErrorModal';

const AddPlayer = (props) =>{

   const [name, setName] = useState('');
   const [date, setDate] = useState('');
   const [error, setError] = useState('');
   const [index, setIndex] = useState(1);
   const [limit, setLimit] = useState(true);
   const [notValid, setFormValid] = useState(false)



   const changeName = (event) =>{
    setName(event.target.value)
   }
   useEffect(()=>{
    setFormValid(
        name.trim().length === 0
    )
},[name])
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
    
    if(razlika<18 || razlika ===2022){
        setError({
            title:'Login error',
            message:'Player must be over 18 years old. The date input field must not be empty'
        })
        return;
    }
    props.onSavePlayers(name, date, razlika);
    setName('');
    setDate('');
    setIndex(index+1)
    if(index==!0){
        setLimit(false);
        props.newPlay();
    }
   }
  
return(
    <div>
        {error && <ErrorModal  title={error.title} message={error.message} onClosePopup={closePopup} />}
        <div className={`${styles['addInput']} ${!limit && styles.disabled}`}>
        <input type="text"  className={`${styles.inputName } ${notValid && styles.errorInput}`} value={name} onChange={changeName} placeholder="User name"/>
        <input type="date" className={`styles.inputDate}${notValid && styles.errorInput}`} value={date} onChange={changeDate} />
      <Button  valid={notValid} savePlayers={addPlayer}></Button>
      <i className={styles.warningInfo}>*User name must contain at least one character 
    <br/>  and player must be over 18 years old</i>
    <i className={styles.warningInfo}></i>
    </div>
    </div>
)
}

export default AddPlayer;

