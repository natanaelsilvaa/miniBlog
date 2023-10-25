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
          <NavLink to={'/login'} className={({ isActive }) => (isActive ? styles.active : "")}>
            Entrar
          </NavLink>
        </li>
        <li>
          <NavLink to={'/register'} className={({ isActive }) => (isActive ? styles.active : "")}>
            Cadastro
          </NavLink>
        </li>
        <li>
          <NavLink to={'/abount'} className={({ isActive }) => (isActive ? styles.active : "")}>
            Sobre
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default NavBar