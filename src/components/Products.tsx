import React, {useEffect, useState} from 'react'
import CardProduct from './CardProduct'
import type { Prenda } from '../api/schemas/prenda'
import { getPrendas, getPrendasByMarca, getPrendasByCategory } from '../api/services/prendaService'
import { buscarMarca } from '../api/services/marcaService'
import { buscarCategoria } from '../api/services/categoriaService'

interface ProductsProps {
    marca?: string;
    categoria?: string;        
}

export const Products = ({marca, categoria}: ProductsProps) => {
    const [prendas, setPrendas] = useState<Prenda[]>([]);

    useEffect(() => {
        const getPrendasLista = async () => {
            if (categoria) {
                const Categoria = await buscarCategoria(categoria);
                const response = await getPrendasByCategory(Categoria.id_categoria);
                console.log(response);
                setPrendas(response);
                return;
            }
            if (marca) {
                const Marca = await buscarMarca(marca);
                const response = await getPrendasByMarca(Marca.id_marca);
                console.log(response);
                setPrendas(response);
                return;
            }
            const response = await getPrendas();
            console.log(response);
            setPrendas(response);
        }
        getPrendasLista();
    }, []);

  return (
    <>
        {prendas.map((product) => (
            <CardProduct prenda={product} />
        ))}
    </>
  )
}
