import axios from "axios";
import { useEffect, useState } from "react";
import styles from './Produtos.module.scss';

interface listaDeProdutos {
    img: string,
    name: string,
    preco: string,
    ordem: number
}

export default function Produtos() {

    const [listaProdutos, setListaProdutos] = useState<listaDeProdutos[]>([])

    useEffect(() => {
        axios.get('http://localhost:8080/produtos')
            .then(response => {
                setListaProdutos(response.data)
                console.log(response.data)
            })
            .catch(erro => console.log(erro))
    }, [])

    return (
        <ul className={styles.produtos}>
            {listaProdutos.map(produto =>
                <li
                    className={styles.produtos__item}
                    key={produto.ordem}
                >
                    <img className={styles.produtos__imagem} src={produto.img} alt={produto.name} />
                    <div className={styles.produtos__informacao}>
                        <h3 className={styles.produtos__nome}>{produto.name}</h3>
                        <p className={styles.produtos__preco}>R${Number(produto.preco).toFixed(2)}</p>
                        <a className={styles.produtos__compra} href="#">Comprar ➤</a>
                    </div>
                </li>
            )}
        </ul>
    )
}