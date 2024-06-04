import React from "react";

interface CardProductProps {
  id: number;
  title: string;
  description: string;
  marca: string;
  price: number;
  img_url: string;
}

const CardProduct = () => {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="h-80 overflow-hidden">
        <img
          className="w-full object-cover h-full"
          src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90oy1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
          alt="card-image"
        />
      </div>
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Apple AirPods</div>
        <p className="text-gray-700 text-base mb-4">
          With plenty of talk and listen time, voice-activated Siri access, and an available wireless charging case.
        </p>
        <div className="font-bold text-xl mb-2">$95.00</div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Agregar al carrito
        </button>
      </div>
    </div>
  );
}

export default CardProduct;
