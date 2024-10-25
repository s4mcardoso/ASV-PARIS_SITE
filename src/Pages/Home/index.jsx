import Footer from '../../Components/Footer';
import Header from '../../Components/Header';
import { FaWhatsapp } from 'react-icons/fa';
import BackgroundImage2 from '../../assets/imagemengenharia.jpg';
import AndreTraçado from '../../assets/AndreBonoraTraçadoFino.png';
import WanessaTraçada from '../../assets/Wanessa_arquiteta-removebg.png';
import AsvParisLocation from '../../assets/asvparislocalizacao.jpg';
import Casal from '../../assets/Imagem do WhatsApp de 2024-10-21 à(s) 13.53.10_1241626f.jpg';
import WanessaEquipe from '../../assets/wanessa_equipe.jpg';
import AndreEquipe from '../../assets/andre_equipe.jpg';
import Trabalhador from '../../assets/tiler-working-renovation-apartment.jpg'

function Home() {
    return (
        <>
            <Header />
            {/* HOME */}
            <div id="hero-section" className="relative flex flex-col min-h-screen bg-[var(--cor-amarelo)]">
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between">
                    <div className="flex flex-col justify-start items-start p-[2rem] max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20">
                        <h1 className="text-6xl font-bold text-left text-[#003366]">
                            Inove Seu Espaço Conosco
                        </h1>
                        <p className="text-2xl mt-2 text-left text-[#333333]">
                            Transforme seus sonhos em realidade com nossa experiência em arquitetura, engenharia elétrica e civil. Em Sorocaba, oferecemos soluções integradas em um só lugar, garantindo qualidade e inovação em cada projeto. Deixe-nos criar o espaço perfeito para você!
                        </p>
                        <a
                            href={`https://wa.me/${5515988150433}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center px-4 py-2 bg-[var(--cor-amarelo)] text-white rounded-lg transition-colors duration-300 hover:bg-[#003366] font-medium"
                        >
                            Contato <FaWhatsapp className="ml-2 h-7" />
                        </a>
                    </div>
                    <div className="absolute right-0 flex-shrink-0" style={{ top: '3rem', zIndex: 10 }}>
                        <img
                            src={AndreTraçado}
                            alt="Imagem do engenheiro André"
                            className="w-full h-auto max-w-lg object-cover mr-[7rem]"
                        />
                    </div>
                </div>
            </div>
            {/* PRÓXIMA SEÇÃO COM BACKGROUND IMAGE E OVERLAY */}
            <div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${BackgroundImage2})` }}>
                {/* Overlay amarelo */}
                <div className="absolute inset-0 bg-blue-900 opacity-70"></div>
                <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10">
                    <div className="flex flex-col justify-start items-start p-8 max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 ml-auto">
                        <h1 className="text-6xl font-bold text-left text-[#FFD700]">
                            Construa com Nossa Equipe
                        </h1>
                        {/* Overlay azul opaco */}
                        <p className="text-2xl mt-2 text-left text-[#333333]">
                            Em Sorocaba, SP, transformamos a visão em realidade. Oferecemos serviços superiores de engenharia elétrica, civil e arquitetura, combinando inovação com excelência. Quer se trate de projetos residenciais ou comerciais, nossa expertise garante soluções eficientes e estéticas que superam expectativas. Confie em quem entende de construção com precisão e paixão. Vamos construir juntos.
                        </p>
                        <a
                            href={`https://wa.me/${5515988150433}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center px-5 py-2 bg-[var(--cor-azul)] text-white rounded-lg transition-colors duration-300 hover:bg-yellow-400 font-medium"
                        >
                            Fale Conosco <FaWhatsapp className="ml-2 h-8" />
                        </a>
                    </div>
                    <div className="absolute left-0 flex-shrink-0" style={{ top: '7.8rem', zIndex: 10 }}>
                        <img
                            src={WanessaTraçada}
                            alt="Imagem da arquiteta Wanessa"
                            className="w-full h-auto max-w-lg object-cover ml-[7rem]"
                        />
                    </div>
                </div>
            </div>
            {/* LOCALIZAÇÂO DE ASVPARIS */}
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
                    <div className="p-8 mr-[8rem]">
                        <img
                            src={AsvParisLocation}
                            alt="Localização ASVPARIS"
                            className="rounded-lg shadow-lg w-[16rem] h-130 object-cover"
                        />
                    </div>
                </div>
            </div>

            {/* Sobre */}
            <div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${Trabalhador})` }}>
                {/* Camada de sobreposição com efeito vidro */}
                <div className="absolute inset-0 bg-white opacity-80 backdrop-blur-md"></div>
                <div className="relative flex flex-col min-h-screen ml-6">
                    <div className="flex flex-col items-start mt-8 ml-8 z-10"> {/* z-10 para colocar o texto acima da camada */}
                        <h2 className="text-5xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">
                            Sobre
                        </h2>
                        <p className="text-left mt-4">
                            No mundo da construção civil, é comum encontrar inúmeros problemas que resultam em atrasos e frustrações. Ao observar de perto as dificuldades enfrentadas por engenheiros civis e elétricos, percebemos que a falta de um planejamento integrado pode causar verdadeiras dores de cabeça. Esses contratempos não apenas impactam prazos, mas também a qualidade e a eficiência dos projetos.
                        </p>

                        <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Nossa Proposta:</h3>
                        <p className="text-left mt-2">
                            Diante desse cenário desafiador, decidimos criar a ASV PARIS, uma empresa dedicada a oferecer uma solução completa para seus projetos. Combinamos as áreas de engenharia civil, elétrica e arquitetura em um único serviço, garantindo que todas as etapas do projeto sejam planejadas e executadas de forma integrada.
                        </p>

                        <h3 className="font-semibold mt-4 text-[var(--cor-azul)]">Vantagens de Escolher a ASV PARIS:</h3>
                        <ol className="list-decimal list-inside mt-2">
                            <li>
                                <strong className="text-[var(--cor-azul)]">Planejamento Integrado:</strong> Ao trabalharmos juntos desde o início, eliminamos a possibilidade de falhas de comunicação entre as diferentes especialidades, garantindo que todos os aspectos do projeto estejam alinhados.
                            </li>
                            <li>
                                <strong className="text-[var(--cor-azul)]">Eficiência e Agilidade:</strong> A coordenação entre engenheiros civis, elétricos e arquitetos reduz os atrasos e melhora a eficiência no cronograma de execução.
                            </li>
                            <li>
                                <strong className="text-[var(--cor-azul)]">Qualidade Superior:</strong> Com uma equipe multidisciplinar, garantimos que cada detalhe do projeto seja pensado de forma holística, resultando em soluções de maior qualidade.
                            </li>
                            <li>
                                <strong className="text-[var(--cor-azul)]">Tranquilidade para Você:</strong> Deixe os problemas conosco! Nossa abordagem integrada significa menos preocupações para você e um projeto mais fluido.
                            </li>
                        </ol>

                        <p className="text-left mt-4">
                            Na ASV PARIS, nossa missão é acabar com os atrasos e complicações que você enfrenta em seus projetos. Estamos prontos para transformar suas ideias em realidade, com a confiança de que cada fase será bem cuidada.
                        </p>
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
                        <div className="flex flex-col justify-start items-start p-4 w-[18rem] gap-3 backdrop-blur-md rounded-lg shadow-lg bg-[var(--cor-amarelo)] z-20 h-[26rem]">
                            <img
                                src={AndreEquipe}
                                alt="Membro 1"
                                className="rounded-lg w-[15rem] h-[15rem] object-cover ml-2"
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)]">Andre Bonóra</h3>
                            <p className="text-base text-gray-700">
                                Engenheiro Elétrico
                            </p>
                        </div>

                        {/* Membro 2 */}
                        <div className="flex flex-col justify-start items-start p-4 w-[18rem] gap-3 backdrop-blur-md rounded-lg shadow-lg bg-[var(--cor-amarelo)] z-20 h-[26rem]">
                            <img
                                src={WanessaEquipe}
                                alt="Membro 2"
                                className="rounded-lg w-[15rem] h-[15rem] object-cover ml-2"
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)]">Wanessa</h3>
                            <p className="text-base text-gray-700">
                                Arquiteta
                            </p>
                        </div>

                        {/* Membro 3 */}
                        <div className="flex flex-col justify-start items-start p-4 w-[18rem] gap-3 backdrop-blur-md rounded-lg shadow-lg bg-[var(--cor-amarelo)] z-20 h-[26rem]">
                            <img
                                src={Casal}
                                alt="Membro 3"
                                className="rounded-lg w-[15rem] h-[15rem] object-cover ml-2 "
                            />
                            <h3 className="text-xl font-semibold text-[var(--cor-azul)]">Membro 3</h3>
                            <p className="text-base text-gray-700">
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
