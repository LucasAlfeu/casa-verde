import styles from './BotaoFiltros.module.scss'
import ClassNames from 'classnames'

interface IBotaoFiltros {
    nome: string
    funcaoDeFiltrar: any
}

export default function BotaoFiltros({ nome, funcaoDeFiltrar }: IBotaoFiltros) {
    return (
        <button
            onClick={funcaoDeFiltrar}
            className={ClassNames({
                [styles.nome]: nome === 'Nome',
                [styles.preco]: nome === 'Preço',
                [styles.semFiltro]: nome === 'Sem Filtro'
            })}
        >
            {nome}
        </button>
    )
}