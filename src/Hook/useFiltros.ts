import { listaDePlantas } from "data/listaDePlantas";
import { useState } from "react";

export default function useFiltros(){
    const [produtos, setProdutos] = useState<{ name: string; preco: number; img: string; ordem: number; }[]>([...listaDePlantas])

    const filtrarPorNome = () => {
        const listaDePlantasOrdenadaPorNome = produtos.sort(function (produto1, produto2) {
            if (produto1.name > produto2.name) {
              return 1;
            }
            if (produto1.name < produto2.name) {
              return -1;
            }
            return 0;
        })
        setProdutos([...listaDePlantasOrdenadaPorNome])
    }
    const filtrarPorPreco = () => {
        const listaDePlantasOrdenadaPorPreco = produtos.sort(function (produto1, produto2){
            return produto1.preco - produto2.preco
        })
       setProdutos([...listaDePlantasOrdenadaPorPreco])
    }
    const limparFiltros = () => {
        setProdutos([...listaDePlantas])
    }
    return {
        produtos,
        filtrarPorNome,
        filtrarPorPreco,
        limparFiltros
    }
}