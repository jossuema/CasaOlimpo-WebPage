import { productos } from "../../data/data";

export interface Producto{
    id: number;
    nombre: string;
    descripcion: string;
    precio: number;
    marca: string;
    img_url: string;
    categorias: string[];
}

export const fetchData = (): Producto[] => {
    return productos;
}


export const fetchProductsByCategory = (category: string): Producto[] => {
    return productos.filter((producto) => producto.categorias.includes(category));
}

