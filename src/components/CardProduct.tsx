import React from "react";
import { formatPrice } from "../utils";
import type { Producto } from "../services/fetchData";

interface CardProductProps {
  producto: Producto;
}

const CardProduct = ({producto}:CardProductProps) => {
  const url = "../../public/images/products/"

  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white" key={producto.id}>
      <div className="flex justify-center items-center h-52 overflow-hidden"> {/* Ajustado para flexbox */}
        <img
          className="h-52 object-cover"
          src={url + producto.img_url}
          alt="card-image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{producto.nombre}</div>
        <p className="text-gray-700 text-base mb-4">
          {producto.descripcion}
        </p>
        <p className="text-gray-700 text-base mb-4">
          {producto.marca}
        </p>
        <div className="font-bold text-xl mb-2">{formatPrice(producto.precio)}</div>
      </div>
      <div className="categorias px-6 pt-1 pb-2">
        {producto.categorias && producto.categorias.map((categoria) => (
          <span
            key={categoria}
            className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
          >
            {categoria}
          </span>
        ))}
      </div>
      <div className="px-6 pt-1 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
