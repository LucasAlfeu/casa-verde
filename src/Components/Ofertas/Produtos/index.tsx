import styles from './Produtos.module.scss';
import BotaoFiltros from './BotaoFiltros';
import useFiltros from 'Hook/useFiltros';

export default function Produtos() {

    const {produtos, filtrarPorNome, filtrarPorPreco, limparFiltros} = useFiltros()

    return (
        <>
            <div className={styles.filtros}>
                <h2 className={styles.filtros__titulo}>Filtrar por:</h2>

                <BotaoFiltros nome='Nome' funcaoDeFiltrar={filtrarPorNome} />
                <BotaoFiltros nome='Preço' funcaoDeFiltrar={filtrarPorPreco}/>
                <BotaoFiltros nome='Sem Filtro' funcaoDeFiltrar={limparFiltros}/>                

            </div>
            <ul className={styles.produtos}>
                {produtos.map(produto =>
                    <li
                        className={styles.produtos__item}
                        key={produto.ordem}
                    >
                        <img className={styles.produtos__imagem} src={produto.img} alt={produto.name} />
                        <div className={styles.produtos__informacao}>
                            <h3 className={styles.produtos__nome}>{produto.name}</h3>
                            <p className={styles.produtos__preco}>R$ {Number(produto.preco).toFixed(2)}</p>
                            <a className={styles.produtos__compra} href="#">Comprar ➤</a>
                        </div>
                    </li>
                )}
            </ul>
        </>
    )
}