import Produtos from './Produtos';
import styles from './Ofertas.module.scss';

export default function Ofertas () {
    return(
        <section className={styles.ofertas}>
            <p className={styles.ofertas__frase}>Conheça nossas</p>
            <h2 className={styles.ofertas__titulo}>ofertas</h2>
            <Produtos />
        </section>
    )
}