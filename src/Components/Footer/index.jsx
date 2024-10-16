import eiffelImage from '../../assets/eiffeltoweroriginal.png';

function Footer() {
  return (
    <footer className="w-full custom-bg-blue h-40 flex items-center justify-between p-4">
      <div className="flex items-center justify-center p-2 custom-bg-blue">
        <img className="w-12 h-auto mr-1" src={eiffelImage} alt="Torre Eiffel" />
        <span className="asv-paris-icon">
          ASV PARIS<br />
          Elétrica - Civil - Arquitetura
        </span>
      </div>
      <nav className="flex gap-4">
        <a
          href="#"
          className="font-poppins no-underline text-black p-2.5 rounded-lg bg-transparent border-2 border-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white bg-white bg-opacity-70 backdrop-blur-md shadow-lg font-medium"
        >
          Home
        </a>
        <a
          href="#"
          className="font-poppins no-underline text-black p-2.5 rounded-lg bg-transparent border-2 border-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white bg-white bg-opacity-70 backdrop-blur-md shadow-lg font-medium"
        >
          Sobre
        </a>
        <a
          href="#"
          className="font-poppins no-underline text-black p-2.5 rounded-lg bg-transparent border-2 border-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white bg-white bg-opacity-70 backdrop-blur-md shadow-lg font-medium"
        >
          Equipe
        </a>
      </nav>
    </footer>
  );
}

export default Footer;
