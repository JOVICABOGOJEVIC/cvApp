import { Fragment, useState } from 'react';
import styles from './DisplayHome.module.css';
import Popup from './Popup';
import { Link } from 'react-router-dom';


const DisplayHome = () =>{
    const [isPopup1, setPopup1] = useState();
    const [isPopup2, setPopup2] = useState();
    const [isPopup3, setPopup3] = useState();
    const [isPopup4, setPopup4] = useState();

    return(
        <Fragment>
                <div className={styles.myContent}>
        <div className={styles.leftSide}>
        <h1>Personal <br/><span className={styles.myPortfolio}> Portofolio Website</span> </h1>
        <div className={styles.myInformation}>
        
        <i className="fa fa-address-card"
        onMouseEnter={() => setPopup1(true)} 
        onMouseLeave={() => setPopup1(false)}></i>
        <i class="fa fa-graduation-cap"
        onMouseEnter={() => setPopup2(true)} 
        onMouseLeave={() => setPopup2(false)}></i>
        <i class="fa fa-briefcase"
        onMouseEnter={() => setPopup3(true)} 
        onMouseLeave={() => setPopup3(false)}></i>
        <i class="fa fa-rocket"
        onMouseEnter={() => setPopup4(true)} 
        onMouseLeave={() => setPopup4(false)}></i>
        </div>
        
      
        {isPopup1 && (   <div className={styles.myPopup}>
       
        <table class="table table-secondary">
  <tbody>
            <tr>
      <td>
        I was born in 1984 in Zrenjanin, 
        where I finished my secondary school.
         After finishing secondary school, I worked as an appliance repairman in close contact with people,
          for several years, and that is how I gained excellent communication skills.
          I have completed several web programming courses, 
          and I have behind me several successfully completed projects.
           The courses I finished are: Frontend courses in Udemy, Krojaceva Skola, where I made
          custom websites using: JavaScript, HTML, CSS, as well as in working frameworks like:
           React, Bootstrap and I used as needed Express and MongoDB. 
           </td>
           </tr>
           </tbody>
           </table>
       </div> )}
       {isPopup2 && (   <div className={[styles.myPopup]}>
            
            <table class="table table-secondary">
  <tbody>
            <tr>
      <td> School of Electrical Engineering
          <br/>
            'Nikola Tesla' - Zrenjanin</td>
            </tr><tr>
      <td>Practice work </td></tr><tr>
      <td>Web programming courses</td>
    </tr>
    </tbody>
            </table>
        </div>)}
        {isPopup3&& (   <div className={[styles.myPopup]}>
            <span className={styles.myPopup3}>
            <table class="table table-secondary">
  <tbody>
    <tr>
      <th scope="row">2009-2018 Jul</th>
      <td>Services </td>
      <td>Appliance repairman</td>
    </tr>
    <tr>
      <th scope="row">2018-2021 Oct </th>
      <td>Metronik inzenjering</td>
      <td>Service Application Engineer</td>
    </tr>
    <tr>
      <th scope="row">2021-2022 Jan </th>
      <td>New Frontier Group</td>
      <td>Practical Work</td>
    </tr>
    <tr>
      <th scope="row">2022-2022 Cur </th>
      <td>Smart Web</td>
      <td>Junior Frontend Developer</td>
    </tr>
  </tbody>
</table>
        </span>
        </div>)}
        {isPopup4&& (   <div className={[styles.myPopup]}>
            <span className={styles.myPopup4}>
                
                
            <table class="table table-secondary">
            <tbody>
    <tr>
      <td scope="row">Skills</td>
      <td scope="row">Time (h)</td>
      <td scope="row">Srb</td>
      <td scope="row">Eng</td>
    </tr>
  
  
  
    <tr>
      <td scope="row">HTML</td>
      <td>~900 </td>
      <td>Krojaceva Skola </td>
      <td>Udemy</td>
    </tr>
    <tr>
      <td scope="row">CSS</td>
      <td>~600</td>
      <td>Danilo Vesovic</td>
      <td>Udemy</td>
    </tr>
    <tr>
      <td scope="row">JavaScript</td>
      <td>~700</td>
      <td>Krojaceva Skola</td>
      <td>Maximilian Schwarzmüller</td>
    </tr>
    <tr>
      <td scope="row">React</td>
      <td>~350</td>
      <td>Danilo Vesovic</td>
      <td>Maximilian Schwarzmüller</td>
    </tr>
  </tbody>
</table>
            </span>
        </div>)}
        </div>
        <div className={styles.rightSide}>
            <Link to='/myapps'>
            <div className={styles.myApp}>
            <h2>My Apps and Sites</h2>
            <i class="fa-solid fa-arrow-right-long"></i>
            </div>
            </Link>
            <div className={styles.myFamily}>
            <i class="fa fa-female"></i>
            <i class="fa fa-male"></i>
            <i class="fa fa-male"></i>
            <i class="fa fa-male"></i>
            <i class="fa fa-male"></i>
            </div>
           
        </div>
       <Popup />

        </div>
        <div className={styles.footer}>
            <hr className={styles.hrFooter}/>
        <ul>
                <li>Address: Kopaonicka 10, Beograd</li>
                <li>Phone: <a href="tel:+381600301207">+381(60)0301207</a></li>
                <li>E-mail: <a href="mailto:jovicabogojevic@hotmail.rs">jovicabogojevic@hotmail.rs</a></li>
                <li>Born: 18.02.1984.</li>
            </ul>
        </div>
        </Fragment>
    )
}

export default DisplayHome;