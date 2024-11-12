import React from "react";
import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { FaWhatsapp } from "react-icons/fa";
import backgroundImage from "../../public/Images/background-image.jpg";

function privacy() {
  return (
    <>
      <Header  /> 
      <div id="privacy" style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center", padding: "20px", minHeight: "100vh", }} > <div style={{ backgroundColor: "rgba(255, 255, 255, 0.8)", padding: "20px" }}> <h1>Política de Privacidade</h1> <p>Bem-vindo à nossa Política de Privacidade. Sua privacidade é extremamente importante para nós. Nesta página, explicamos como coletamos, usamos, e protegemos suas informações pessoais.</p> <h2>Informações que Coletamos</h2> <p>Coletamos diversas informações para fornecer e melhorar nossos serviços. Isso inclui:</p> <ul> <li>Informações fornecidas diretamente por você, como nome, e-mail e telefone.</li> <li>Dados de navegação, como endereço IP, tipo de navegador e páginas acessadas.</li> </ul> <h2>Como Usamos suas Informações</h2> <p>Utilizamos suas informações para:</p> <ul> <li>Personalizar sua experiência no nosso site.</li> <li>Melhorar nossos serviços e suporte ao cliente.</li> <li>Enviar atualizações e ofertas especiais.</li> </ul> <h2>Compartilhamento de Informações</h2> <p>Não compartilhamos suas informações pessoais com terceiros, exceto conforme necessário para fornecer nossos serviços ou conforme exigido por lei.</p> <h2>Proteção de Dados</h2> <p>Implementamos diversas medidas de segurança para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p> <h2>Alterações a esta Política</h2> <p>Podemos atualizar nossa Política de Privacidade periodicamente. Recomendamos que você reveja esta página regularmente para ficar informado sobre qualquer mudança.</p> <h2>Contato</h2> <p>Se você tiver alguma dúvida sobre nossa Política de Privacidade, entre em contato conosco:</p> <p> <FaWhatsapp /> WhatsApp: (xx) xxxx-xxxx </p> </div> </div>
      <Footer />
    </>
  );
}

export default privacy;
