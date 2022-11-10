import styles from './Popup.module.css';
import MyImage from '../../images/cvImage.png';

const Popup = () => {
    return (
        <div className={styles.popup}>
            <div className={styles.myHeader}>
                <span>Interests:</span>
                <i className="fa fa-anchor"></i> 
                <i className="fa fa-wrench"></i>
                <i className="fa fa-tree"></i>
                <i className="fa fa-bicycle"></i>
                <i className="fa fa-road"></i>
                <i className="fa-solid fa-music"></i>
                <i className="fa fa-futbol-o"></i>
        </div>
            <hr />
            <div className={styles.myContent}>
                <div className={styles.leftBox}>
                    <h3>Hello, my name is <br />
                        Jovica Bogojevic
                        <p>I am a <strong>JavaScript/React </strong>developer</p>
                        <a className='btn btn-secondary' href="mailto:jovicabogojevic@hotmail.rs">Contact me</a>
                       </h3>
                            <a href='https://github.com/JOVICABOGOJEVIC/' style={{color:'black', padding:'5%', fontSize:'1.4em'}}>
                            <i className="fa fa-github"></i>
                            </a>
                      
                        <a href='https://www.facebook.com/jovica.bogojevic.3' style={{color:'black', padding:'5%', fontSize:'1.4em'}}>
                        <i className="fa fa-facebook-square"></i>
                        </a>


                </div>
                <div className={styles.rightBox}>
                    <img src={MyImage} alt="cv_image" className='img' />
                </div>
              

            </div>
            <div className={styles.bottom}>
            <b>My goal is become part of the company where I can utilize and improve my skils and gain more
                    knowledge while enhancing the company's productivity and reputation.
                </b>
            </div>
        </div>
    )
}

export default Popup;
