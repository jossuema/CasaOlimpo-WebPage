export interface CategoriaPrenda {
    nombre_categoria: string;
    descripcion_categoria: string;
    id_categoria: number;
}

export interface MarcaPrenda {
    nombre_marca: string;
    descripcion_marca: string;
    id_marca: number;
}

export interface Prenda {
    id_categoria: number;
    id_marca: number;
    nombre_prenda: string;
    descripcion_prenda: string;
    talla_prenda: string;
    color_prenda: string;
    precio_prenda: number;
    img_prenda: string;
    id_prenda: number;
    categoria: CategoriaPrenda;
    marca: MarcaPrenda;
}
