import Footer from '../Footer';
import Header from '../Header';
import { FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '../../../public/Images/background-image.jpg';
import andreTraçado from '../../../public/Images/andre-bonora-traçado-fino.png';
import wanessaTraçada from '../../../public/Images/wanessa-arquiteta-traçado-fino.png';
import asvParisLocation from '../../../public/Images/asvparis-localizacao.jpg';
import casal from '../../../public/Images/casal.jpg';
import wanessaEquipe from '../../../public/Images/wanessa-equipe.jpg';
import andreEquipe from '../../../public/Images/andre-equipe.jpg';
import imagemEngenharia4 from '../../../public/Images/Imagem-Engenharia4.jpg';

const ContactButton = ({ href, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="mt-5 inline-flex items-center px-4 py-2 bg-[var(--cor-amarelo)] text-white rounded-lg transition-colors duration-300 hover:bg-[#003366] font-medium"
    >
        {children} <FaWhatsapp className="ml-2 h-7" />
    </a>
);

const TeamMember = ({ imgSrc, name, title }) => (
    <div className="flex flex-col justify-start items-center p-4 w-[18rem] gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform transform hover:scale-110 h-[26rem]">
        <img src={imgSrc} alt={`Membro ${name}`} className="rounded-full w-[15rem] h-[15rem] object-cover mx-auto" />
        <h3 className="text-xl font-semibold text-[var(--cor-azul)] text-center w-full">{name}</h3>
        <p className="text-base text-gray-700 text-center w-full">{title}</p>
    </div>
);

const Section = ({ bgImage, overlayColor, overlayOpacity, children }) => (
    <div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={`absolute inset-0 ${overlayColor} opacity-${overlayOpacity}`}></div>
        <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10">
            {children}
        </div>
    </div>
);

function Home() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <div id="hero-section" className="relative flex flex-col min-h-screen bg-[var(--cor-amarelo)]">
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between">
                    <div className="flex flex-col justify-start items-start p-[2rem] max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20">
                        <h1 className="text-6xl font-bold text-left text-[#003366]">Inove Seu Espaço Conosco</h1>
                        <p className="text-2xl mt-2 text-left text-[#333333]">
                            Transforme seus sonhos em realidade com nossa experiência em arquitetura, engenharia elétrica e civil.
                            Em Sorocaba e região, oferecemos soluções integradas em um só lugar, garantindo qualidade e inovação em cada projeto.
                            Deixe-nos criar o espaço perfeito para você!
                        </p>
                        <ContactButton href={`https://wa.me/${5515988150433}`}>Contato</ContactButton>
                    </div>
                    <div className="absolute right-0 flex-shrink-0" style={{ top: '3rem', zIndex: 10 }}>
                        <img src={andreTraçado} alt="Imagem do engenheiro André" className="w-full h-auto max-w-lg object-cover mr-[7rem]" />
                    </div>
                </div>
            </div>

            {/* Section 2 with Background Image */}
            <Section bgImage={backgroundImage} overlayColor="bg-blue-900" overlayOpacity={70}>
                <div className="flex flex-col justify-start items-start p-12 max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 ml-auto">
                    <h1 className="text-6xl font-bold text-left text-[#FFD700]">Construa com Nossa Equipe</h1>
                    <p className="text-2xl mt-2 text-left text-[#333333]">
                        Em Sorocaba, SP, transformamos a visão em realidade. Oferecemos serviços superiores de engenharia elétrica, civil e arquitetura,
                        combinando inovação com excelência. Confie em quem entende de construção com precisão e paixão. Vamos construir juntos.
                    </p>
                    <ContactButton href={`https://wa.me/${5515988150433}`}>Fale Conosco</ContactButton>
                </div>
                <div className="absolute left-0 flex-shrink-0" style={{ top: '7.8rem', zIndex: 10 }}>
                    <img src={wanessaTraçada} alt="Imagem da arquiteta Wanessa" className="w-full h-auto max-w-lg object-cover ml-[7rem] mt-[1.726rem]" />
                </div>
            </Section>

            {/* About Section */}
            <Section bgImage={imagemEngenharia4} overlayColor="bg-white" overlayOpacity={80}>
                <div className="flex flex-col items-start mt-1 ml-8 z-10">
                    <h2 className="text-5xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">Sobre</h2>
                    <p className="text-left mt-4">
                        No mundo da construção civil, é comum encontrar inúmeros problemas que resultam em atrasos e frustrações...
                    </p>
                    <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Nossa Proposta:</h3>
                    <p className="text-left mt-2">Diante desse cenário desafiador, decidimos criar a ASV PARIS...</p>
                    <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Vantagens de Escolher a ASV PARIS:</h3>
                    <ol className="list-decimal list-inside mt-2">
                        <li><strong className="text-[var(--cor-azul)]">Planejamento Integrado</strong></li>
                        <li><strong className="text-[var(--cor-azul)]">Eficiência e Agilidade</strong></li>
                        <li><strong className="text-[var(--cor-azul)]">Qualidade Superior</strong></li>
                        <li><strong className="text-[var(--cor-azul)]">Tranquilidade para Você</strong></li>
                    </ol>
                    <p className="text-left mt-4">Na ASV PARIS, nossa missão é acabar com os atrasos e complicações...</p>
                </div>
            </Section>

            {/* Location Section */}
            <div className="relative flex flex-col min-h-screen bg-[var(--cor-branco)]">
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10">
                    <div className="flex flex-col justify-start items-start p-8 max-w-lg min-h-[40vh] mb-12 gap-3">
                        <h1 className="text-5xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">
                            Serviços de Engenharia <br /> e Arquitetura em Sorocaba
                        </h1>
                        <p className="text-2xl mt-2 text-left text-[var(--cor-amarelo-escuro)]">
                            Confie na ASV PARIS para soluções completas em engenharia elétrica, civil e arquitetura.
                            Localizada na Avenida Elias Maluf, nº 2067 (Piso Superior), nossa equipe de especialistas está pronta para
                            transformar seu projeto em realidade.
                        </p>
                    </div>
                    <div className="p-8 ml-[9rem]">
                        <img src={asvParisLocation} alt="Localização ASVPARIS" className="rounded-lg shadow-lg w-[25rem] h-[30rem] object-cover" />
                    </div>
                </div>
            </div>

            {/* EQUIPE */}

            <div className="relative flex flex-col h-screen bg-[var(--cor-branco)]">
                <div className="flex flex-col items-center mt-8">
                    <h2 className="text-4xl font-bold text-center text-[var(--cor-azul)] relative after:content-[''] after:block after:w-16 after:h-[2px] after:bg-[var(--cor-azul)] after:mx-auto after:mt-2">
                        EQUIPE
                    </h2>
                </div>
                <div className="flex flex-col items-center mt-10">
                    {/* Container para a linha de membros */}
                    <div className="flex justify-center gap-[5rem]">
                        {/* Membro 1 */}
                        <div className="flex flex-col justify-start items-center p-4 w-[18rem] gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform transform hover:scale-110 h-[26rem]">
                            <img
                                src={andreEquipe}
                                alt="Membro 1"
                                className="rounded-full w-[15rem] h-[19rem] object-cover mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)] text-center w-full">André Bonora</h3>
                            <p className="text-base text-gray-700 text-center w-full">
                                Engenheiro Eletricista
                            </p>
                        </div>
                        {/* Membro 2 */}
                        <div className="flex flex-col justify-start items-center p-4 w-[18rem] gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform transform hover:scale-110 h-[26rem]">
                            <img
                                src={wanessaEquipe}
                                alt="Membro 2"
                                className="rounded-full w-[15rem] h-[19rem] object-cover mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)] text-center w-full">Wanessa Marques</h3>
                            <p className="text-base text-gray-700 text-center w-full">
                                Arquiteta
                            </p>
                        </div>
                        {/* Membro 3 */}
                        <div className="flex flex-col justify-start items-center p-4 w-[18rem] gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform transform hover:scale-110 h-[26rem]">
                            <img
                                src={casal}
                                alt="Membro 3"
                                className="rounded-full w-[15rem] h-[19rem] object-cover mx-auto"
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)] text-center w-full">Ana e Edelsio Araújo</h3>
                            <p className="text-base text-gray-700 text-center w-full">
                                Engenheiro Civil
                            </p>
                        </div>
                    </div>
                </div>
            </div>


            <Footer />
        </>
    );
}

export default Home;
