import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { FaWhatsapp } from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";

const backgroundImage = '/Images/background-image.jpg';
const andreTraçado = '/Images/andre-bonora-traçado-fino.png';
const wanessaTraçada = '/Images/wanessa-arquiteta-traçado-fino.png';
const asvParisLocation = '/Images/asvparis-localizacao.jpg';
const casal = '/Images/casal.jpg';
const wanessaEquipe = '/Images/wanessa-equipe.jpg';
const andreEquipe = '/Images/andre-equipe.jpg';
const imagemEngenharia4 = '/Images/imagem-engenharia4.jpg';

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
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-8 lg:p-10 w-48 sm:w-64 md:w-80 lg:w-96 gap-3 rounded-lg shadow-lg bg-gradient-to-br from-yellow-400 to-yellow-300 transition-transform hover:scale-105">
        <LazyLoadImage
            src={imgSrc}
            alt={`Membro ${name}`}
            className="rounded-full w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 object-cover shadow-md"
        />
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-[var(--cor-azul)] text-center">{name}</h3>
        <p className="text-xs sm:text-sm md:text-base text-gray-700 text-center">{title}</p>
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
            <section id="hero-section" className="relative flex flex-col min-h-screen bg-[var(--cor-amarelo)]">
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between flex-col md:flex-row">
                    <div className="flex flex-col justify-start items-start p-8 max-w-lg w-full gap-4 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 order-2 lg:order-1 mb-[16rem] sm:mb-10 lg:ml-[2rem]">
                        <h1 className="text-4xl font-bold text-left text-[#003366]">Inove Seu Espaço Conosco</h1>
                        <p className="text-lg md:text-xl mt-2 text-left text-[#333333]">
                            Transforme seus sonhos em realidade com nossa experiência em arquitetura, engenharia elétrica e civil.
                            Em Sorocaba e região, oferecemos soluções integradas em um só lugar, garantindo qualidade e inovação em cada projeto.
                            Deixe-nos criar o espaço perfeito para você!
                        </p>
                        <ContactButton href={`https://wa.me/5515988150433`}>Contato</ContactButton>
                    </div>
                    <div className="flex-shrink-0 md:mt-0 order-1 lg:order-2 lg:mt-[7rem]">
                        <img src={andreTraçado} alt="Engenheiro André" className="hidden md:block w-full h-auto max-w-lg object-cover md:mr-8" />
                    </div>
                </div>
            </section>
            {/* Construa com Nossa Equipe */}
            <Section bgImage={backgroundImage} overlayColor="bg-blue-900" overlayOpacity={70}>
                <div className="flex-shrink-0 mt-6 md:mt-0 order-1 lg:order-1">
                    <img
                        src={wanessaTraçada}
                        alt="Arquiteta Wanessa"
                        className="hidden md:block w-full h-auto max-w-lg object-cover lg:ml-8 lg:mt-[17.185rem] xl:ml-16 xl:mb-[8rem]"
                    />
                </div>
                <div className="flex flex-col justify-start items-start p-8 md:p-10 max-w-lg w-full gap-4 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 ml-auto order-2 lg:order-2 lg:mr-[2rem]">
                    <h1 className="text-4xl md:text-6xl font-bold text-left text-[#FFD700]">Construa com Nossa Equipe</h1>
                    <p className="text-lg md:text-xl mt-2 text-left text-[#333333]">
                        Em Sorocaba, SP, transformamos a visão em realidade. Oferecemos serviços superiores de engenharia elétrica, civil e arquitetura,
                        combinando inovação com excelência. Confie em quem entende de construção com precisão e paixão. Vamos construir juntos.
                    </p>
                    <ContactButton className="" href={`https://wa.me/5515988150433`}>Fale Conosco</ContactButton>
                </div>
            </Section>
            {/* About Section */}
            <Section
                bgImage={imagemEngenharia4}
                overlayColor="bg-white"
                overlayOpacity={80}
            >
                <div id="about-section" className="flex flex-col items-start mt-4 mx-4 md:mx-8 z-10">
                    <h2 className="font-bold text-[var(--cor-azul)] whitespace-nowrap text-left sm:mb-0 text-3xl md:mb-0 lg:text-4xl lg:mb-[4rem] xl:mb-[3rem] xl:text-5xl">
                        Sobre
                    </h2>
                    <h3 className="text-left mt-4 sm:text-xs md:text-[8px] lg:text-2xl xl:text-lg">Porque escolher a ASV PARIS:</h3>
                    <ol className="list-decimal list-inside mt-2 sm:text-[6px] md:text-[8px] lg:text-2xl xl:text-lg">
                        <li><strong className="text-[var(--cor-azul)] sm:text-[6px] md:text-[8px] lg:text-lg xl:text-lg">Planejamento Integrado:</strong></li>
                        <p className="text-black sm:text-[6px] md:text-[8px] lg:text-lg xl:text-lg">Ao trabalharmos juntos desde o início, eliminamos a possibilidade de falhas de comunicação entre as diferentes especialidades, garantindo que todos os aspectos do projeto estejam alinhados.</p>
                        <li><strong className="text-[var(--cor-azul)] sm:text-[6px] md:text-[8px] xl:text-lg lg:text-lg ">Eficiência e Agilidade:</strong></li>
                        <p className="sm:text-[6px] md:text-[8px] xl:text-lg lg:text-lg ">A coordenação entre engenheiros civis, eletricistas e arquitetos reduz os atrasos e melhora a eficiência no cronograma de execução.</p>
                        <li><strong className="text-[var(--cor-azul)] sm:text-[6px] md:text-[8px] xl:text-lg lg:text-lg ">Qualidade Superior:</strong></li>
                        <p className="sm:text-[6px] md:text-[8px] lg:text-lg xl:text-lg">Com uma equipe multidisciplinar, garantimos que cada detalhe do projeto seja pensado de forma holística, resultando em soluções de maior qualidade.</p>
                        <li><strong className="text-[var(--cor-azul)] sm:text-[6px] md:text-[8px] xl:text-lg lg:text-lg ">Tranquilidade para Você:</strong></li>
                        <p className="sm:text-[6px] md:text-[8px] lg:text-lg xl:text-lg">Deixe os problemas conosco! Nossa abordagem integrada significa menos preocupações para você e um projeto mais fluido.</p>
                    </ol>
                </div>
            </Section>
            {/* Location Section */}
            <div className="relative flex flex-col min-h-screen bg-[var(--cor-branco)]">
                <div className="flex flex-col md:flex-row container mx-auto w-full h-auto items-center justify-center px-4 sm:px-6 md:px-8 lg:px-12 py-8">
                    {/* Texto */}
                    <div className="flex flex-col justify-center items-center text-center md:text-left max-w-md w-full gap-3">
                        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[var(--cor-azul)] leading-tight">
                            Serviços de Engenharia <br /> e Arquitetura em Sorocaba
                        </h1>
                        <p className="text-base sm:text-lg md:text-xl text-[var(--cor-amarelo-escuro)]">
                            Confie na ASV PARIS para soluções completas em engenharia elétrica, civil e arquitetura.
                            Localizada na Avenida Elias Maluf, nº 2067 (Piso Superior), nossa equipe de especialistas está pronta para
                            transformar seu projeto em realidade.
                        </p>
                    </div>

                    {/* Imagem */}
                    <div className="flex-shrink-0 w-full md:w-1/2 lg:w-1/3 flex justify-center mt-20">
                        <img
                            src={asvParisLocation}
                            alt="Localização da ASV PARIS"
                            className="rounded-lg shadow-lg w-full h-auto object-cover max-w-[70%] sm:max-w-[60%] md:max-w-[100%] mx-auto"
                        />
                    </div>


                </div>

            </div>

            {/* Equipe */}
            <section id="team-section" className="min-h-screen w-full bg-[var(--cor-branco)] py-16 flex flex-col justify-center">
                <div className="flex justify-center items-center mb-12">
                    <h2 className="text-center font-bold text-[var(--cor-azul)] border-b-4 border-[var(--cor-azul)] inline-block pb-2 text-lg sm:text-xl md:text-3xl lg:text-4xl xl:text-5xl">
                        Nossa Equipe
                    </h2>
                </div>
                {/* Cards da Equipe */}
                <div className="flex flex-wrap justify-center gap-8 px-4">
                    <TeamMember imgSrc={andreEquipe} name="André Bonora" title="Engenheiro Eletricista" />
                    <TeamMember imgSrc={wanessaEquipe} name="Vanessa Marques" title="Arquiteta" />
                    <TeamMember imgSrc={casal} name="Edelcio de Araujo e Ana Carolina de Lima" title="Especialistas em Engenharia e Arquitetura" />
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;