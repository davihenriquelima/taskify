import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";

const FAQPage = () => {
  return (
    <div className="container min-h-screen m-auto">
      <Header />
      <section className="flex-1 h-screen p-6 flex flex-col bg-white">
        <HomeButton/>
        <div className="flex flex-col p-4">
          <h2 className="text-2xl font-bold mb-4">Perguntas Frequentes</h2>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Como posso adicionar uma nova tarefa?</h3>
            <p>Para adicionar uma nova tarefa, basta digitar a tarefa desejada no campo de entrada e clicar no botão "+".</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Como faço para editar uma tarefa?</h3>
            <p>Para editar uma tarefa existente, clique no ícone de edição ao lado da tarefa, faça as alterações desejadas e pressione Enter para salvar.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Como marcar uma tarefa como concluída?</h3>
            <p>Para marcar uma tarefa como concluída, clique na caixa de seleção ao lado da tarefa.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Como remover uma tarefa?</h3>
            <p>Para remover uma tarefa, clique no ícone de lixeira ao lado da tarefa.</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-bold mb-2">Posso contribuir com o projeto?</h3>
            <p>Sim! Este projeto é de código aberto. Se você é um desenvolvedor, sinta-se à vontade para contribuir com novos recursos, correções de bugs ou melhorias na usabilidade. Você pode encontrar o repositório do projeto no GitHub.</p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default FAQPage;
