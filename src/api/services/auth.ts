import { apiURL } from "../api";
import type { Token } from "../schemas/token";
import type { userCreate } from "../schemas/user";

export const login = async (email: string, password: string): Promise<any> => {
  console.log(email, password);

  const details: Record<string, string> = {
      'grant_type': 'password',
      'username': email,
      'password': password,
      'scope': '',
      'client_id': '',
      'client_secret': ''
  };

  let formBody: string[] = [];
  for (const property in details) {
      const encodedKey = encodeURIComponent(property);
      const encodedValue = encodeURIComponent(details[property]);
      formBody.push(encodedKey + "=" + encodedValue);
  }
  const encodedFormBody = formBody.join("&");

  const response = await fetch('http://localhost:8000/token', {
      method: "POST",
      headers: {
          "Content-Type": "application/x-www-form-urlencoded"
      },
      body: encodedFormBody
  });

  if (response.status === 401) {
      console.error("Invalid credentials");
      throw new Error("Invalid credentials");  // Es útil lanzar un error para manejarlo más adelante.
  }

  return response.json();
};

export const register = async ({email_usuario, clave_usuario, username_usuario}: userCreate) => {
  const response = await fetch(`${apiURL}usuarios`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({email_usuario, clave_usuario, username_usuario}),
  });

  if (!response.ok) {
    throw new Error("Failed to register");
  }

  return response.json();
}

export const getUser = async ({access_token, token_type}: Token) => {
  const response = await fetch(`http://localhost:8000/users/me`, {
    headers: {
      "Authorization": `${token_type} ${access_token}`,
    },
  });

  if (!response.ok) {
    throw new Error("Failed to get user");
  }

  return response.json();
}

export const getUsuarioAutenticado = async () => {
  const token = await getToken();
  if (!token) {
    return null;
  }

  return getUser(token);
}

export const saveToken = (token: Token) => {
  localStorage.setItem("token", JSON.stringify(token));
}

export const getToken = (): Token | null => {
  const token = localStorage.getItem("token");

  if (!token) {
    return null;
  }

  return JSON.parse(token);
}

export const removeToken = () => {
  localStorage.removeItem("token");
}

export const isLoggedIn = () => {
  return !!getToken();
}

export const logout = () => {
  removeToken();
}