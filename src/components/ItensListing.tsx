"use client"

import { useListCtx } from "@/contexts/ListContext";
import { useTheme } from "@/contexts/ThemeContext";
import { saveEditingItemLS, removeEditingItemLS } from "@/utils/localStorage";

const ItensListing = () => {

  const listCtx = useListCtx();
  const themeCtx = useTheme();

  if (!listCtx) {
    return <div>Loading... </div>
  }

  const { list, toggleItem, removeItem, handleKeyDown, editItem, editingItem, setEditingItem } = listCtx;

  return (

    <>
      <ul className="flex flex-col w-full my-3 text-white">
        {list.map(item=> (
        
          <li  className={`w-full my-1 flex flex-col items-center ${editingItem === item.id ? 'editing border rounded-md p-3 shadow-xl' : ''} border-b border-black border-opacity-[5%]`} key={item.id}>
            <div className="w-full flex flex-row items-center justify-between gap-2">
              <input type="checkbox" className="custom-checkbox" onChange={()=>toggleItem(item.id)} checked={item.done}/>
              <p
                className={`w-full p-2 font-bold whitespace-nowrap overflow-hidden ${editingItem === item.id ? 'outline outline-1 outline-white/10' : ''}`}
                suppressContentEditableWarning={true}
                contentEditable={editingItem === item.id}
                onKeyDown={(e) => {
                    handleKeyDown(item.id, e, () => setEditingItem(null));
                  }
                }
                data-field="title"
              >
                {item.title}
              </p>
              <div className="flex gap-2 items-center">
                <img src={`/images/${editingItem === item.id ? 'confirm' : 'edit'}.png`} className={`w-4 cursor-pointer hover:scale-125 ${themeCtx.theme === 'dark'? 'invert' : ''}`}
                  onClick={()=> {
                    if(editingItem !== item.id) {
                      saveEditingItemLS(item.id, item.title, item.desc);
                      setEditingItem(item.id)
                    } else {
                      const editingElement = document.querySelector('li.editing');
                      if (editingElement) {
                        const title = editingElement.querySelector('p[data-field="title"]')?.innerHTML || '';
                        const desc = editingElement.querySelector('p[data-field="desc"]')?.innerHTML || '';
                        editItem(item.id, title, desc);
                        removeEditingItemLS();
                        setEditingItem(null);
                      }
                    }
                  }}
                />
                <img src="/images/remove.png" className={`w-4 cursor-pointer hover:scale-125 ${themeCtx.theme === 'dark'? 'invert' : ''}`} onClick={()=>removeItem(item.id)} />
              </div>
            </div>
            {editingItem === item.id &&
              <div className="w-full h-24 mt-3">
                <p 
                  className={`w-full h-full p-2 ${editingItem === item.id ? 'outline outline-1 outline-white/10' : ''}`}
                  suppressContentEditableWarning={true}
                  contentEditable={editingItem === item.id}
                  onKeyDown={(e) => {
                    handleKeyDown(item.id, e, () => setEditingItem(null));
                  }
                  } data-field="desc">
                    {item.desc}
                </p>
              </div>
            }
          </li> 
        ))}
      </ul>
    </>
  );
};


export default ItensListing;