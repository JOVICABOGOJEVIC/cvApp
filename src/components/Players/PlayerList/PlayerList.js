import { Fragment, useState } from 'react';
import PlayersItem from '../PlayersItem/PlayersItem';
import AddPlayers from '../AddPlayer/AddPlayer';
import styles from './PlayerList.module.css';

const PlayerList = () => {
    const [players, setData] = useState([]);
    const [message, setMessage] = useState();
    const [card, setCard] = useState();
    const [goFirst, setGoFirst] = useState(false);
    const [card2, setCard2] = useState(0);
    const [goSecond, setGoSecond] = useState(false);
    const [card3, setCard3] = useState(0);
    const [card4, setCard4] = useState();
    const [card5, setCard5] = useState();

let cardView = [];
let cardTotal = card+card2+card3;
console.log(card3);
if(card3 === NaN){
    card3 = 0;
}
cardView.push(cardTotal);

    const saveInfo = (ime, datum, razlika) => {
        setData((prevState) => {
            return [...prevState, { ime: ime, datum: datum, razlika: razlika, id: Math.random() }]
        })
    }
    
const startGame = () =>{
    setMessage('Your first card is:');
    setCard(Math.floor(Math.random() * 10) + 1);
    setInterval(() => {
setGoFirst(true);
      }, 500);
}
const secondCard = ()=>{
setCard2(Math.floor(Math.random() * 10) + 1);
setInterval(() => {
    setGoSecond(true);
          }, 500);
}


const ThirdCard = ()=>{
    setCard3(Math.floor(Math.random() * 10) + 1);
    setInterval(() => {
        setGoSecond(true);
              }, 1500);
    }
    
const quitGame = () =>{

}
    return (
        <div className={styles.container}>
            <h4>Cards game</h4>
            <AddPlayers onSavePlayers={saveInfo} newPlay={startGame}/>
            <h4>Not over 21 in total:</h4>
            <PlayersItem playersInfo={players} />
            {message}<br/> <p className={styles.card}>{card}</p>
         <button className={`${!goFirst && styles.wait} ${goFirst && styles.going}`} onClick={secondCard}>
            Continue?</button>
        <button className={`${!goFirst && styles.wait} ${goFirst && styles.going}`} onClick={quitGame}>  Quit?</button>
         <br/>
         
         <p className={`${!goSecond && styles.wait} ${goSecond && styles.going} ${styles.card}`}>{card2} </p><br/>
         <button className={`${!goSecond && styles.wait} ${goSecond && styles.going}`} onClick={ThirdCard}>Continue</button>
         <button className={`${!goSecond && styles.wait} ${goSecond && styles.going}`} onClick={quitGame}>  Quit?</button><br/>
         <p className={`${!goSecond && styles.wait} ${goSecond && styles.going} ${styles.card}`}>{card3} </p><br/>
         <hr/>
         <p className={`${!goFirst && styles.wait} ${goFirst && styles.going} ${styles.total}`}>{cardView} </p>
        </div>
    )
}

export default PlayerList;