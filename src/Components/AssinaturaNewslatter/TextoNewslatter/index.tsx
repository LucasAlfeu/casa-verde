import styles from './TextoNewslatter.module.scss';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import useEmail from 'Hook/useEmail';

const TextoNewslatter = () => {
    const {setEmail, emailValido, erro, validaEmail} = useEmail() 

    return (
        <section className={styles.texto}>
            <p className={styles.texto__frase}>Sua casa com as </p>
            <h2 className={styles.texto__titulo}>melhores plantas</h2>
            <p className={styles.texto__paragrafo}>
                Encontre aqui uma vasta seleção de plantas para decorar a
                sua casa e torná-lo uma pessoa mais feliz no seu dia a dia.
                Entre com seu e-mail e assine nossa newsletter para saber
                das novidades da marca.
            </p>
            <form className={styles.formulario} onSubmit={validaEmail}>
                <input
                    className={styles.formulario__input}
                    onChange={evento => setEmail(evento.target.value)}
                    placeholder='Insira seu e-mail'
                />
                <button
                    className={styles.formulario__botao}
                >
                    Assinar Newslatter
                </button>
            </form>
            {emailValido === false && <p className={styles.erro}>{erro}</p>}
            <ToastContainer />
        </section>
    )
}

export default TextoNewslatter