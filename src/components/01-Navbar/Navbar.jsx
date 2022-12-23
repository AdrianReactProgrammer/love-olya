import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = (props) => {
  return (
    <div className={styles.underNavbar}>
      <div className={styles.navbar} >
        <NavLink to="/WhyILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Почему я тебя люблю</NavLink><br />
        <NavLink to="/HowILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Как сильно я тебя люблю</NavLink><br />
        <NavLink to="/HowIFuckYou" className={navData => navData.isActive ? styles.fuckActive : styles.fuckItem} >&#129397;Как я тебя трахну&#129397;</NavLink><br />
        <span className={styles.jmai} >(жмай)</span>
      </div>
    </div>
  )
}

export default Navbar