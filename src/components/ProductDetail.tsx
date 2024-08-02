import React from 'react';
import { formatPrice } from '../utils'; // Asumiendo que tienes una función para formatear precios
import type { Prenda } from '../api/schemas/prenda';

interface ProductDetailProps {
  prenda: Prenda;
}

export const ProductDetail: React.FC<ProductDetailProps> = ({ prenda }) => {
  const imageUrl = "../../public/images/products/" + prenda.img_prenda;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          {/* Contenedor para imágenes */}
          <div className="flex flex-wrap justify-center gap-2">
            <img src={imageUrl} alt={prenda.nombre_prenda} className="w-full md:w-1/2 object-cover rounded-lg shadow-lg" />
            {/* Puedes agregar más imágenes si están disponibles */}
          </div>
        </div>
        <div>
          {/* Detalles del producto */}
          <h2 className="text-2xl font-bold">{prenda.nombre_prenda}</h2>
          <p className="text-gray-700 mt-2">{prenda.descripcion_prenda}</p>
          <p className="text-gray-500 mt-1">Marca: {prenda.marca.nombre_marca}</p>
          <p className="text-gray-500">Talla: {prenda.talla_prenda}, Color: {prenda.color_prenda}</p>
          <div className="text-lg font-bold mt-2">{formatPrice(prenda.precio_prenda)}</div>
          
          {/* Estrellas y reviews podrían ser un componente separado si tienes los datos */}
          <div className="mt-2">
            <span className="text-yellow-500 text-xl">★★★★☆</span> 117 reviews
          </div>
          
          {/* Opciones de tamaño, si son aplicables */}
          <div className="flex mt-4">
            <button className="border border-gray-300 rounded px-3 py-1 mr-2">XS</button>
            <button className="border border-gray-300 rounded px-3 py-1 mr-2">S</button>
            <button className="border border-gray-300 rounded px-3 py-1 mr-2">M</button>
            <button className="border border-gray-300 rounded px-3 py-1 mr-2">L</button>
            <button className="border border-gray-300 rounded px-3 py-1">XL</button>
          </div>
          
          {/* Botón para agregar al carrito */}
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};
