"use client"


import { useListCtx } from "@/contexts/ListContext";
import { useTheme } from "@/contexts/ThemeContext";
import { saveEditingItemLS, removeEditingItemLS } from "@/utils/localStorage";
import { useState } from "react";

const ItensListing = () => {

  const listCtx = useListCtx();
  const [itemEditing, setItemEditing] = useState < number | null> (null);
  const themeCtx = useTheme();

  if (!listCtx) {
    return <div>Loading... </div>
  }

  return (

    <>
      {listCtx.list.map(item=> (
      <div className="flex w-full my-3" key={item.id}>
        <ul className="flex flex-col w-full text-white">
          <div className="flex w-full border-b border-black border-opacity-[5%]">
            <input type="checkbox" className="w-6 mr-2" onChange={()=>listCtx.toggleItem(item.id)} checked={item.done}/>
            <li  className={`w-full my-1 flex items-center justify-between gap-2 `}>
              <p
                className={`w-full p-2 font-bold whitespace-nowrap overflow-hidden ${itemEditing === item.id ? 'editable outline outline-1 outline-slate-900/30' : ''}`}
                suppressContentEditableWarning={true}
                contentEditable={itemEditing === item.id}
                onKeyDown={(e) => {
                    listCtx.handleKeyDown(item.id, e, () => setItemEditing(null));
                  }
                }
              >
                {item.text}
              </p>
              <div className="flex gap-4">
                <img src={`/images/${itemEditing === item.id ? 'confirm' : 'edit'}.png`} className={`w-4 cursor-pointer hover:scale-125 ${themeCtx.theme === 'dark'? 'invert' : ''}`}
                  onClick={()=> {
                    if(itemEditing !== item.id) {
                      saveEditingItemLS(item.id, item.text);
                      setItemEditing(item.id)
                    } else {
                      const text = document.querySelector(`.editable`)?.innerHTML || '';
                      listCtx.editItem(item.id, text);
                      removeEditingItemLS();
                      setItemEditing(null); 
                    }
                  }}
                />
                <img src="/images/remove.png" className={`w-4 cursor-pointer hover:scale-125 ${themeCtx.theme === 'dark'? 'invert' : ''}`} onClick={()=>listCtx.removeItem(item.id)} />
              </div>
            </li> 
          </div>
        </ul>
      </div>
    ))}
    </>
  );
};


export default ItensListing;