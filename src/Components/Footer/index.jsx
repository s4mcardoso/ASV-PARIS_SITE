import eiffelImage from '../../assets/eiffeltoweroriginal.png';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="w-full custom-bg-blue p-4">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between">
        <div className="flex items-center p-2">
          <img className="w-12 h-auto mr-2" src={eiffelImage} alt="Torre Eiffel" />
          <span className="asv-paris-icon">
            ASV PARIS<br />
            Elétrica - Civil - Arquitetura
          </span>
        </div>
        <nav className="flex flex-col lg:flex-row gap-4 mt-2 lg:mt-0 mr-[12rem]">
          <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Home</a>
          <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Sobre</a>
          <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Equipe</a>
          <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Contato</a>
          <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Política de Privacidade</a>
        </nav>

        <div className="flex gap-2 items-center">
          <a
            href={`https://wa.me/${0}`}
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
        <p>&copy; 2024 ASV PARIS | Todos os direitos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;
