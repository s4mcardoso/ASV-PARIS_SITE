import React, { useState, memo } from "react";
import eiffelImage from "../../assets/eiffeltoweroriginal.png";
import { FaWhatsapp, FaInstagram } from "react-icons/fa";

const Header = memo(() => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const smoothScroll = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 100);
    }
    setIsOpen(false); // Fecha o menu após clicar em um item
  };

  return (
    <header className="w-full custom-bg-blue h-30 flex flex-col md:flex-row items-center justify-between p-4 relative">
      <div className="flex items-center mr-auto">
        <img
          className="w-12 h-auto mr-1"
          src={eiffelImage}
          alt="Torre Eiffel"
          loading="lazy"
        />
        <span className="asv-paris-icon">
          ASV PARIS
          <br />
          Engenharia Elétrica e Civil
        </span>
      </div>

      {/* Botão de Menu para dispositivos móveis */}
      <button
        onClick={toggleMenu}
        className="lg:hidden md:hidden p-4 focus:outline-none bg-white rounded-md shadow-md absolute top-4 right-4"
      >
        <svg
          className="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </button>

      <nav
        className={`flex-col mt-12 md:mt-0 md:flex md:flex-row md:items-center gap-12 ${isOpen ? "flex" : "hidden"
          }`}
      >
        <button
          onClick={() => smoothScroll("hero-section")}
          className="custom-link text-lg font-poppins text-white"
        >
          Início
        </button>
        <button
          onClick={() => smoothScroll("about-section")}
          className="custom-link text-lg font-poppins text-white"
        >
          Sobre
        </button>
        <button
          onClick={() => smoothScroll("team-section")}
          className="custom-link text-lg font-poppins text-white"
        >
          Equipe
        </button>
        <div className="flex gap-2 items-center">
          <a
            href="https://wa.me/5515988150433"
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
});

export default Header;
