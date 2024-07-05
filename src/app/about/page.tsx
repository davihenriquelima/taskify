"use client"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import { HomeButton } from "@/components/HomeButton";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const ContentAboutPage = () => {
  const themeCtx = useTheme();

  return (
    <div className="container min-h-screen m-auto">
      <Header/>
      <section className={`flex-1 h-screen p-6 flex flex-col ${themeCtx.theme === 'light' ? 'bg-white text-black': 'bg-zinc-800 text-white'}`}>
        <HomeButton/>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4">Sobre</h2>
          <p className="mb-3">Este projeto é um To-Do List onde você pode adicionar, editar, marcar como concluídas e remover tarefas. As principais funcionalidades do projeto são:</p>
          <ul>
            <li><strong>Criar Tarefas:</strong> Permite aos usuários criar uma lista de tarefas.</li>
            <li><strong>Editar Tarefas:</strong> Os usuários podem editar um item da lista de tarefas, assim como removê-lo.</li>
            <li><strong>Importar Lista:</strong> Permite aos usuários importar uma lista de tarefas de um arquivo previamente exportado.</li>
            <li><strong>Compartilhar Lista:</strong> Uma opção para compartilhar a lista de tarefas com outras pessoas através de e-mail, mensagem ou redes sociais.</li>
            <li><strong>Classificar Tarefas:</strong> Opções para classificar as tarefas por diferentes critérios, como data de criação, prioridade, data de conclusão, etc.</li>
            <li><strong>Filtrar Tarefas:</strong> Permite aos usuários filtrar as tarefas com base em determinados critérios, como concluídas, não concluídas, data de vencimento, etiquetas, etc.</li>
          </ul>
          <p className="mb-3">Se você é um desenvolvedor, fique à vontade para contribuir com melhorias ou correções no código fonte deste projeto. Confira o repositório no GitHub:</p>
          <a href="https://github.com/davihenriquelima/taskify" target="_blank" rel="noopener noreferrer" className="text-green-700 hover:underline">Repositório no GitHub</a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}

const AboutPage = () => {

  return (
    <ThemeProvider>
      <ContentAboutPage/>
    </ThemeProvider>
  )
}

export default AboutPage;