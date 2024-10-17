import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaWhatsapp } from 'react-icons/fa';
import backgroundImage from '../../assets/955706hdrecorterdireita.png';
import backgroundImage2 from '../../assets/seguro.jpg';


function Home() {
    return (
        <>
            <Header />
            {/* HOME */}
            <div className="relative flex flex-col min-h-screen bg-[var(--cor-amarelo)]">
                <div id="home" className="flex relative container mx-auto w-full h-screen items-center justify-between">
                    <div className="flex flex-col justify-start items-start p-[3rem] max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20">
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
                    <div className="absolute right-0 flex-shrink-0" style={{ top: '50px', zIndex: 10 }}>
                        <img
                            src={backgroundImage}
                            alt="Imagem vetorial de engenheiro"
                            className="w-full h-auto max-w-lg object-cover mt-[10.2rem] mr-[7rem]"
                        />
                    </div>
                </div>
            </div>

            {/* PRÓXIMA SEÇÃO COM BACKGROUND IMAGE E OVERLAY */}
            <div className="relative flex flex-col min-h-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${backgroundImage2})` }}>

                {/* Overlay azul opaco */}
                <div className="absolute inset-0 bg-blue-900 opacity-70"></div>

                <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10">
                    <div className="flex flex-col justify-start items-start p-10 max-w-2xl w-full gap-3 backdrop-blur-md rounded-lg shadow-lg bg-white z-20 ml-auto">
                        <h1 className="text-6xl font-bold text-left text-[#FFD700]">
                            Construa com Nossa Equipe
                        </h1>
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
                </div>
            </div>

            <div className="relative flex flex-col min-h-screen bg-[var(--cor-branco)]" >

                <div className="flex relative container mx-auto w-full h-screen items-center justify-between z-10">

                    <div className="flex flex-col justify-start items-start p-10 max-w-lg min-h-screen mt-20 gap-5">

                        <h1 className="text-5xl font-bold text-left text-[var(--cor-azul)] whitespace-nowrap">
                            Serviços de Engenharia <br />e Arquitetura em Sorocaba
                        </h1>
                        <p className="text-2xl mt-2 text-left text-[var(--cor-amarelo-escuro)]">
                            Confie na ASV PARIS para soluções completas em engenharia elétrica, civil e arquitetura. Localizada em -colocar a localização aqui- , nossa equipe de especialistas está pronta para transformar seu projeto em realidade.
                        </p>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default Home;
