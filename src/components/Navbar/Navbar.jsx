import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'
import { Logo } from '../Logo/Logo'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/">Hjem</NavLink></li>
                <li><NavLink to="lawyers">Advokaterne</NavLink></li>
                <li><NavLink to="about">Om LeoLov</NavLink></li>
                <li><NavLink to="contact">Kontakt</NavLink></li>
            </ul>
            <Logo />
        </nav>
    )
}