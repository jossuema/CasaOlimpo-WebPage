import { apiURL } from "../api";
import type { Cliente, ClienteResponse } from "../schemas/cliente";
import type { Token } from "../schemas/token";

export const getCliente = async ({access_token, token_type}: Token) => {
    const response = await fetch(`${apiURL}clientes/`, {
        headers: {
        "Authorization": `${token_type} ${access_token}`,
        },
    });
    
    if (!response.ok) {
        throw new Error("Failed to get cliente");
    }
    
    const data: ClienteResponse = await response.json();
    return data;
}

export const saveCliente = async (cliente: Cliente) => {
    const response = await fetch(`${apiURL}clientes/`, {
        method: "POST",
        headers: {
        "Content-Type": "application/json",
        },
        body: JSON.stringify(cliente),
    });
    
    if (!response.ok) {
        throw new Error("Failed to save cliente");
    }
    
    const data: ClienteResponse = await response.json();
    return data;
}
