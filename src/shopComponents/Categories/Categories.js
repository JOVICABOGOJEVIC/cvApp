import styles from './Categories.module.css';

const Categories = () =>{
return(
    <div className="container-fluid">
        <h5 className={styles.headingStyle}>Kategorije</h5>
  <div className="row">
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
    <div className="col-sm">
      One of three columns
    </div>
  </div>
</div>
)
}

export default Categories;