import styles from './Button.module.css';

const Button = (props) =>{
    const savePlayer = ()=>{
        props.savePlayers()
    }
return(
    <button onClick={savePlayer}>Save</button>
)
}
export default Button;