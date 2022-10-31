import styles from './UserItem.module.css';

const UserItem = (props) =>{
    
    return <div>{props.users.map(el=><li key={el.id}> {el.name} ({el.age}. godina starosti)</li>)}</div>
}
export default UserItem;