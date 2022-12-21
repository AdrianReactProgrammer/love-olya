import { NavLink } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = (props) => {
  return (
    <div className={styles.underNavbar}>
      <div className={styles.navbar} >
        <NavLink to="/WhyILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Почему я тебя люблю?</NavLink><br />
        <NavLink to="/HowILoveYou" className={navData => navData.isActive ? styles.active : styles.item} >Как сильно я тебя люблю?</NavLink>
        <div>123</div>
        <div>111</div>
        <div>232</div>
        <div>542</div>
        <div>123</div>
        <div>234</div>
        <div>334</div>
        <div>533</div>
        <div>653</div>
        <div>134</div>
      </div>
    </div>
  )
}

export default Navbar