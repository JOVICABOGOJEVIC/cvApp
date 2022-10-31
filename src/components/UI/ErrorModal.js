import styles from './ErrorModal.module.css';
import ReactDOM from 'react-dom';

const ErrorModal = (props) =>{

const Backdrop = props =>{
    return  <div onClick={props.onClosePopup} className={styles.backdrop} />
}
const OverlayModal = props =>{
    return (
    <div className={styles.modal}>
    <header className={styles.header}><h2>{props.title}</h2></header>
    <div className={styles.content}>
    <p>{props.message}</p>
    </div>
    <footer className={styles.actions}>
        <button onClick={props.onClosePopup}>Okay</button>
    </footer>
</div>
    )
}
return (
    <div>
        {ReactDOM.createPortal(<Backdrop onClick={props.onClosePopup} />, document.getElementById('backdrop-root'))}
        {ReactDOM.createPortal(<OverlayModal
         title={props.title}
         message={props.message}
         onClosePopup={props.onClosePopup}/>,
         document.getElementById('overlay-root')
        )}
    </div>
)
}

export default ErrorModal;