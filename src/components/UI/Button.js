import styles from './Button.module.css';

const Button = (props) =>{
    const savePlayer = ()=>{
        props.savePlayers()
    }
return(
    <button className={`${props.valid && styles.disableButton}`} onClick={savePlayer}>Save</button>
)
}
export default Button;