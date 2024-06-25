"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ToDoList } from "@/components/ToDoList";
import { ListProvider } from "@/contexts/ListContext";

const Page = () => {
  
  return (
    <div className="container min-h-screen m-auto ">

      <Header/>

      <section className="flex-1 h-screen bg-gradient-to-r from-teal-700/90 to-emerald-400/90 p-6 flex justify-center" >
        <ListProvider>
          <ToDoList />
        </ListProvider>
      </section>

      <section className="flex-1 min-h-screen flex md:flex-row bg-white items-center px-6 relative">
        <div className="w-[50%] p-5 rounded-lg shadow-xl text-black ">
          <h3 className="text-4xl font-bold mb-4 concert-one-regular">Organize suas tarefas</h3>
          <p className="leading-loose">
            A organização é essencial para o sucesso em todas as áreas da vida, pois otimiza o tempo, aumenta a produtividade e reduz o estresse. No âmbito profissional, ser organizado facilita a gestão de tarefas, a localização de documentos importantes e o cumprimento de prazos, transmitindo uma imagem de profissionalismo e confiabilidade. Na vida pessoal, a organização ajuda a equilibrar trabalho, estudos, lazer e relacionamentos, promovendo um ambiente mais harmonioso e uma mente tranquila. Além disso, a organização desenvolve autodisciplina e foco, permitindo alcançar metas de curto e longo prazo com mais eficiência. Em suma, a organização é uma ferramenta poderosa para uma vida equilibrada, produtiva e satisfatória.
          </p>
        </div>
        <div className="w-[50%] absolute bottom-0 right-0 flex justify-center items-center">
          <img src="images/boneca-todolist.png" alt="" className=""/>
        </div>
      </section>

      <section className="flex-1 min-h-screen flex flex-col md:flex-row bg-teal-600 justify-center items-center p-6">
        <div className="flex-1 flex">
          <img src="images/bloco-de-anotacoes.png" alt="" className="w-[90%]"/>
        </div>
        <div className="flex-1 text-white">
          <h3 className="text-6xl font-bold mb-6 concert-one-regular">Como funciona</h3>
          <p className="mb-3 font-extralight">Com o Taskify você pode adicionar, editar, marcar como concluídas e remover tarefas.</p>
          <ul className="flex flex-col gap-2 text-xl tracking-wider">
            <li>Adicione uma tarefa digitando no campo de entrada e clicando no botão +.</li>
            <li>Edite uma tarefa clicando no ícone de editar, faça as mudanças e pressione Enter.</li>
            <li>Marque uma tarefa como concluída clicando na caixa de seleção.</li>
            <li>Remova uma tarefa clicando no ícone de lixeira.</li>
          </ul>
        </div>
      </section>

      <Footer/>
    </div>
  );
}

export default Page;

//integrar API de idiomas