import styles from './PlayersItem.css';

const PlayersItem = (props) =>{
return (
<div>
    {props.playersInfo.map(el=><span key={el.id}> {el.ime} | {el.razlika} god.</span>)}
</div>
)
}

export default PlayersItem;