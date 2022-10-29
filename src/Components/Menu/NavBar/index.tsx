import styles from './NavBar.module.scss';

const NavBar = () => {
    return(
        <nav className={styles.navegacao}>
            <ul className={styles.navegacao__lista}>
                <li className={styles.navegacao__item}>Como fazer</li>
                <li className={styles.navegacao__item}>/</li>
                <li className={styles.navegacao__item}>Ofertas</li>
                <li className={styles.navegacao__item}>/</li>
                <li className={styles.navegacao__item}>Depiomentos</li>
                <li className={styles.navegacao__item}>/</li>
                <li className={styles.navegacao__item}>Videos</li>
                <li className={styles.navegacao__item}>/</li>
                <li className={styles.navegacao__item}>Meu Carrinho</li>
            </ul>
        </nav>
    )
}

export default NavBar