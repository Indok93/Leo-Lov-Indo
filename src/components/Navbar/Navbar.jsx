import { NavLink } from 'react-router-dom'
import styles from './Navbar.module.scss'

export const NavBar = () => {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li><NavLink to="/">hjem</NavLink></li>
                <li><NavLink to="lawyers">advokaterne</NavLink></li>
                <li><NavLink to="about">Om LeoLov</NavLink></li>
                <li><NavLink to="contact">kontakt</NavLink></li>
            </ul>
            <div>
                <p>Leo<span>-Lov</span></p>
            </div>
        </nav>
    )
}