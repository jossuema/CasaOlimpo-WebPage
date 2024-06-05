import React from "react";
import { formatPrice } from "../utils";

interface CardProductProps {
  producto: {
    id: number;
    nombre: string;
    descripcion: string;
    precio: number,
    marca: string;
    img_url: string;
  }
}

const CardProduct = ({producto}:CardProductProps) => {
  const url = "../../public/images/products/"


  return (
    <div className="w-80 rounded overflow-hidden shadow-lg" key={producto.id}>
      <div className="h-52 overflow-hidden">
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
      <div className="px-6 pt-1 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
