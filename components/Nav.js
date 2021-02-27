
import Link from 'next/link';
import navStyles from '../styles/Nav.module.scss';


const Nav = () => {
    return (
        <nav className={navStyles.nav}>
            <ul>
                <li>
                    <Link href='/'>Home</Link>
                </li>
                <li>
                    <Link href='/about'>About</Link>
                </li>
                <li>
                    <Link href='/material_ui'>Material Ui Examples</Link>
                </li>
                <li>
                    <Link href='/bootstrap_examples'>Bootstrap Examples</Link>
                </li>
            </ul>

        </nav>
    )
}

export default Nav
