import styles from  './MyApps.module.css';
import { Link } from 'react-router-dom';
const MyApps = () =>{
return( 
     <table className={styles.tableApp}>
          <tr>
          <td><Link to='/app7'>MyShopApp</Link><br/><p>in prepering(20%)</p></td>
            <td><Link to='/app5'>MyCardApp</Link> <p>in prepering(70%)</p><br/></td>
            <td><a href="https://jovicabogojevic.github.io/BlicQuiz/">MyQuizApp</a><p>is finished...</p></td>
            <td><a href="https://jovicabogojevic.github.io/WaterApp/">MyWaterApp</a><p>in prepering(80%)</p></td>
        </tr>
        <tr>
            <td><a href='https://feitiansuye.com/'>Feitiansuye</a><p>in prepering(90%)</p><br/></td>
            <td><a href='http://aptus.rs/'>Aptus</a><p>is finished...</p><br/></td>
            <td> <Link to='/app7'>MyApp7</Link> <p>in prepering(20%)</p><br/></td>
            <td><Link to='/app8'>MyApp8</Link><br/><p>in prepering(50%)</p></td>
        </tr>
      </table>
      )
 }

export default MyApps;