import styles from './Checkout.module.css';
import { useRef, useState } from 'react';

const isEmpty = value => value.trim() === '';
const isMail = value => value.includes('@');

const Checkout = (props) =>{

const [formsInputsValidaty, setFormsInputsValidaty] = useState({
    name:true,
    address:true,
    city:true,
    message:true,
    phone:true
});

const nameInputRef = useRef(); 
const addressInputRef = useRef(); 
const cityInputRef = useRef(); 
const messageInputRef = useRef(); 
const phoneInputRef = useRef(); 

    const confirmHandler = (event) =>{
        event.preventDefault();
        const enteredName = nameInputRef.current.value;
        const enteredAddress = addressInputRef.current.value;
        const enteredCity = cityInputRef.current.value;
        const enteredMessage = messageInputRef.current.value;
        const enteredPhone = phoneInputRef.current.value;

        const enteredNameisValid = !isEmpty(enteredName);
        const enteredAddressisValid  = !isEmpty(enteredAddress);
        const enteredCityisValid = !isEmpty(enteredCity);
        const enteredMessageisValid = !isEmpty(enteredMessage);
        const enteredPhoneisValid = !isEmpty(enteredPhone);

setFormsInputsValidaty({
    name:enteredNameisValid,
    address:enteredAddressisValid,
    city:enteredCityisValid,
    message:enteredMessageisValid,
    phone:enteredPhoneisValid
})
console.log(formsInputsValidaty.name);
console.log(formsInputsValidaty.address);
console.log(formsInputsValidaty.city);
        const formisValid = 
        enteredNameisValid&&
        enteredAddressisValid&&
        enteredCityisValid&&
        enteredMessageisValid&&
        enteredPhoneisValid;

        if(formisValid){
return
        }
    }
    const invalidNameClass = `${styles.control} ${formsInputsValidaty.name ? '': styles.invalid}`
    const invalidAddressClass = `${styles.control} ${formsInputsValidaty.address ? '': styles.invalid}`
    const invalidPhoneClass = `${styles.control} ${formsInputsValidaty.phone ? '': styles.invalid}`
    const messageAlert = <p><i>* Polje za unos mora sadrzati minimum jedan karakter</i></p>;

return <form onSubmit={confirmHandler} className={styles.boxControlForm}>
    <div className={invalidNameClass}>
        <label htmlFor='name'>Ime i prezime:</label>
        <input id='name' type='text' ref={nameInputRef} />
        {!formsInputsValidaty.name && messageAlert}
    </div>
    <div className={invalidAddressClass}>
        <label htmlFor='address'>Adresa:</label>
        <input id='address' type='text' ref={addressInputRef} />
        {!formsInputsValidaty.address && messageAlert}
    </div>
    <div className={invalidPhoneClass}>
        <label htmlFor='phone'>Telefon:</label>
        <input id='phone' type='text' ref={phoneInputRef} />
        {!formsInputsValidaty.phone && messageAlert}
    </div>
    <div className={styles.control}>
    <label for="cars">Izaberite naselje:</label>

<select name="city" id="city" ref={cityInputRef} >
  <option value="volvo">Kaludjerica</option>
  <option value="saab">Lestane</option>
  <option value="mercedes">Vinca</option>
  <option value="audi">Bolec</option>
</select>
{!formsInputsValidaty.city && messageAlert}
    </div>
    <div className={styles.control}>
        <label htmlFor='message'>Napomena:</label>
        <textarea id='message' type='text' ref={messageInputRef}  />
    </div>
    <button type='button' onClick={props.onCancel}>Otkazi</button>
    <button>Poruci</button>
</form>
}

export default Checkout;