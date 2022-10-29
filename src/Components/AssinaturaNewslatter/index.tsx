import styles from './AssinaturaNewslatter.module.scss';
import TextoNewslatter from './TextoNewslatter';
import { ReactComponent as PlantaNweslatter } from 'assets/plantaNewslatter.svg';
import { ReactComponent as Mancha } from 'assets/mancha.svg';

const AssinaturaNewslatter = () => {
    return (
        <section className={styles.newslatter}>
            <TextoNewslatter/>
            <PlantaNweslatter className={styles.newslatter__planta}/>
            <Mancha className={styles.newslatter__mancha} />
        </section>
    )
}

export default AssinaturaNewslatter