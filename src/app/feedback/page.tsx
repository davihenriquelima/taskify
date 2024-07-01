"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const ContentFeedbackPage = () => {

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    //  adicionar a lógica para lidar com o envio do feedback
  };

  const themeCtx = useTheme();

  return (
    <div className="container min-h-screen m-auto">
      <Header />
      <section className={`flex-1 h-screen p-6 flex flex-col ${themeCtx.theme === 'light'? 'bg-white text-black':'bg-zinc-800 text-white'}`}>
        <HomeButton/>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4">Envie seu Feedback</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="feedback" className="block text-lg font-bold mb-2">Feedback:</label>
              <textarea id="feedback" name="feedback" className="border outline-0 w-full p-2 bg-white text-black" rows={5} required></textarea>
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Enviar Feedback
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const FeedbackPage = () => {

  return (
    <ThemeProvider>
      <ContentFeedbackPage/>
    </ThemeProvider>
  )
}

export default FeedbackPage;
