import { listReducer } from "@/reducers/listReducer";
import { useReducer, useState } from "react";

export const ToDoList = () => {

const [list, dispatch] = useReducer(listReducer, []);
const [input, setInput] = useState('');
const [itemEditing, setItemEditing] = useState < number | null> (null);

const handleAdd = () => {
  if(input.trim() === '') return false;
  
  dispatch({
    type:'add',
    payload: {
      text:input.trim()
    }
  });
  setInput('');
};

const handleEdit = (id:number, text:string)=> {
  if(text.trim() === '') {
    handleRemove(id)
    return false;
  }

  dispatch({
    type:'edit',
    payload: {
      id:id,
      newText:text.trim()
    }
  });

  setItemEditing(null);
};

const handleDone = (id:number) => {
  dispatch({
    type:'toggle',
    payload: {
      id:id
    }
  });
};

const handleRemove = (id:number) => {
  dispatch({
    type:'remove',
    payload: {
      id:id
    }
  });
}

const handleKeyDown = (id: number, event: React.KeyboardEvent<HTMLElement>) => {
  if (event.key.toLowerCase() === 'enter') {
    event.preventDefault();
    const text = (event.target as HTMLElement).innerText || '';
    handleEdit(id, text);
  }
};

  return (
    <div className="container flex max-w-3xl flex-col items-center p-4">
      <div className="flex w-full justify-center rounded-md overflow-hidden" >
        <input 
        type="text" 
        className="border outline-none p-2 bg-white flex-1 min-w-0"
        value={input}
        onChange={e=>setInput(e.target.value)}
        placeholder="digite uma nova tarefa"
        />
        <button type="submit" onClick={handleAdd} className="text-3xl font-extrabold bg-emerald-800 text-white p-3">+</button>
      </div>
      <div className="flex w-full my-3">
        <ul className="flex flex-col w-full text-white">
          {list &&
            list.map(item=> (
              <div key={item.id} className="flex w-full border-b border-black border-opacity-[5%]">
                <input type="checkbox" className="w-6 mr-2" onChange={()=>handleDone(item.id)} checked={item.done}/>
                <li  className={`w-full my-1 flex items-center justify-between gap-2 `}>
                  <p 
                    className={`w-full p-2 font-bold whitespace-nowrap overflow-hidden ${itemEditing === item.id ? 'editable outline outline-1 outline-slate-900/30' : ''}`}
                    suppressContentEditableWarning={true}
                    contentEditable={itemEditing === item.id} 
                    onKeyDown={(e) => handleKeyDown(item.id, e)}
                  >
                    {item.text}
                  </p>
                  <div className="flex gap-4">
                    <img src={`/images/${itemEditing === item.id ? 'confirm' : 'edit'}.png`} className="w-4 cursor-pointer hover:invert hover:scale-105" 
                      onClick={()=> {
                        if(itemEditing !== item.id) {
                          setItemEditing(item.id)
                        } else {
                          const text = document.querySelector(`.editable`)?.innerHTML || item.text;
                          handleEdit(item.id, text);
                        }
                      }} 
                    />
                    <img src="/images/remove.png" className="w-4 cursor-pointer hover:invert hover:scale-105" onClick={()=>handleRemove(item.id)} />
                  </div>
                </li>
              </div>
            ))
          }
        </ul>
      </div>
    </div>
  )
}

/* addicionar essas implementações:

Importar Lista: Permite aos usuários importar uma lista de tarefas de um arquivo previamente exportado.

Compartilhar Lista: Uma opção para compartilhar a lista de tarefas com outras pessoas através de e-mail, mensagem ou redes sociais.

Classificar Tarefas: Opções para classificar as tarefas por diferentes critérios, como data de criação, prioridade, data de conclusão, etc.

Filtrar Tarefas: Permite aos usuários filtrar as tarefas com base em determinados critérios, como concluídas, não concluídas, data de vencimento, etiquetas, etc.*/