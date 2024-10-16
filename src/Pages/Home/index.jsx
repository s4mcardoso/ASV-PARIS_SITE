import backgroundImage from '../../assets/9557059hd.png';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { FaWhatsapp } from 'react-icons/fa';

function Home() {
    return (
        <>
            <div className="relative flex flex-col min-h-screen custom-bg-yellow">
                <Header />
                <section className="flex relative container mx-auto w-full h-screen items-center justify-between">
                    <div className="flex flex-col justify-start items-start p-10 max-w-2xl w-full gap-3 bg-yellow bg-opacity-70 backdrop-blur-md rounded-lg border border-white border-opacity-30 shadow-lg">
                        <h1 className="text-6xl font-bold text-left text-[#090d63]">
                            Inove Seu Espaço Conosco
                        </h1>
                        <p className="text-2xl mt-2 text-left text-[#090d63]">
                            Transforme sua visão em realidade com nossa expertise em engenharia
                            e arquitetura. Descubra inovação e excelência em Sorocaba.
                        </p>
                        <a
                            href={`https://wa.me/${5515988150433}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-5 inline-flex items-center px-5 py-2 bg-green-600 text-white rounded-lg border-2 border-green-600 transition-colors duration-300 hover:bg-green-700"
                        >
                            Contate-nos <FaWhatsapp className="ml-2" />
                        </a>
                    </div>
                    <div className="relative flex-shrink-0" style={{ top: '50px' }}>
                        <img src={backgroundImage} alt="Imagem vetorial de engenheiro" className="w-full h-auto max-w-lg object-cover mt-6" />
                    </div>
                </section>
            </div>
            <Footer />
        </>
    );
}

export default Home;
