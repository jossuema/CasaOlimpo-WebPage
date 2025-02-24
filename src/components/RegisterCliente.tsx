import React, { useState } from 'react';

interface Cliente {
  cedula_cliente: string;
  primer_nombre_cliente: string;
  segundo_nombre_cliente: string;
  primer_apellido_cliente: string;
  segundo_apellido_cliente: string;
  direccion_cliente: string;
  ciudad_cliente: string;
}

export const RegisterCliente: React.FC = () => {
    const [cliente, setCliente] = useState<Cliente>({
        cedula_cliente: '',
        primer_nombre_cliente: '',
        segundo_nombre_cliente: '',
        primer_apellido_cliente: '',
        segundo_apellido_cliente: '',
        direccion_cliente: '',
        ciudad_cliente: ''
    });
    const [error, setError] = useState<string>('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setCliente(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Datos del cliente:", cliente);
        // Aquí enviarías los datos a una API
        setError('Cliente registrado con éxito!');
    };

    return (
        <div className="flex flex-col items-center justify-center p-10 bg-gray-800 rounded-lg">
            <h2 className="mb-8 text-3xl font-bold text-center text-white">Registro de Cliente</h2>
            <form className="w-full max-w-lg" onSubmit={handleSubmit}>
            <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="cedula_cliente">
                        Cédula
                    </label>
                    <input
                        type="text"
                        name="cedula_cliente"
                        id="cedula_cliente"
                        value={cliente.cedula_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="primer_nombre_cliente">
                        Primer Nombre
                    </label>
                    <input
                        type="text"
                        name="primer_nombre_cliente"
                        id="primer_nombre_cliente"
                        value={cliente.primer_nombre_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="segundo_nombre_cliente">
                        Segundo Nombre
                    </label>
                    <input
                        type="text"
                        name="segundo_nombre_cliente"
                        id="segundo_nombre_cliente"
                        value={cliente.segundo_nombre_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="primer_apellido_cliente">
                        Primer Apellido
                    </label>
                    <input
                        type="text"
                        name="primer_apellido_cliente"
                        id="primer_apellido_cliente"
                        value={cliente.primer_apellido_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="segundo_apellido_cliente">
                        Segundo Apellido
                    </label>
                    <input
                        type="text"
                        name="segundo_apellido_cliente"
                        id="segundo_apellido_cliente"
                        value={cliente.segundo_apellido_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="direccion_cliente">
                        Dirección
                    </label>
                    <input
                        type="text"
                        name="direccion_cliente"
                        id="direccion_cliente"
                        value={cliente.direccion_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <div className="w-full px-3 mb-6">
                    <label className="block uppercase tracking-wide text-white text-xs font-bold mb-2" htmlFor="ciudad_cliente">
                        Ciudad
                    </label>
                    <input
                        type="text"
                        name="ciudad_cliente"
                        id="ciudad_cliente"
                        value={cliente.ciudad_cliente}
                        onChange={handleChange}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        required
                    />
                </div>
                <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrar Cliente
                </button>
            </form>
            {error && <p className="text-red-500 text-xs italic">{error}</p>}
        </div>
    );
};
