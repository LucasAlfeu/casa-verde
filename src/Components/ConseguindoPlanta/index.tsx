import styles from './ConseguindoPlanta.module.scss';
import { ReactComponent as CirculoAmarelo } from 'assets/circuloAmarelo.svg'

export default function ConseguindoPlanta () {
    return(
        <section className={styles.conseguindoPlantas}>
            <div className={styles.conseguindoPlantas__imagem}></div>
            <div className={styles.conseguindoPlantas__container}>
                <p className={styles.conseguindoPlantas__frase}>Como conseguir</p>
                <h2 className={styles.conseguindoPlantas__titulo}>minha planta</h2>
                <ul className={styles.conseguindoPlantas__lista}>
                    <li className={styles.conseguindoPlantas__item}><CirculoAmarelo className={styles.conseguindoPlantas__circuloAmarelo} /> Escolha suas plantas</li>
                    <li className={styles.conseguindoPlantas__item}><CirculoAmarelo className={styles.conseguindoPlantas__circuloAmarelo} /> Faça seu pedido</li>
                    <li className={styles.conseguindoPlantas__item}><CirculoAmarelo className={styles.conseguindoPlantas__circuloAmarelo} /> Espere na sua casa</li>
                </ul>
            </div>
        </section>
    )
}