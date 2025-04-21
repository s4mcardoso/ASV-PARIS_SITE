import { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { FaWhatsapp, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';

// Imagens
const backgroundImage = '/Images/background-image.jpg';
const asvParisLocation = '/Images/asvparis-localizacao.jpg';
const casal = '/Images/casal.jpg';
const wanessaEquipe = '/Images/wanessa-equipe.jpg';
const andreEquipe = '/Images/andre-equipe.jpg';
const imagemEngenharia4 = '/Images/imagem-engenharia4.jpg';

// Componente de botão reutilizável com animação
const ActionButton = ({ href, className, children, icon }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`group inline-flex items-center px-5 py-3 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-md ${className}`}
    >
        {children}
        {icon && <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </a>
);

// Componente para cards de membros da equipe com animação aprimorada
const TeamMember = ({ imgSrc, name, title, description }) => (
    <div className="flex flex-col items-center p-5 w-full max-w-xs md:max-w-sm rounded-xl shadow-lg bg-white border-t-4 border-[var(--cor-amarelo)] hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
        <div className="relative w-32 h-32 md:w-40 md:h-40 mb-4 overflow-hidden rounded-full border-4 border-[var(--cor-amarelo)]">
            <LazyLoadImage
                src={imgSrc}
                alt={`${name} - ${title}`}
                effect="blur"
                className="w-full h-full object-cover"
                wrapperClassName="w-full h-full"
            />
        </div>
        <h3 className="text-xl md:text-2xl font-bold text-[var(--cor-azul)]">{name}</h3>
        <p className="text-base text-gray-700 font-medium">{title}</p>
        {description && <p className="mt-2 text-center text-gray-600 text-sm">{description}</p>}
        <div className="w-16 h-1 bg-[var(--cor-amarelo)] rounded-full mt-3"></div>
    </div>
);

// Componente de seção com parallax e melhor controle de overlay
const Section = ({ id, bgImage, overlayColor, overlayOpacity, children, fullHeight = true }) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const parallaxStyle = bgImage ? {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundAttachment: 'fixed'
    } : {};

    return (
        <section
            id={id}
            className={`relative w-full ${fullHeight ? 'min-h-screen' : ''} overflow-hidden`}
            style={parallaxStyle}
        >
            {overlayColor && (
                <div
                    className={`absolute inset-0 ${overlayColor}`}
                    style={{ opacity: overlayOpacity / 100 }}
                ></div>
            )}
            <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 flex flex-col items-center justify-center h-full">
                {children}
            </div>
        </section>
    );
};

// Cards animados para serviços
const ServiceCard = ({ icon, title, description }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-[var(--cor-amarelo)] transform hover:-translate-y-1">
        <div className="text-3xl text-[var(--cor-amarelo)] mb-4">{icon}</div>
        <h3 className="text-xl font-bold text-[var(--cor-azul)] mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </div>
);

// Componente para estatísticas animadas
const StatCounter = ({ number, label }) => {
    const [count, setCount] = useState(0);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            { threshold: 0.1 }
        );

        const currentElement = document.getElementById(`stat-${label.replace(/\s+/g, '-').toLowerCase()}`);
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [label]);

    useEffect(() => {
        if (isVisible) {
            const duration = 2000; // ms
            const interval = 50; // ms
            const increment = Math.ceil(number / (duration / interval));

            const timer = setInterval(() => {
                setCount(prev => {
                    const newCount = prev + increment;
                    if (newCount >= number) {
                        clearInterval(timer);
                        return number;
                    }
                    return newCount;
                });
            }, interval);

            return () => clearInterval(timer);
        }
    }, [isVisible, number]);

    return (
        <div id={`stat-${label.replace(/\s+/g, '-').toLowerCase()}`} className="flex flex-col items-center">
            <span className="text-4xl md:text-5xl font-bold text-[var(--cor-amarelo)]">{count}+</span>
            <span className="text-lg mt-2 text-white font-medium">{label}</span>
        </div>
    );
};

function Home() {
    return (
        <>
            <Header />

            {/* Hero Section com animação e CTA mais destacado */}
            <section className="relative min-h-screen bg-gradient-to-br from-[var(--cor-azul)] to-[#001a33] flex items-center overflow-hidden">
                {/* Elementos de fundo animados */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -right-20 -top-20 w-96 h-96 bg-[var(--cor-amarelo)] rounded-full opacity-20 blur-3xl"></div>
                    <div className="absolute -left-20 bottom-10 w-80 h-80 bg-[#FFD700] rounded-full opacity-10 blur-3xl"></div>
                </div>

                <div className="container mx-auto px-4 z-20">
                    <div className="flex flex-col lg:flex-row items-center justify-between">
                        <div className="w-full lg:w-1/2 mb-12 lg:mb-0">
                            <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
                                    <span className="text-[var(--cor-amarelo)]">Inove</span> Seu Espaço <br />Com Excelência
                                </h1>
                                <div className="w-24 h-1 bg-[var(--cor-amarelo)] my-6"></div>
                                <p className="text-lg md:text-xl text-white/90 mb-8">
                                    Transforme seus sonhos em realidade com nossa experiência integrada em arquitetura,
                                    engenharia elétrica e civil. Soluções personalizadas que combinam estética,
                                    funcionalidade e inovação em Sorocaba e região.
                                </p>
                                <div className="flex flex-col sm:flex-row gap-4">
                                    <ActionButton
                                        href="https://wa.me/5515988150433"
                                        className="bg-[var(--cor-amarelo)] text-white hover:bg-[var(--cor-amarelo-escuro)]"
                                        icon={<FaWhatsapp className="text-xl" />}
                                    >
                                        Fale Conosco
                                    </ActionButton>
                                    <ActionButton
                                        href="#services"
                                        className="bg-transparent border-2 border-white text-white hover:bg-white/10"
                                    >
                                        Nossos Serviços
                                    </ActionButton>
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-1/2 flex justify-center relative">
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-4 bg-[var(--cor-amarelo)]/20 rounded-xl blur-lg"></div>
                                <img
                                    src="/Images/imagem-engenharia3.jpg"
                                    alt="Projeto ASV Paris"
                                    className="w-full h-auto object-cover rounded-lg shadow-2xl border-4 border-white/30"
                                    onError={(e) => {
                                        e.target.src = imagemEngenharia4;
                                    }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Seção Sobre com layout mais moderno */}
            <Section id="about" overlayColor="bg-white" overlayOpacity={100} fullHeight={false}>
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--cor-azul)]">Sobre a ASV PARIS</h2>
                        <div className="w-24 h-1 bg-[var(--cor-amarelo)] mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                        <div>
                            <img
                                src={imagemEngenharia4}
                                alt="ASV Paris Projetos"
                                className="rounded-lg shadow-xl w-full h-auto"
                            />
                        </div>

                        <div>
                            <h3 className="text-2xl font-bold text-[var(--cor-azul)] mb-4">
                                Por que escolher a ASV PARIS?
                            </h3>

                            <div className="space-y-6">
                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-[var(--cor-amarelo)] flex items-center justify-center text-white font-bold">1</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-[var(--cor-azul)]">Planejamento Integrado</h4>
                                        <p className="mt-2 text-gray-700">
                                            Ao trabalharmos juntos desde o início, eliminamos falhas de comunicação
                                            entre especialidades, garantindo alinhamento perfeito em todos os aspectos do projeto.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-[var(--cor-amarelo)] flex items-center justify-center text-white font-bold">2</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-[var(--cor-azul)]">Eficiência e Agilidade</h4>
                                        <p className="mt-2 text-gray-700">
                                            Nossa equipe integrada de engenheiros civis, eletricistas e arquitetos
                                            garante maior eficiência e cumprimento de prazos com excelência.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-[var(--cor-amarelo)] flex items-center justify-center text-white font-bold">3</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-[var(--cor-azul)]">Qualidade Superior</h4>
                                        <p className="mt-2 text-gray-700">
                                            Com abordagem multidisciplinar, cada detalhe é pensado de forma holística,
                                            resultando em soluções de maior qualidade e durabilidade.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-8 h-8 rounded-full bg-[var(--cor-amarelo)] flex items-center justify-center text-white font-bold">4</div>
                                    </div>
                                    <div className="ml-4">
                                        <h4 className="text-lg font-semibold text-[var(--cor-azul)]">Tranquilidade para Você</h4>
                                        <p className="mt-2 text-gray-700">
                                            Foque no que realmente importa enquanto cuidamos de todo o processo.
                                            Nossa abordagem integrada significa menos preocupações e um projeto mais fluido.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Seção de Serviços Aprimorada */}
            <Section
                id="services"
                bgImage={backgroundImage}
                overlayColor="bg-[var(--cor-azul)]"
                overlayOpacity={90}
            >
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Nossos Serviços</h2>
                        <div className="w-24 h-1 bg-[var(--cor-amarelo)] mt-4"></div>
                        <p className="mt-6 text-lg text-center text-white/80 max-w-2xl">
                            Oferecemos soluções completas para seu projeto, desde o planejamento inicial
                            até a execução final, com profissionais qualificados em diferentes áreas.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <ServiceCard
                            title="Arquitetura"
                            description="Projetos arquitetônicos personalizados que combinam estética, funcionalidade e bem-estar para residências e espaços comerciais."
                        />

                        <ServiceCard
                            title="Engenharia Elétrica"
                            description="Projetos elétricos completos, incluindo instalações elétricas, SPDA, sistemas de automação e eficiência energética."
                        />

                        <ServiceCard
                            title="Engenharia Civil"
                            description="Projetos estruturais, fundações, hidráulicos e acompanhamento de obras para garantir segurança e qualidade."
                        />

                        <ServiceCard
                            title="Regularização"
                            description="Regularização de imóveis e empreendimentos junto aos órgãos competentes, incluindo Habite-se e alvará de funcionamento."
                        />

                        <ServiceCard
                            title="Consultoria"
                            description="Consultoria técnica especializada para análise de viabilidade, laudos técnicos e perícias em edificações."
                        />

                        <ServiceCard
                            title="Gestão de Projetos"
                            description="Gerenciamento completo do seu projeto, desde a concepção até a entrega final, otimizando tempo e recursos."
                        />
                    </div>
                </div>
            </Section>

            {/* Contador de estatísticas */}
            <Section overlayColor="bg-[var(--cor-azul)]" overlayOpacity={100} fullHeight={false}>
                <div className="w-full max-w-6xl mx-auto py-12">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <StatCounter number={50} label="Projetos Executados" />
                        <StatCounter number={15} label="Anos de Experiência" />
                        <StatCounter number={100} label="Clientes Satisfeitos" />
                        <StatCounter number={30} label="Parceiros" />
                    </div>
                </div>
            </Section>

            {/* Seção de Localização com mapa interativo */}
            <Section id="localizacao" overlayColor="bg-white" overlayOpacity={100} fullHeight={false}>
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[var(--cor-azul)]">Nossa Localização</h2>
                        <div className="w-24 h-1 bg-[var(--cor-amarelo)] mt-4"></div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div className="order-2 lg:order-1">
                            <div className="bg-white rounded-xl shadow-xl overflow-hidden">
                                <img
                                    src={asvParisLocation}
                                    alt="Localização da ASV PARIS"
                                    className="w-full h-auto object-cover"
                                />
                                <div className="p-6">
                                    <h3 className="text-xl font-bold text-[var(--cor-azul)] mb-3">
                                        Venha nos Visitar
                                    </h3>
                                    <div className="flex items-start mb-4">
                                        <FaMapMarkerAlt className="text-[var(--cor-amarelo)] mt-1 mr-3 text-xl" />
                                        <p className="text-gray-700">
                                            Avenida Elias Maluf, nº 2067 (Piso Superior)<br />
                                            Sorocaba - SP
                                        </p>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <FaPhone className="text-[var(--cor-amarelo)] mr-3 text-xl" />
                                        <p className="text-gray-700">(15) 98815-0433</p>
                                    </div>
                                    <div className="mt-6">
                                        <ActionButton
                                            href="https://goo.gl/maps/yourMapLink"
                                            className="bg-[var(--cor-azul)] text-white hover:bg-[var(--cor-amarelo)]"
                                            icon={<FaMapMarkerAlt />}
                                        >
                                            Ver no Google Maps
                                        </ActionButton>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-1 lg:order-2">
                            <h3 className="text-2xl font-bold text-[var(--cor-azul)] mb-4">
                                Serviços de Engenharia e<br />Arquitetura em Sorocaba
                            </h3>
                            <p className="text-lg text-gray-700 mb-6">
                                Confie na ASV PARIS para soluções completas em engenharia elétrica,
                                civil e arquitetura. Nossa equipe de especialistas está pronta para
                                transformar seu projeto em realidade com qualidade e excelência.
                            </p>
                            <p className="text-lg text-gray-700 mb-8">
                                Atendemos Sorocaba e toda região, incluindo Votorantim, Itu,
                                Salto, Araçoiaba da Serra, Piedade e outras cidades próximas.
                            </p>
                            <ActionButton
                                href="https://wa.me/5515988150433"
                                className="bg-[var(--cor-amarelo)] text-white hover:bg-[var(--cor-azul)]"
                                icon={<FaWhatsapp className="text-xl" />}
                            >
                                Agende uma Visita
                            </ActionButton>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Nossa Equipe - Layout aprimorado */}
            <Section id="team" bgImage={backgroundImage} overlayColor="bg-gray-900" overlayOpacity={90}>
                <div className="w-full max-w-6xl mx-auto">
                    <div className="flex flex-col items-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Nossa Equipe</h2>
                        <div className="w-24 h-1 bg-[var(--cor-amarelo)] mt-4"></div>
                        <p className="mt-6 text-lg text-center text-white/80 max-w-2xl">
                            Conheça os profissionais dedicados que farão do seu projeto um sucesso.
                            Nossa equipe multidisciplinar trabalha em perfeita harmonia para entregar
                            resultados excepcionais.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        <TeamMember
                            imgSrc={andreEquipe}
                            name="André Bonora"
                            title="Engenheiro Eletricista"
                            description="Especialista em projetos elétricos residenciais e comerciais, com foco em eficiência energética e automação."
                        />

                        <TeamMember
                            imgSrc={wanessaEquipe}
                            name="Vanessa Marques"
                            title="Arquiteta"
                            description="Apaixonada por design de interiores e criação de ambientes funcionais e esteticamente harmoniosos."
                        />

                        <TeamMember
                            imgSrc={casal}
                            name="Edelcio & Ana Carolina"
                            title="Engenharia e Arquitetura"
                            description="Dupla especializada na coordenação de projetos integrados, combinando aspectos técnicos e estéticos."
                        />
                    </div>
                </div>
            </Section>

            {/* Seção CTA */}
            <section className="bg-gradient-to-r from-[var(--cor-azul)] to-[#001a33] py-16">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Pronto para transformar seus projetos em realidade?
                    </h2>
                    <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                        Entre em contato agora mesmo e agende uma consulta gratuita com nossos especialistas.
                        Estamos ansiosos para fazer parte do seu próximo projeto!
                    </p>
                    <ActionButton
                        href="https://wa.me/5515988150433"
                        className="bg-[var(--cor-amarelo)] text-white hover:bg-[var(--cor-amarelo-escuro)] px-8 py-4 text-lg"
                        icon={<FaWhatsapp className="text-xl" />}
                    >
                        Fale com um Especialista
                    </ActionButton>
                </div>
            </section>

            <Footer />
        </>
    );
}

export default Home;