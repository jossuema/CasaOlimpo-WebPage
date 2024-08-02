import React, {useState} from 'react'
import { login, saveToken, getUser, getToken } from '../api/services/auth';

interface Props {
    toggle: () => void
}

export const Login = ({ toggle }: Props) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({ username: '', password: '' });
    const [loginStatus, setLoginStatus] = useState({ message: '', success: false });

    const validateUsername = () => {
        if (username.trim().length < 3) {
            setErrors(prev => ({ ...prev, username: 'El nombre de usuario debe tener al menos 3 caracteres.' }));
            return false;
        }
        setErrors(prev => ({ ...prev, username: '' }));
        return true;
    };

    const validatePassword = () => {
        if (password.length < 6) {
            setErrors(prev => ({ ...prev, password: 'La contraseña debe tener al menos 6 caracteres.' }));
            return false;
        }
        setErrors(prev => ({ ...prev, password: '' }));
        return true;
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const isUsernameValid = validateUsername();
        const isPasswordValid = validatePassword();
        if (isUsernameValid && isPasswordValid) {
            const response = await login(username, password);
            if (response){
                saveToken({ access_token: response.access_token, token_type: response.token_type });
                setLoginStatus({ message: 'Login exitoso! Redirigiendo...', success: true });
                setTimeout(() => {
                    window.location.href = '/';
                }, 2000);
            }else{
                setLoginStatus({ message: 'Usuario o contraseña incorrectos', success: false });
            }   
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-800 rounded-lg">
            <h2 className="mb-8 text-3xl font-bold text-center text-white">Login</h2>
            <form id="login-form" className="flex flex-col justify-around w-full space-y-6" onSubmit={handleSubmit}>
                <div className="relative mx-auto user-box">
                    <input type="text" id="username" name="username" required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full h-full pt-6 text-white bg-transparent border-none focus:outline-none"
                    />
                    <section className="absolute inset-0 border-b border-white pointer-events-none">
                        <span className="absolute bottom-0 left-0 pb-1 text-white opacity-25 content_name transition-transform transform translate-y-full">
                            Usuario
                        </span>
                    </section>
                    {errors.username && <p className="text-red-500 text-center">{errors.username}</p>}
                </div>
                <div className="relative mx-auto user-box">
                    <input type="password" id="password" name="password" required
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full h-full pt-6 text-white bg-transparent border-none focus:outline-none"
                    />
                    <section className="absolute inset-0 border-b border-white pointer-events-none">
                        <span className="absolute bottom-0 left-0 pb-1 text-white opacity-25 content_name transition-transform transform translate-y-full">
                            Contraseña
                        </span>
                    </section>
                    {errors.password && <p className="text-red-500 text-center">{errors.password}</p>}
                </div>
                <button type="submit"
                    className="self-center px-10 py-2 my-9 font-bold text-white transition-all duration-200 ease-in-out bg-black border-2.5 border-black rounded-md shadow-md hover:bg-gray-600 active:scale-95"
                >
                    Iniciar Sesión
                </button>
                <p id="error-message" className="text-center text-white">No tienes una cuenta? <span onClick={() => toggle()} className="text-blue-500 cursor-pointer">Registrate</span></p>
            </form>
            {loginStatus.message && <p className='text-white opacity-25 content_name transition-transform transform'>{loginStatus.message}</p>}
        </div>
    );
};