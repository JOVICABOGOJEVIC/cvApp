import { Fragment, useState, useEffect } from 'react';
import PlayersItem from '../PlayersItem/PlayersItem';
import AddPlayers from '../AddPlayer/AddPlayer';
import PlayerReport from '../PlayerReport/PlayerReport';
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
    const [box, setBox] = useState(false);
    const [account, setAccount] = useState(100);
    const [plus, setPlus] = useState(0);
    const [reportPlay, setReportPlay] = useState(false);

    let cardView = [];
    let cardTotal = card + card2 + card3 + card4 + card5 + card6 + card7;


    cardView.push(cardTotal);

    const saveInfo = (ime, datum, razlika) => {
        setBox(true);
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
    useEffect(() => {
        setCard2(0);
        setCard3(0);
        setCard4(0);
        setCard5(0);
        setCard6(0);
        setCard7(0);
    
    }, [account])

    const startAgain = () => {
        let sub = 10;
        setAccount(account - sub)
        setMessage('Your new card is:');
        setCard(Math.floor(Math.random() * 10) + 1);
        setView(false)
        setGoFirst(false);
        setGoSecond(false);
        setGoThird(false);
        setGoForth(false);
        setGoFifth(false);
        setGoSixth(false);
        setGoSeventh(false);
    }

    const secondCard = (event) => {
        setCard2(Math.floor(Math.random() * 10) + 1);
        setGoSecond(true);
        event.currentTarget.disabled = true;
    }


    const thirdCard = (event) => {
        setCard3(Math.floor(Math.random() * 10) + 1);
        setGoThird(true);
        event.currentTarget.disabled = true;
    }
    const forthCard = (event) => {
        setCard4(Math.floor(Math.random() * 10) + 1);
        setGoForth(true);
        event.currentTarget.disabled = true;
    }
    const fifthCard = (event) => {
        setCard5(Math.floor(Math.random() * 10) + 1);
        setGoFifth(true);
        event.currentTarget.disabled = true;
    }
    const sixthCard = (event) => {
        setCard6(Math.floor(Math.random() * 10) + 1);
        setGoSixth(true);
        event.currentTarget.disabled = true;
    }
    const seventhCard = (event) => {
        setCard7(Math.floor(Math.random() * 10) + 1);
        setGoSeventh(true);
        event.currentTarget.disabled = true;
    }
  let arrayPlayers = [1,2,3,4,5,6,7,8,9];

let randomArray=Array.from({length: 9}, () => Math.floor(Math.random() * (30 - 12)+12));

let sortedArray = randomArray.sort((a,b)=> {return (a-b)});
let rightNumber = sortedArray.map(num =>{ 
     if (num<=21) {
    return num;
  }});
  let newArray = rightNumber.concat(cardTotal);
 
  let sortedNewArray = newArray.sort((a,b)=>{return (b-a)});  
console.log(cardTotal, sortedNewArray);
 let position = sortedNewArray.indexOf(cardTotal)+1;
console.log(position);

    const quitGame = () => {
console.log(position);

        setView(true)
switch (position) {
    case 1:
      setPlus(plus+30)
        break;
        case 2:
            setPlus(plus+20)
            break;
            case 3:       
            setPlus(plus+10)
                break;
    default:
        break;
}
    }
    useEffect(() => {
        setView(cardTotal > 21 || cardTotal === 21)
    }, [card3, card4, card5, card6, card7])


const joinMoney = () => {
     let newAccount = account;
    setAccount(newAccount + plus)
    setPlus(0)
}
        return (
        <Fragment>
                 
            {(account === 0) && <div className={styles.theEnd}>Better luck in the next game!!!</div>}
            {(account > 0) && <div className={styles.container}>
            <h2>Not over 21</h2>
                <AddPlayers onSavePlayers={saveInfo} newPlay={startGame} />
                <PlayersItem playersInfo={players} />
                <p className={`${box && styles.notView} ${styles.rulesPlay}`}>In this game, the goal is to add the numbers to get the highest possible number that would not
                     be higher than 21. The player can give up if the sum of the numbers exceeds 12 and then compares
                      with the other 9 players whether to have a value closest to 21. The bet per game is $10, the winner
                       wins $30, the second-placed $20, the third-placed the invested money, while the other participants'
                       account is reduced by $10. The maximum is to ask for seven random numbers, and in that case, 
                       if the player did not get more than 21 in total, 
                    the winner is regardless of other results. Your account balance is shown in the bottom-right corner..
                    <br/> Good luck</p>
                <div className={`${view && styles.notView}`}>
                    {message}<br />
                   <p className={styles.card}>{card}</p>
                    {goFirst && (<div><button onClick={secondCard}>Continue?</button><button onClick={quitGame}>Quit?</button></div>)}

                    <p className={`${!goSecond && styles.notView} ${goSecond && styles.going} ${styles.card}`}>{card2} </p><br />
                    {goSecond && (<div><button onClick={thirdCard}>Continue?</button></div>)}
                    <p className={`${!goThird && styles.notView} ${goThird && styles.going} ${styles.card}`}>{card3} </p><br />
                    {goThird && (<div><button onClick={forthCard}>Continue?</button></div>)}
                    <p className={`${!goForth && styles.notView} ${goForth && styles.going} ${styles.card}`}>{card4} </p><br />
                    {goForth && (<div><button onClick={fifthCard}>Continue?</button></div>)}
                    <p className={`${!goFifth && styles.notView} ${goFifth && styles.going} ${styles.card}`}>{card5} </p><br />
                    {goFifth && (<div><button onClick={sixthCard}>Continue?</button></div>)}
                    <p className={`${!goSixth && styles.notView} ${goSixth && styles.going} ${styles.card}`}>{card6} </p><br />
                    {goSixth && (<div><button onClick={seventhCard}>Continue?</button></div>)}
                    <p className={`${!goSeventh && styles.notView} ${goSeventh && styles.going} ${styles.card}`}>{card7} </p><br />
                    {goSecond && (<p className={`${styles.total}`}>{cardView} </p>)}
                </div>
                <div className={`${!view && styles.report}`}>
              

                    <h5>Your result:</h5>
               <p>{(cardView < 21) && cardView}</p>
               <p>{(cardView < 21) &&    
                    <table className="table table-secondary">
                      
                        <tbody>
                            <tr>
                         Players:   {arrayPlayers.map(el=>  <td>{el}</td>)}</tr><tr>
                     Result:  {sortedArray.map(sortedEl=>  
                      <td>
                      <span className={styles.underResult}>{sortedEl<21 && sortedEl}</span>
                      <span className={styles.identResult}> {sortedEl===21 && sortedEl}</span>
                      <span className={styles.overResult}>{sortedEl>21 && sortedEl}</span>

                       </td>)}
                            </tr>
                        </tbody>
                    </table>}</p>

                    <p>{(cardView > 21) && <span style={{color: "red"}}>Sorry, You're over 21.<br />Your bill will be reduced for 10$</span>}</p>
              
                        <p> {(cardView === 21) && <span>You will receive $30 in your account<br />
                        {account} $</span>}</p>
                
                    <button onClick={startAgain}>Try again</button>

                </div>
          <div className={styles.moneyBox}>
          <span>Your stake: {account}$<br/>
                Your gainings: {plus}$</span><br/>
                <button onClick={joinMoney}>Take the money</button>
          </div>
               
            </div>}

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