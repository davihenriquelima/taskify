"use client"

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const ContentCreditsPage = () => {
  const themeCtx = useTheme();

  return (
  
    <div className="container min-h-screen m-auto">
      <Header />
      <section className={`flex-1 h-screen p-6 flex flex-col ${themeCtx.theme === 'dark' ? 'bg-zinc-800 text-white':'bg-white text-black'}`}>
        <HomeButton/>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4">Créditos</h2>
          <h3 className="text-lg font-bold mb-2">Imagens</h3>
          <p className="my-4">
            <h2>Flaticon:</h2>
            <ul className="pl-6">
              <li><a href="https://www.flaticon.com/br/icones-gratis/menu-hamburguer" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800">Menu-hambúrguer</a></li>
              <li><a href="https://www.flaticon.com/br/icones-gratis/arquivos-e-pastas" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800">Arquivos e pastas</a></li>
            </ul>
          </p>
          <p className="my-4">
            <h2>Pexels:</h2>
            <ul className="pl-6">
              <li><a href="https://www.pexels.com/pt-br/@annpoan/" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800">Ann Poan</a> (corpo de fundo)</li>
            </ul>
          </p>
          <p className="my-4">
            <h2>Png Wing:</h2>
            <ul className="pl-6">
              <li><a href="https://www.pngwing.com/pt/free-png-twqad" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800">Idioma</a></li>
              <li><a href="https://www.pngwing.com/en/free-png-yagtp" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-blue-800">User Icon</a></li>
            </ul>
          </p>
        </div>
      </section>
      <Footer />
    </div>
    
  );
}

const CreditsPage = () => {
  return (
    <ThemeProvider>
      <ContentCreditsPage/>
    </ThemeProvider>
  )
}


export default CreditsPage;
