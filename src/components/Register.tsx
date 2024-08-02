import React, {useState} from 'react'
import { register } from '../api/services/auth';

interface Props {
    toggle: () => void
}

export const Register = ({ toggle }: Props) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const validateForm = () => {
        if (!username.trim() || username.length < 3) {
            setError('El nombre de usuario debe tener al menos 3 caracteres.');
            return false;
        }
        if (!email.includes('@')) {
            setError('Introduce un correo electrónico válido.');
            return false;
        }
        if (password.length < 6) {
            setError('La contraseña debe tener al menos 6 caracteres.');
            return false;
        }
        if (password !== confirmPassword) {
            setError('Las contraseñas no coinciden.');
            return false;
        }
        setError('');
        return true;
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (validateForm()) {
            alert('Registrando...');
            try{
                const response = register({email_usuario: email, clave_usuario: password, username_usuario: username});
                console.log(response);
            }catch(error){
                console.error(error);
            }
        }
    };

    return (
        <div className="flex flex-col items-center justify-center p-5 bg-gray-800 rounded-lg">
            <h2 className="mb-8 text-3xl font-bold text-center text-white">Registro de Cuenta</h2>
            <form id="register-form" className="flex flex-col justify-around w-full space-y-6" onSubmit={handleSubmit}>
                <div className="relative mx-auto user-box">
                    <input type="text" id="username" name="username" required
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full h-full pt-6 text-white bg-transparent border-none focus:outline-none"
                    />
                    <section className="absolute inset-0 border-b border-white pointer-events-none">
                        <span className="absolute bottom-0 left-0 pb-1 text-white opacity-25 content_name transition-transform transform translate-y-full">
                            Nombre de Usuario
                        </span>
                    </section>
                    {error.includes('usuario') && <p className="text-red-500 text-center">{error}</p>}
                </div>
                <div className="relative mx-auto user-box">
                    <input type="email" id="email" name="email" required
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        className="w-full h-full pt-6 text-white bg-transparent border-none focus:outline-none"
                    />
                    <section className="absolute inset-0 border-b border-white pointer-events-none">
                        <span className="absolute bottom-0 left-0 pb-1 text-white opacity-25 content_name transition-transform transform translate-y-full">
                            Email
                        </span>
                    </section>
                    {error.includes('correo') && <p className="text-red-500 text-center">{error}</p>}
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
                    {error.includes('contraseña') && <p className="text-red-500 text-center">{error}</p>}
                </div>
                <div className="relative mx-auto user-box">
                    <input type="password" id="confirm-password" name="confirm-password" required
                        value={confirmPassword}
                        onChange={e => setConfirmPassword(e.target.value)}
                        className="w-full h-full pt-6 text-white bg-transparent border-none focus:outline-none"
                    />
                    <section className="absolute inset-0 border-b border-white pointer-events-none">
                        <span className="absolute bottom-0 left-0 pb-1 text-white opacity-25 content_name transition-transform transform translate-y-full">
                            Confirmar Contraseña
                        </span>
                    </section>
                    {error.includes('coinciden') && <p className="text-red-500 text-center">{error}</p>}
                </div>
                <button type="submit"
                    className="self-center px-10 py-2 font-bold text-white transition-all duration-200 ease-in-out bg-black border-2.5 border-black rounded-md shadow-md hover:bg-gray-600 active:scale-95">
                    Registrarse
                </button>
                <p className="text-center text-white">¿Ya tienes una cuenta? <span onClick={toggle} className="text-blue-500 cursor-pointer">Inicia Sesión</span></p>
            </form>
        </div>
    );
};
