import { apiURL } from "../api";
import type { Prenda } from "../schemas/prenda";

export const getPrendas = async (skip: number = 0, limit: number = 100): Promise<Prenda[]> => {
    const url = `${apiURL}prendas/?skip=${skip}&limit=${limit}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prendas: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda[] = await response.json();
    return data;
};

export const getPrenda = async (id: number): Promise<Prenda> => {
    const url = `${apiURL}prendas/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prenda: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda = await response.json();
    return data;
};

export const getPrendasByCategory = async (id: number): Promise<Prenda[]> => {
    const url = `${apiURL}prendas/categoria/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prendas by category: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda[] = await response.json();
    return data;
}

export const getPrendasByMarca = async (id: number): Promise<Prenda[]> => {
    const url = `${apiURL}prendas/marca/${id}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prendas by marca: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda[] = await response.json();
    return data;
}

export const getPrendasByCategoryAndMarca = async (idCategoria: number, idMarca: number): Promise<Prenda[]> => {
    const url = `${apiURL}prendas/categoria/${idCategoria}/marca/${idMarca}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prendas by category and marca: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda[] = await response.json();
    return data;
}

export const getPrendasByColor = async (color: string): Promise<Prenda[]> => {
    const url = `${apiURL}prendas/color/${color}`;
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Accept': 'application/json'
      }
    });
  
    if (!response.ok) {
      throw new Error(`Failed to fetch prendas by color: ${response.status} ${response.statusText}`);
    }
  
    const data: Prenda[] = await response.json();
    return data;
}