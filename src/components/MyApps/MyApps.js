import styles from  './MyApps.module.css';
import { Link } from 'react-router-dom';
const MyApps = () =>{
return( 
     <table className={styles.tableApp}>
        <tr>
            <td><a href='https://feitiansuye.com/'>Feitiansuye</a><p>in prepering(90%)</p><br/></td>
            <td><a href='http://aptus.rs/'>Aptus</a><p>is finished...</p><br/></td>
            <td><a href="https://jovicabogojevic.github.io/BlicQuiz/">MyQuizApp</a><p>is finished...</p></td>
            <td><a href="https://jovicabogojevic.github.io/WaterApp/">MyWaterApp</a><p>in prepering(80%)</p></td>
       
        </tr>
        <tr>
            <td><Link to='/app5'>MyCardApp</Link> <p>in prepering(40%)</p><br/></td>
            <td> <Link to='/app1'>MyWorkersApp</Link> <p>in prepering(20%)</p><br/></td>
            <td><Link to='/app1'>App7</Link><br/><p>not started</p></td>
            <td><Link to='/app1'>App8</Link><br/><p>not started</p></td>
        </tr>
        <tr>
            <td><Link to='/'>App9</Link><br/><p>not started</p></td>
            <td><Link to='/'>App10</Link><br/><p>not started</p></td>
            <td><Link to='/'>App11</Link><br/><p>not started</p></td>
            <td><Link to='/'>App12</Link><br/><p>not started</p></td>
        </tr>
      </table>
      )
 }

export default MyApps;