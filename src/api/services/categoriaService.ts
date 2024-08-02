import { apiURL } from "../api";
import type { CategoriaPrenda } from "../schemas/prenda";

export const getCategorias = async (): Promise<CategoriaPrenda[]> => {
    const url = `${apiURL}categorias`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch categorias: ${response.status} ${response.statusText}`);
    }
  
    const data: CategoriaPrenda[] = await response.json();
    return data;
};

export const getCategoria = async (id: number): Promise<CategoriaPrenda> => {
    const url = `${apiURL}categorias/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch categoria: ${response.status} ${response.statusText}`);
    }
  
    const data: CategoriaPrenda = await response.json();
    return data;
};

export const buscarCategoria = async (nombre: string): Promise<CategoriaPrenda>  => {
    const categorias = await getCategorias();
    
    const categoria = categorias.find((categoria) => categoria.nombre_categoria === nombre);
    if (!categoria) {
        throw new Error(`Categoria not found: ${nombre}`);
    }

    return categoria;
}

