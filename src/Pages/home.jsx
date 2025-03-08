// Importe apenas os componentes necessários
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { FaWhatsapp } from 'react-icons/fa';
import { LazyLoadImage } from "react-lazy-load-image-component";

// Defina os caminhos das imagens diretamente (acessando a pasta public)
const backgroundImage = '/Images/background-image.jpg';
const andreTraçado = '/Images/andre-bonora-traçado-fino.png';
const wanessaTraçada = '/Images/wanessa-arquiteta-traçado-fino.png';
const asvParisLocation = '/Images/asvparis-localizacao.jpg';
const casal = '/Images/casal.jpg';
const wanessaEquipe = '/Images/wanessa-equipe.jpg';
const andreEquipe = '/Images/andre-equipe.jpg';
const imagemEngenharia4 = '/Images/imagem-engenharia4.jpg';

export default function Home() {
    return (
        <div>
            {/* Header */}
            <Header />

            {/* Seção com Background Image */}
            <section
                className="relative h-screen bg-cover bg-center flex items-center justify-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="text-white text-center">
                    <h1 className="text-5xl font-bold">Bem-vindo ao Nosso Site</h1>
                    <p className="mt-4 text-xl">Conheça nossos serviços e projetos incríveis.</p>
                    <a
                        href="https://wa.me/seunumerodetelefone"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-6 inline-block bg-green-500 text-white px-6 py-3 rounded-full hover:bg-green-600 transition"
                    >
                        <FaWhatsapp className="inline mr-2" /> Fale Conosco pelo WhatsApp
                    </a>
                </div>
            </section>

            {/* Sobre Nós */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Sobre Nós</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="flex flex-col items-center">
                            <LazyLoadImage
                                src={andreTraçado}
                                alt="Andre Bonora"
                                className="w-48 h-48 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Andre Bonora</h3>
                            <p className="text-gray-600">Engenheiro Civil</p>
                        </div>
                        <div className="flex flex-col items-center">
                            <LazyLoadImage
                                src={wanessaTraçada}
                                alt="Wanessa Arquiteta"
                                className="w-48 h-48 object-cover rounded-full mb-4"
                            />
                            <h3 className="text-xl font-semibold">Wanessa Arquiteta</h3>
                            <p className="text-gray-600">Arquiteta Residencial</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Localização */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Localização</h2>
                    <LazyLoadImage
                        src={asvParisLocation}
                        alt="Localização ASV Paris"
                        className="w-full h-96 object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Equipe */}
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Nossa Equipe</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <LazyLoadImage
                            src={wanessaEquipe}
                            alt="Wanessa na Equipe"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                        <LazyLoadImage
                            src={andreEquipe}
                            alt="Andre na Equipe"
                            className="w-full h-64 object-cover rounded-lg"
                        />
                    </div>
                </div>
            </section>

            {/* Projetos */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-8">Nossos Projetos</h2>
                    <LazyLoadImage
                        src={imagemEngenharia4}
                        alt="Projeto de Engenharia"
                        className="w-full h-96 object-cover rounded-lg"
                    />
                </div>
            </section>

            {/* Footer */}
            <Footer />
        </div>
    );
}