"use client";

import { use, useState } from "react";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openMenuLang, setOpenMenuLang] = useState(false);
  const [openUserMenu, setOpenUserMenu] = useState(false);
  const [userLogged, setUserLogged] = useState(false);

  return (
    <header className="h-20 bg-gradient-to-r from-teal-700 to-emerald-400 p-4 flex justify-between border-b border-b-black/5">
      <div className="h-full flex flex-1 justify-center items-start flex-col relative">
        <img src="images/flaticon-menu-hamburguer.png" alt="" className="h-12 cursor-pointer hover:scale-95" onClick={()=>{setOpenMenu(!openMenu)}}/>
        {openMenu && 
          <div className={`absolute bg-white w-40 top-10 left-0 p-2 rounded-md transition-all duration-300 ease-in-out transform ${openMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <nav>
            <ul className="flex flex-col text-emerald-900">
              <a href="">
                <li className="border-y p-1">Configurações</li>
              </a>
              <a href="">
                <li className="border-b p-1">Integrações</li>
              </a>
            </ul>
          </nav>
          </div>
        }
      </div>
      <p className="flex-1 p-2 mb-2 text-3xl text-white font-bold flex justify-center text">Taskify</p>
      <div className="h-full flex-1 flex justify-end gap-2 relative">
        <img src="images/pngwing-idioma.png" className="h-12 cursor-pointer hover:brightness-0" onClick={()=> setOpenMenuLang(!openMenuLang)}/>
        {openMenuLang && 
          <div className={`absolute bg-white w-40 top-full right-0 p-2 rounded-md transition-all duration-300 ease-in-out transform ${openMenuLang ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <nav>
            <ul className="flex flex-col text-emerald-900">
              <li className="border-y p-1 cursor-pointer">Português</li>
              <li className="border-b p-1 cursor-pointer">Inglês</li>
              <li className="border-b p-1 cursor-pointer">Espanhol</li>
            </ul>
          </nav>
          </div>
        }
        <img src="images/userIcon.png" className="h-12 cursor-pointer hover:brightness-0" onClick={()=> setOpenUserMenu(!openUserMenu)}
        />
        {openUserMenu && 
          <div className={`absolute bg-gray-500 w-40 top-full right-0 p-2 rounded-md transition-all duration-300 ease-in-out transform ${openUserMenu ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <nav>
            <ul className="flex flex-col text-emerald-300">
              {!userLogged &&
                <li className="p-2 cursor-pointer">Entre ou cadastre-se</li>
              }
              <li className="p-2 cursor-pointer">Notificações</li>
              <li className="p-2 cursor-pointer">Suporte</li>
              {userLogged &&
                <li className="p-1 cursor-pointer text-red-700">logout</li>
              }
              
            </ul>
          </nav>
          </div>
        }
      </div>
  
    </header>
  )
}