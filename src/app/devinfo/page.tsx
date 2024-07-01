"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const ContentDevInfoPage = () => {
  const themeCtx = useTheme();
  return (
    <div className="container min-h-screen m-auto">
      <Header/>
      <section className={`flex-1 h-screen p-6 flex flex-col ${themeCtx.theme === 'light'? 'bg-white text-teal-900': 'bg-zinc-800 text-emerald-400'}`}>
        <HomeButton/>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4">Sobre o Desenvolvedor</h2>
          <p className="mb-3">Olá! Tudo bem contigo? Me chamo Davi Henrique, sou programador e atualmente estou dedicando meu tempo ao estudo de programação e sou formando em Análise de Sistemas. Este projeto nasceu como parte da minha jornada de aprendizado e prática no desenvolvimento web.</p>
          <p>Abaixo você pode se conectar comigo através das minhas redes e portifólio.</p>
        </div>
        <div className="flex gap-3 p-4 w-full justify-center">
            <a href="https://github.com/davihenriquelima" target="_blank" rel="noopener noreferrer">
              <img src="https://github.com/favicon.ico" alt="GitHub" className={`w-8 h-8 ${themeCtx.theme === 'dark' ? 'invert' :''}`} title="GitHub"/>
            </a>
            <a href="mailto:davihenrique.ads@gmail.com" target="_blank" rel="noopener noreferrer">
              <img src="images/flaticon-gmail.png" alt="Gmail" className="w-8 h-8" title="Gmail"/>
            </a>
            <a href="https://www.linkedin.com/in/davihenriquelima/" target="_blank" rel="noopener noreferrer">
              <img src="images/flaticon-linkedin.png" alt="LinkedIn" className="w-8 h-8" title="Linkedin"/>
            </a>
            <a href="/" target="_blank" rel="noopener noreferrer">
              <img src="images/flaticon-portfolio.png" alt="Portifolio" className={`w-8 h-8 ${themeCtx.theme === 'dark' ? 'invert' :''}`} title="Portifólio" />
            </a>
        </div>
      </section>
      <Footer/>
    </div>
  )
}


const DevInfoPage = () => {

  return (
    <ThemeProvider>
      <ContentDevInfoPage/>
    </ThemeProvider>
  )
}

export default DevInfoPage;