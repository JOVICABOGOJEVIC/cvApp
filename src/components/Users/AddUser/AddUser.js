import styles from './AddUser.module.css';
import { useState } from 'react';
import ErrorModal from '../../UI/ErrorModal';

const AddUser = (props) =>{
const [name, setName] = useState('');
const [age, setAge] = useState('');
const [error, setError] = useState();
const [valid, setValid] = useState();

const changeName = (event) =>{
    setName(event.target.value)
}
const changeAge = (event) =>{
    setAge(event.target.value)
}
const closePopup = () =>{
    setError('')
}
const saveInfo = (event) =>{
event.preventDefault();
const savedInfo = {
name:name,
age:age
}
if(savedInfo.name.trim().length === 0 || savedInfo.age.trim().length === 0 ){
    setError({
        title:'Invalid input',
        message:'Fill all inputs fields'
    })
  return;
};
if(savedInfo.age < 1){
        setError({
            title:'Invalid age',
            message:'The number must be positive'
        })
    return;
    }
        props.onSavedInfo(savedInfo.name, savedInfo.age)
setName('');
setAge('');
}
return(         
<div>
{error && <ErrorModal  title={error.title} message={error.message} onClosePopup={closePopup} />}
<form onSubmit={saveInfo}  key='add-user'>
    <label htmlFor='name' className={`${styles['ok']} ${!valid && styles.invalid}`}>Ime</label><br />
    <input type='text' id="name" onChange={changeName} value={name} /><br />
    <label htmlFor='age'>Godine</label><br />
    <input type='number' id="age" onChange={changeAge} value={age}/><br />
    <input type='submit' value='Sacuvaj' />
</form>
</div>
)
}

export default AddUser;