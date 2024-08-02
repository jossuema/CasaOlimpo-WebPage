export interface userCreate {
    username_usuario: string;
    clave_usuario: string;
    email_usuario: string;
}

export interface user {
    id_usuario: number;
    username_usuario: string;
    email_usuario: string;
    id_rol: number;
}