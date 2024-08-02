export interface Cliente {
    id_usuario: number;
    cedula_cliente: string;
    primer_nombre_cliente: string;
    segundo_nombre_cliente: string;
    primer_apellido_cliente: string;
    segundo_apellido_cliente: string;
    direccion_cliente: string;
    ciudad_cliente: string;
    correo_cliente: string;
}

interface RolCliente {
    nombre_rol: string;
    descripcion_rol: string;
    id_rol: number;
}

interface UsuarioCliente {
    id_rol: number;
    username_usuario: string;
    clave_usuario: string;
    email_usuario: string;
    id_usuario: number;
    rol: RolCliente;
}

// Interfaz principal para el Cliente
export interface ClienteResponse {
    id_usuario: number;
    cedula_cliente: string;
    primer_nombre_cliente: string;
    segundo_nombre_cliente: string;
    primer_apellido_cliente: string;
    segundo_apellido_cliente: string;
    direccion_cliente: string;
    ciudad_cliente: string;
    correo_cliente: string;
    id_cliente: number;
    usuario: UsuarioCliente;
    usuario_nombre: string;
    usuario_rol: string;
}