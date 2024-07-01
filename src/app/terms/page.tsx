"use client";

import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { HomeButton } from "@/components/HomeButton";
import { ThemeProvider, useTheme } from "@/contexts/ThemeContext";

const ContentTermsPage = () => {
  const themeCtx = useTheme();

  return (
    <div className="container min-h-screen m-auto">
      <Header />
      <section className={`flex-1 min-h-screen p-6 flex flex-col ${themeCtx.theme === 'light' ? 'bg-white text-black': 'bg-zinc-700 text-white'}`}>
        <HomeButton/>
        <h1 className="text-5xl my-5">Termos de Uso e Serviço e Política de Privacidade</h1>
        <div className="rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold mb-4">Termos de Uso e Serviço</h1>

          <p className="mb-4">
            Ao acessar ao site Taskify, você concorda em cumprir estes termos de serviço, todas as leis e regulamentos aplicáveis e concorda que é responsável pelo cumprimento de todas as leis locais aplicáveis. Se você não concordar com algum desses termos, está proibido de usar ou acessar este site. Os materiais contidos neste site são protegidos pelas leis de direitos autorais e marcas comerciais aplicáveis.
          </p>

          <h2 className="text-xl font-bold mb-2">2. Uso de Licença</h2>
          <p className="mb-4">
            É concedida permissão para baixar temporariamente uma cópia dos materiais (informações ou software) no site Taskify, apenas para visualização transitória pessoal e não comercial. Esta é a concessão de uma licença, não uma transferência de título, e sob esta licença você não pode:
          </p>
          <ul className="list-disc list-inside mb-4">
            <li>Modificar ou copiar os materiais;</li>
            <li>Usar os materiais para qualquer finalidade comercial ou para exibição pública (comercial ou não comercial);</li>
            <li>Tentar descompilar ou fazer engenharia reversa de qualquer software contido no site Taskify;</li>
            <li>Remover quaisquer direitos autorais ou outras notações de propriedade dos materiais; ou</li>
            <li>Transferir os materiais para outra pessoa ou 'espelhar' os materiais em qualquer outro servidor.</li>
          </ul>
          <p className="mb-4">
            Esta licença será automaticamente rescindida se você violar alguma dessas restrições e poderá ser rescindida por Taskify a qualquer momento. Ao encerrar a visualização desses materiais ou após o término desta licença, você deve apagar todos os materiais baixados em sua posse, seja em formato eletrônico ou impresso.
          </p>

          <h2 className="text-xl font-bold mb-2">3. Isenção de responsabilidade</h2>
          <p className="mb-4">
            Os materiais no site da Taskify são fornecidos 'como estão'. Taskify não oferece garantias, expressas ou implícitas, e, por este meio, isenta e nega todas as outras garantias, incluindo, sem limitação, garantias implícitas ou condições de comercialização, adequação a um propósito específico ou não violação de propriedade intelectual ou outra violação de direitos.
          </p>
          <p className="mb-4">
            Além disso, a Taskify não garante ou faz qualquer representação relativa à precisão, aos resultados prováveis ​​ou à confiabilidade do uso dos materiais em seu site ou de outra forma relacionado a esses materiais ou em sites vinculados a este site.
          </p>

          <h2 className="text-xl font-bold mb-2">4. Limitações</h2>
          <p className="mb-4">
            Em nenhum caso a Taskify ou seus fornecedores serão responsáveis ​​por quaisquer danos (incluindo, sem limitação, danos por perda de dados ou lucro, ou devido a interrupção dos negócios) decorrentes do uso ou da incapacidade de usar os materiais em Taskify, mesmo que Taskify ou um representante autorizado da Taskify tenha sido notificado oralmente ou por escrito da possibilidade de tais danos. Como algumas jurisdições não permitem limitações em garantias implícitas, ou limitações de responsabilidade por danos consequentes ou incidentais, essas limitações podem não se aplicar a você.
          </p>

          <h2 className="text-xl font-bold mb-2">5. Precisão dos materiais</h2>
          <p className="mb-4">
            Os materiais exibidos no site da Taskify podem incluir erros técnicos, tipográficos ou fotográficos. Taskify não garante que qualquer material em seu site seja preciso, completo ou atual. Taskify pode fazer alterações nos materiais contidos em seu site a qualquer momento, sem aviso prévio. No entanto, Taskify não se compromete a atualizar os materiais.
          </p>

          <h2 className="text-xl font-bold mb-2">6. Links</h2>
          <p className="mb-4">
            A Taskify não analisou todos os sites vinculados ao seu site e não é responsável pelo conteúdo de nenhum site vinculado. A inclusão de qualquer link não implica endosso por Taskify do site. O uso de qualquer site vinculado é por conta e risco do usuário.
          </p>

          <h2 className="text-xl font-bold mb-2">7. Modificações</h2>
          <p className="mb-4">
            A Taskify pode revisar estes termos de serviço do site a qualquer momento, sem aviso prévio. Ao usar este site, você concorda em ficar vinculado à versão atual desses termos de serviço.
          </p>

          <h2 className="text-xl font-bold mb-2">8. Lei aplicável</h2>
          <p>
            Estes termos e condições são regidos e interpretados de acordo com as leis do Brasil e você se submete irrevogavelmente à jurisdição exclusiva dos tribunais naquele estado ou localidade.
          </p>
        </div>
        <div className="rounded-lg shadow-lg p-8">
          <h1 className="text-2xl font-bold mb-4">Política de Privacidade</h1>

          <h2 className="text-xl font-bold mb-2">1. Introdução</h2>
          <p className="mb-4">
            A sua privacidade é importante para nós. É política do Taskify respeitar a sua privacidade em relação a qualquer informação sua que possamos coletar no site Taskify, e outros sites que possuímos e operamos.
          </p>

          <h2 className="text-xl font-bold mb-2">2. Informações que coletamos</h2>
          <p className="mb-4">
            Coletamos informações pessoais quando você acessa ou usa o site Taskify. Essas informações podem incluir, mas não estão limitadas a: nome, endereço de e-mail, informações de login, e informações de uso do site.
          </p>

          <h2 className="text-xl font-bold mb-2">3. Uso das informações</h2>
          <p className="mb-4">
            As informações coletadas são usadas para operar e melhorar o serviço do Taskify. Elas também podem ser usadas para entrar em contato com você por meio de newsletters, marketing ou outros meios promocionais e informativos.
          </p>

          <h2 className="text-xl font-bold mb-2">4. Proteção das informações</h2>
          <p className="mb-4">
            Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição não autorizada.
          </p>

          <h2 className="text-xl font-bold mb-2">5. Cookies</h2>
          <p className="mb-4">
            O Taskify utiliza cookies para melhorar a experiência do usuário, analisar o uso do site e personalizar conteúdos e anúncios.
          </p>

          <h2 className="text-xl font-bold mb-2">6. Compartilhamento de informações</h2>
          <p className="mb-4">
            Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para operar o site Taskify e fornecer os serviços solicitados.
          </p>

          <h2 className="text-xl font-bold mb-2">7. Alterações</h2>
          <p className="mb-4">
            O Taskify pode atualizar esta política de privacidade periodicamente. Notificaremos você sobre quaisquer alterações publicadas no site oficial, que entrarão em vigor imediatamente.
          </p>

          <h2 className="text-xl font-bold mb-2">8. Contato</h2>
          <p>
            Para questões relacionadas a esta licença, entre em contato com Taskify em [seu email ou site].
          </p>
          <p className="mb-4 text-xs">
            Nossa política de privacidade foi criada com a ajuda dos <a href="https://www.privacypolicies.com/privacy-policy-generator/" target="_blank" rel="noopener noreferrer">Geradores de Políticas de Privacidade Online</a>.
          </p>
          <p className="mb-4">
            Ao usar nosso site, você concorda com nossa política de privacidade.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

const TermsPage = () => {

  return (
    <ThemeProvider>
      <ContentTermsPage/>
    </ThemeProvider>
  )
}

export default TermsPage;
