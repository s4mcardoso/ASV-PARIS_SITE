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
        <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Home</a>
        <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Sobre</a>
        <a href="#" className="custom-link hover:text-yellow-500 text-lg font-poppins text-white">Equipe</a>
      </nav>
    </footer>
  );
}

export default Footer;
