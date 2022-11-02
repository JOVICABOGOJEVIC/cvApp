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
    const [goThird, setGoThird] = useState(false);
    const [card4, setCard4] = useState(0);
    const [goForth, setGoForth] = useState(false);
    const [card5, setCard5] = useState(0);
    const [goFifth, setGoFifth] = useState(false);
    const [card6, setCard6] = useState(0);
    const [goSixth, setGoSixth] = useState(false);
    const [card7, setCard7] = useState(0);
    const [goSeventh, setGoSeventh] = useState(false);
    const [view, setView] = useState(false);
const [account,setAccount] =useState();

    let cardView = [];
    let cardTotal = card + card2 + card3 + card4 + card5 + card6 + card7;
  
  
    cardView.push(cardTotal);

    const saveInfo = (ime, datum, razlika) => {
        setData((prevState) => {
            return [...prevState, { ime: ime, datum: datum, razlika: razlika, id: Math.random() }]
        })
    }

    const startGame = () => {
        setMessage('Your first card is:');
        setCard(Math.floor(Math.random() * 10) + 1);
        setInterval(() => {
            setGoFirst(true);
        }, 500);
    }
  
    const secondCard = (event) => {
        setCard2(Math.floor(Math.random() * 10) + 1);
            setGoSecond(true);
            event.currentTarget.disabled = true;
    }


    const thirdCard = (event) => {
        if(cardTotal>21){
            setView(true)
        }
        setCard3(Math.floor(Math.random() * 10) + 1);
            setGoThird(true);
            event.currentTarget.disabled = true;
    }
    const forthCard = (event) => {
        if(cardTotal>21){
            setView(true)
        }
        setCard4(Math.floor(Math.random() * 10) + 1);
            setGoForth(true);
            event.currentTarget.disabled = true;
    }
    const fifthCard = (event) => {
        if(cardTotal>21){
            setView(true)
        }
        setCard5(Math.floor(Math.random() * 10) + 1);
            setGoFifth(true);
            event.currentTarget.disabled = true;
    }
    const sixthCard = (event) => {
        if(cardTotal>21){
            setView(true)
        }
        setCard6(Math.floor(Math.random() * 10) + 1);
            setGoSixth(true);
            event.currentTarget.disabled = true;
    }
    const seventhCard = (event) => {
        if(cardTotal>21){
            setView(true)
        }
        setCard7(Math.floor(Math.random() * 10) + 1);
            setGoSeventh(true);
            event.currentTarget.disabled = true;
    }
    const quitGame = () => {
        console.log('radi');
      setView(true)
    }


return (
        <Fragment>
            <div className={styles.container}>
                <h4>Cards game</h4>
                <AddPlayers onSavePlayers={saveInfo} newPlay={startGame} />

                <h4>Not over 21 in total:</h4>
                <PlayersItem playersInfo={players} />Your account<span>{account-10}$</span>
                <div className={`${!view && styles.view} ${view && styles.notView}`}>
                {message}<br />
                <p className={styles.card}>{card}</p>
                {goFirst && (<div><button onClick={secondCard}>Continue?</button><button onClick={quitGame}>Quit?</button></div>)}

                <p className={`${!goSecond && styles.wait} ${goSecond && styles.going} ${styles.card}`}>{card2} </p><br />
                {goSecond && (<div><button onClick={thirdCard}>Continue?</button></div>)}
                <p className={`${!goThird && styles.wait} ${goThird && styles.going} ${styles.card}`}>{card3} </p><br />
                {goThird && (<div><button onClick={forthCard}>Continue?</button></div>)}
                <p className={`${!goForth && styles.wait} ${goForth && styles.going} ${styles.card}`}>{card4} </p><br />
                {goForth && (<div><button onClick={fifthCard}>Continue?</button></div>)}
                <p className={`${!goFifth && styles.wait} ${goFifth && styles.going} ${styles.card}`}>{card5} </p><br />
                {goFifth && (<div><button onClick={sixthCard}>Continue?</button></div>)}
                <p className={`${!goSixth && styles.wait} ${goSixth && styles.going} ${styles.card}`}>{card6} </p><br />
                {goSixth && (<div><button onClick={seventhCard}>Continue?</button></div>)}
                <p className={`${!goSeventh && styles.wait} ${goSeventh && styles.going} ${styles.card}`}>{card7} </p><br />
                {goSecond && (<p className={`${styles.total}`}>{cardView} </p>)}
                </div>
                <div className={`${!view && styles.report}`}>
                    <p>Izvestaj</p>
                    <p>Rezultat:{cardView}</p>
                    <div>
                    </div>
                    </div>
            </div>

        </Fragment>
    )
}
{/*<div className={styles.container}>
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
    </div>*/}


export default PlayerList;