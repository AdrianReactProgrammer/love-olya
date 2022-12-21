import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = (props) => {
  return (
    <div className={styles.underNavbar}>
      <div className={styles.navbar} >
        <NavLink to="/WhyILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Почему я тебя люблю</NavLink><br />
        <NavLink to="/HowILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Как сильно я тебя люблю</NavLink><br />
        {/* <NavLink to="/HowYouEditMe" className={navData => navData.isActive ? styles.active : styles.item} >Как ты изменила меня</NavLink><br /> */}
        <span className={styles.jmai} >(жмай)</span>
      </div>
    </div>
  )
}

export default Navbar