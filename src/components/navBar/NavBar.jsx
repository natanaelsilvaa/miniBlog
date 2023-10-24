import styles from "./NavBar.module.css"
import { NavLink } from "react-router-dom"


const NavBar = () => {
  return (
    <nav className={styles.navBar}>

      <NavLink to={"/"} className={styles.brand}>
        <span>miniBlog</span>
      </NavLink>

      <ul className={styles.links_list}>
        <li>
          <NavLink to={'/'} className={({ isActive }) => (isActive ? styles.active : "")}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={'/abount'} className={({ isActive }) => (isActive ? styles.active : "")}>
            Abount
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar