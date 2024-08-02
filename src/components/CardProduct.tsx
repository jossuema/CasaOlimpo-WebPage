import React from "react";
import { formatPrice } from "../utils";
import type { Prenda } from "../api/schemas/prenda";

interface CardProductProps {
  prenda: Prenda;
}

const CardProduct = ({prenda}:CardProductProps) => {
  const url = "../../public/images/products/"

  return (
    <div className="w-80 rounded overflow-hidden shadow-lg bg-white" key={prenda.id_prenda}>
      <div className="flex justify-center items-center h-52 overflow-hidden">
        <img
          className="h-52 object-cover"
          src={url + prenda.img_prenda}
          alt={prenda.nombre_prenda}
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{prenda.nombre_prenda}</div>
        <p className="text-gray-700 text-base mb-2">
          {prenda.descripcion_prenda}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Marca: {prenda.marca.nombre_marca}
        </p>
        <p className="text-gray-700 text-base mb-2">
          Talla: {prenda.talla_prenda}, Color: {prenda.color_prenda}
        </p>
        <div className="font-bold text-xl mb-2">{formatPrice(prenda.precio_prenda)}</div>
      </div>
      <div className="px-6 pt-1 pb-2">
        <span
          className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
        >
          {prenda.categoria.nombre_categoria}
        </span>
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
