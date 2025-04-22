import React, { useState, memo } from "react";
import eiffelImage from "../../assets/eiffeltoweroriginal.png";


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
    <header className="w-full bg-[#003060] h-auto flex flex-col md:flex-row items-center justify-between p-4">
      {/* Background com efeito blur */}
      <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--cor-amarelo)] rounded-full opacity-20 blur-3xl"></div>
      <div className="flex items-center mr-auto">
        <img
          className="w-12 h-auto mr-1"
          src={eiffelImage}
          alt="Torre Eiffel"
          loading="lazy"
        />
        <span className="asv-paris-icon text-white text-lg">
          ASV PARIS
          <br />
          Engenharia Elétrica e Civil
        </span>
      </div>

      {/* Botão de Menu para dispositivos móveis */}
      <button
        onClick={toggleMenu}
        className="lg:hidden md:hidden p-4 focus:outline-none bg-[#FFD700] rounded-md shadow-md absolute top-4 right-4"
      >
        <svg
          className="w-6 h-6 text-white"
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

      {/* Navegação */}
      <nav
        className={`mr-10 flex-col mt-12 md:mt-0 md:flex md:flex-row md:items-center gap-12 ${isOpen ? "flex" : "hidden"
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
      </nav>
    </header>
  );
});

export default Header;
