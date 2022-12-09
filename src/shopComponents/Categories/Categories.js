import styles from './Categories.module.css';
import Image1 from '../../images/bela_tehnika.jpeg';
import Image2 from '../../images/mali_aparati.jpeg';
import Image3 from '../../images/escajg.jpeg';
import Image4 from '../../images/posudje.jpeg';

const Categories = () => {
    return (
        <div className="container-fluid">
            <h5 className={styles.headingStyle}>Kategorije</h5>
            <div className="row">
                        <div className="col-md-6 col-xl-3  ">
                            <div className="box">
                            <img src={Image1} className={styles.image} alt='bela_tehnika' />
                            <div className={styles.boxParagraph}>
                            <p>Bela tehnika</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 ">
                        <div className="box">
                            <img src={Image2} className={styles.image} alt='mali_kucni_aparati' />
                            <div className={styles.boxParagraph}>
                            <p>Mali kucni aparati</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 ">
                        <div className="box">
                            <img src={Image3} className={styles.image} alt='escajg' />
                            <div className={styles.boxParagraph}>
                            <p>Escajg</p>
                            </div>
                            </div>
                        </div>
                        <div className="col-md-6 col-xl-3 ">
                        <div className="box">
                            <img src={Image4} className={styles.image} alt='posudje' />
                            <div className={styles.boxParagraph}>
                            <p>Posudje</p>
                            </div>
                            </div>
                        </div>
                    </div>
               
                </div>
    )
}

export default Categories;