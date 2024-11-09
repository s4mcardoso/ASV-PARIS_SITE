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
import imagemEngenharia4 from '../../../public/Images/imagem-engenharia4.jpg';

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
    <div className="flex flex-col justify-start items-center p-4 w-full sm:w-[20rem] md:w-[18rem] gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform transform hover:scale-110">
        <img src={imgSrc} alt={`Membro ${name}`} className="rounded-full w-[12rem] h-[12rem] object-cover" />
        <h3 className="text-xl font-semibold text-[var(--cor-azul)] text-center">{name}</h3>
        <p className="text-base text-gray-700 text-center">{title}</p>
    </div>
);

const Section = ({ bgImage, overlayColor, overlayOpacity, children }) => (
    <div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${bgImage})` }}>
        <div className={`absolute inset-0 ${overlayColor}`} style={{ opacity: overlayOpacity / 100 }}></div>
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
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between flex-col md:flex-row">
                    <div className="flex flex-col justify-start items-start p-8 md:p-10 max-w-lg w-full gap-4 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 order-2 lg:order-1">
                        <h1 className="text-4xl md:text-6xl font-bold text-left text-[#003366]">Inove Seu Espaço Conosco</h1>
                        <p className="text-lg md:text-xl mt-2 text-left text-[#333333]">
                            Transforme seus sonhos em realidade com nossa experiência em arquitetura, engenharia elétrica e civil.
                            Em Sorocaba e região, oferecemos soluções integradas em um só lugar, garantindo qualidade e inovação em cada projeto.
                            Deixe-nos criar o espaço perfeito para você!
                        </p>
                        <ContactButton href={`https://wa.me/155198150433`}>Contato</ContactButton>
                    </div>
                    <div className="flex-shrink-0 mt-6 md:mt-0 order-1 lg:order-2">
                        <img src={andreTraçado} alt="Engenheiro André" className="hidden md:block w-full h-auto max-w-lg object-cover md:mr-8" />
                    </div>
                </div>
            </div>

            {/* Equipe Section */}

            <Section id="team-section" bgImage={backgroundImage} overlayColor="bg-blue-900" overlayOpacity={70}>
                <div className="flex-shrink-0 mt-6 md:mt-0 order-1 lg:order-1">
                    <img src={wanessaTraçada} alt="Arquiteta Wanessa" className="hidden md:block w-full h-auto max-w-lg object-cover lg:ml-8 mt-[11.310rem]" />
                </div>
                <div className="flex flex-col justify-start items-start p-8 md:p-10 max-w-lg w-full gap-4 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 ml-auto order-2 lg:order-2">
                    <h1 className="text-4xl md:text-6xl font-bold text-left text-[#FFD700]">Construa com Nossa Equipe</h1>
                    <p className="text-lg md:text-xl mt-2 text-left text-[#333333]">
                        Em Sorocaba, SP, transformamos a visão em realidade. Oferecemos serviços superiores de engenharia elétrica, civil e arquitetura,
                        combinando inovação com excelência. Confie em quem entende de construção com precisão e paixão. Vamos construir juntos.
                    </p>
                    <ContactButton href={`https://wa.me/155198150433`}>Fale Conosco</ContactButton>
                </div>
            </Section>

            {/* About Section */}
            <Section
                id = "about-section"
                bgImage={imagemEngenharia4}
                overlayColor="bg-white"
                overlayOpacity={80}
                style={{ backgroundImage: `url(${imagemEngenharia4})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            >
                <div className="flex flex-col items-start mt-4 mx-4 md:mx-8 z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">
                        Sobre
                    </h2>
                    <p className="text-left mt-4 text-base md:text-lg">
                        No mundo da construção civil, é comum encontrar inúmeros problemas que resultam em atrasos e frustrações...
                    </p>
                    <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Nossa Proposta:</h3>
                    <p className="text-left mt-2 text-base md:text-lg">
                        Diante desse cenário desafiador, decidimos criar a ASV PARIS...
                    </p>
                    <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Vantagens de Escolher a ASV PARIS:</h3>
                    <ol className="list-decimal list-inside mt-2">
                        <li><strong className="text-[var(--cor-azul)]">Planejamento Integrado:</strong></li>
                        <p className="text-black">Ao trabalharmos juntos desde o início, eliminamos a possibilidade de falhas de comunicação entre as diferentes especialidades, garantindo que todos os aspectos do projeto estejam alinhados.</p>
                        <li><strong className="text-[var(--cor-azul)]">Eficiência e Agilidade:</strong></li>
                        <p>A coordenação entre engenheiros civis, eletricistas e arquitetos reduz os atrasos e melhora a eficiência no cronograma de execução.</p>
                        <li><strong className="text-[var(--cor-azul)]">Qualidade Superior:</strong></li>
                        <p><p>Com uma equipe multidisciplinar, garantimos que cada detalhe do projeto seja pensado de forma holística, resultando em soluções de maior qualidade.</p></p>
                        <li><strong className="text-[var(--cor-azul)]">Tranquilidade para Você:</strong></li>
                        <p><p>Deixe os problemas conosco! Nossa abordagem integrada significa menos preocupações para você e um projeto mais fluido.</p></p>
                    </ol>
                </div>
            </Section>


            {/* Location Section */}
            <div className="relative flex flex-col min-h-screen bg-[var(--cor-branco)]">
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10 flex-col md:flex-row">
                    <div className="flex flex-col justify-start items-start p-6 max-w-md w-full mb-12 gap-3 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-[6rem]">
                        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">
                            Serviços de Engenharia <br /> e Arquitetura em Sorocaba
                        </h1>
                        <p className="text-lg md:text-xl mt-2 text-left text-[var(--cor-amarelo-escuro)]">
                            Confie na ASV PARIS para soluções completas em engenharia elétrica, civil e arquitetura.
                            Localizada na Avenida Elias Maluf, nº 2067 (Piso Superior), nossa equipe de especialistas está pronta para
                            transformar seu projeto em realidade.
                        </p>
                    </div>
                    <div className="flex-shrink-0 mt-12 md:mt-16 lg:h-auto w-[20rem] ml-auto">
                        <img src={asvParisLocation} alt="Localização da ASV PARIS" className="rounded-lg shadow-lg w-full h-auto max-w-lg object-cover" />
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="bg-white py-12 h-screen">
                <h1 className="text-4xl md:text-5xl font-bold text-center text-[var(--cor-azul)] mt-auto">
                    Conheça Nossa Equipe
                </h1>
                <div className="flex flex-wrap justify-center mt-8 gap-8">
                    <TeamMember imgSrc={andreEquipe} name="André Bonora" title="Engenheiro Civil" />
                    <TeamMember imgSrc={wanessaEquipe} name="Wanessa Moya" title="Arquiteta e Urbanista" />
                    <TeamMember imgSrc={casal} name="Equipe ASV PARIS" title="Especialistas em Engenharia e Arquitetura" />
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
