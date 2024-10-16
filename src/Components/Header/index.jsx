import eiffelImage from '../../assets/eiffeltoweroriginal.png';
import { FaWhatsapp, FaInstagram } from 'react-icons/fa';

function Header() {
  return (
    <header className="w-full custom-bg-blue h-40 flex items-center justify-between p-4">
      <div className="flex items-center">
        <img className="w-12 h-auto mr-1" src={eiffelImage} alt="Torre Eiffel" />
        <span className="asv-paris-icon">
          ASV PARIS<br />
          Elétrica - Civil - Arquitetura
        </span>
      </div>
      <nav className="flex items-center gap-12">
        <a href="#" className="custom-link hover:text-yellow-500 text-lg">Home</a>
        <a href="#" className="custom-link hover:text-yellow-500 text-lg">Sobre</a>
        <a href="#" className="custom-link hover:text-yellow-500 ">Equipe</a>
        <div className="flex gap-2 items-center">

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

      </nav>
    </header>
  );
}

export default Header;
