import styles from './UserList.module.css';
import UserItem from './UserItem';
import AddUser from '../AddUser/AddUser';
import { useState } from 'react';

const UserList = () =>{
 /* let number1 = Math.round(Math.random()*100);
  let number2 = Math.round(Math.random()*100);
  let number3 = Math.round(Math.random()*100);
 
let array = [number1, number2, number3]
console.log(array);
let maxNumber = Math.max(...array);
let positionNumber = array.indexOf(maxNumber);
console.log('Najveca vrednost je' + (maxNumber));
console.log('I nalazi se na poziciji' + (positionNumber+1));
console.log('/////////////////////////');*/


const [info, setInfo] = useState([]);

const useSavedInfo = (name, age) =>{
setInfo((prevState) => {
    return [...prevState, {name:name, age:age, id:Math.random()}]
})
}
  return <div>
<UserItem  users={info} />
<AddUser onSavedInfo={useSavedInfo}/>
        </div>

   
}

export default UserList;