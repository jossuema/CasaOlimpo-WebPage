import { apiURL } from "../api";
import type { MarcaPrenda } from "../schemas/prenda";

export const getMarcas = async (): Promise<MarcaPrenda[]> => {
    const url = `${apiURL}marcas`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch marcas: ${response.status} ${response.statusText}`);
    }
  
    const data: MarcaPrenda[] = await response.json();
    return data;
};

export const getMarca = async (id: number): Promise<MarcaPrenda> => {
    const url = `${apiURL}marcas/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch marca: ${response.status} ${response.statusText}`);
    }
  
    const data: MarcaPrenda = await response.json();
    return data;
};

export const buscarMarca = async (nombre: string): Promise<MarcaPrenda>  => {
    const marcas = await getMarcas();
    
    const marca = marcas.find((marca) => marca.nombre_marca === nombre);
    if (!marca) {
        throw new Error(`Marca not found: ${nombre}`);
    }

    return marca;
}