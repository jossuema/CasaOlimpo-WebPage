import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const navItems = [
    { id: 1, text: 'HOME', link: '/'},
    { id: 2, text: 'PRODUCTOS', link: '/products'},
    { id: 3, text: 'CATEGORIAS', link: '/categories'},
    { id: 4, text: 'NOSOTROS', link: '/about'},
    { id: 5, text: 'CONTACTO', link: '/contact'},
  ];

  return (
    <div className='bg-yellow-500 flex justify-between items-center h-20 mx-auto px-20 text-black fixed top-5 left-0 right-0 shadow-md rounded-xl py-2 z-50 max-w-screen-lg'>
      <h1 className='w-full text-3xl font-bold text-[#000000]'>CASA OLIMPO</h1>
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#000000] rounded-xl m-2 cursor-pointer duration-300 hover:text-white hover:shadow-lg'
          >
            <a href={item.link}>
              {item.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;