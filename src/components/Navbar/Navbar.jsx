import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/">Forside</NavLink></li>
                <li><NavLink to="about">Om os</NavLink></li>
            </ul>
        </nav>
    )
}