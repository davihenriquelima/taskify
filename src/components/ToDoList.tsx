"use client";

import { useListCtx } from "@/contexts/ListContext";
import { useState } from "react";
import ItensListing from "./ItensListing";

export const ToDoList = () => {
  const listCtx = useListCtx();
  const [input, setInput] = useState('');

  return (
   
    <div className="container flex max-w-3xl flex-col items-center p-4">
      <div className="flex w-full justify-center rounded-md overflow-hidden" >
        <input
        type="text"
        className="border outline-none p-2 bg-white text-black flex-1 min-w-0"
        value={input}
        onChange={e=>setInput(e.target.value)}
        placeholder="digite uma nova tarefa"
        />  
        <button 
          type="submit" 
          onClick={() => {
            
            if (listCtx) {
              listCtx.addItem(input, () => setInput(''));
            }
          }}
          className="text-3xl font-extrabold bg-emerald-800 text-white p-3">
            +
        </button>
      </div>
      <ItensListing/> 
    </div>
    
  )
}

/* features a serem implementadas:

Editar o layout para tasks mais robustas, com opção de adicionar descrição e etc

Classificar Tarefas: Opções para classificar as tarefas por diferentes critérios, como data de criação, prioridade, data de conclusão, etc.

Filtrar Tarefas: Permite aos usuários filtrar as tarefas com base em determinados critérios, como concluídas, não concluídas, data de vencimento, etiquetas, etc.

Implementar configurações e verificar a necessidade de novos itens no menu

integrar API de idiomas

Importar Lista: Permite aos usuários importar uma lista de tarefas de um arquivo previamente exportado.

Compartilhar Lista: Uma opção para compartilhar a lista de tarefas com outras pessoas através de e-mail, mensagem ou redes sociais.

Implementar Autenticação e DB

Verificar novas funcionalidades que possam ser adicionadas agregando valor ao sistema

Iniciar a adaptação para fazer um app

*/