import { FaWhatsapp, FaInstagram } from 'react-icons/fa';
import { memo } from 'react';

const Footer = memo(() => {
  return (
    <footer className="w-full custom-bg-blue p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center p-2">
          {/* Conteúdo opcional */}
        </div>
        <nav className="flex flex-col lg:flex-row gap-4 mt-2 lg:mt-0 text-xl">
          <a href="#" className="hover:text-yellow-500 font-poppins text-white">Home</a>
          <div className="flex flex-col">
            <h1 className="font-poppins text-white">Contato</h1>
            <div className="text-sm text-gray-300">Telefone Fixo: (15) 3142-3461</div>
            <div className="text-sm text-gray-300">E-mail: asvpariseng@gmail.com</div>
          </div>
          <a href="#privacy-policy" className="hover:text-yellow-500 font-poppins text-white">Política de Privacidade</a>
        </nav>

        <div className="flex gap-2 items-center mb-4 lg:mb-0">
          <a
            href={`https://wa.me/${5515988150433}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-green-600 text-white rounded-full border-2 border-green-600 transition-colors duration-300 hover:bg-green-700"
          >
            <FaWhatsapp className="w-5 h-5" />
          </a>
          <a
            href="https://www.instagram.com/asv.engenharia_?igsh=bDhiM3c3dm81ajB1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-8 h-8 bg-[#bc2a8d] text-white rounded-full border-2 border-[#bc2a8d] transition-colors duration-300 hover:bg-[#8a3ab9]"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </div>
      </div>
      <div className="text-center text-white mt-4">
        {/* Seção Como Chegar */}
        <div className="relative flex flex-col p-4">
          <div className="flex justify-center">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3659.153425526579!2d-47.5153313254411!3d-23.49098265900891!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94c5f4b9881029a7%3A0x6c4b8be28a23c763!2sAv.%20Elias%20Maluf%2C%202067%20-%20Wanel%20Ville%2C%20Sorocaba%20-%20SP%2C%2018055-215!5e0!3m2!1spt-BR!2sbr!4v1729847116727!5m2!1spt-BR!2sbr"
              width="100%"
              height="225"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            />
          </div>
          <p className="mt-[2rem]">&copy; 2024 ASV PARIS | Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
});

export default Footer;
