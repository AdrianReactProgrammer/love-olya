import preloader from './preloader.svg'
import styles from './Preloader.module.css'

const Preloader = (props) => {

  return <div className={styles.preloaderContainer}>
    <img src={props.isFetching ? preloader : null} className={styles.preloader} width={props.width} />
  </div>
}

export default Preloader

