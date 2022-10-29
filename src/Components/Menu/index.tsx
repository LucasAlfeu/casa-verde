import styles from './Menu.module.scss';
import { ReactComponent as Logo } from 'assets/logo.svg'
import NavBar from './NavBar';

const Menu = () => {
    return(
        <header className={styles.cabecalho}>
            <Logo />
            <NavBar />
        </header>
    )
}

export default Menu