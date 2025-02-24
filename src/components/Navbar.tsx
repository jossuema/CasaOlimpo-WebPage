import { useEffect, useState } from "react";
import { logout, isLoggedIn, getUsuarioAutenticado } from "../api/services/auth";

const Items = [
    { id: 1, text: 'HOME', link: '/'},
    { id: 2, text: 'PRODUCTOS', link: '/productos'},
    { id: 3, text: 'CATEGORIAS', link: '/categorias'},
    { id: 4, text: 'NOSOTROS', link: '/nosotros'},
    { id: 5, text: 'CONTACTO', link: '/contacto'},
  ];

const Navbar = () => {
  const [navItems, setNavItems] = useState<any[]>(Items);
  const [isLogged, setIsLogged] = useState<boolean>(false);
  const [username, setUsername] = useState<string>('');

  useEffect(() => {
    const fetchUser = async () => {
      const user = await getUsuarioAutenticado();
      if(user){
        setUsername(user.username_usuario);
      }
    }

    if(isLoggedIn()){
      setIsLogged(true);
      fetchUser();
    }
  }, []);

  return (
    <div className="fixed z-50 w-full flex">
      <div className='bg-yellow-500 flex items-center justify-between h-20 mx-auto px-20 text-black top-5 left-0 right-0 shadow-md rounded-xl py-2'>
        <h1 className='w-full text-3xl font-bold text-[#000000]'>CASA OLIMPO</h1>
        {isLogged && <h1 className='text-xl font-bold text-[#000000] w-full'>Hola, {username}</h1>}
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
          {isLogged &&
            (<>
              <li
                className='p-4 hover:bg-[#000000] rounded-xl m-2 cursor-pointer duration-300 hover:text-white hover:shadow-lg'
                onClick={() => logout()}
              >
                <a href='/'>LOGOUT</a>
              </li>
              <li
                className="p-4 hover:bg-[#000000] rounded-xl m-2 cursor-pointer duration-300 hover:text-white hover:shadow-lg"
              >
                <a href='/profile'>PROFILE</a>
              </li>
              <li
                className="p-4 hover:bg-[#000000] rounded-xl m-2 cursor-pointer duration-300 hover:text-white hover:shadow-lg"
              >
                <a href='/cart'>CART</a>
              </li>
            </>)
          }
        </ul>
      </div>
    </div>
    
  );
};

export default Navbar;