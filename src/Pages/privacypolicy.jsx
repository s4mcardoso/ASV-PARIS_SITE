import Header from '../Components/Header/index.jsx';
import Footer from '../Components/Footer/index.jsx';

function PrivacyPolicy() {
    return (
        <>
            <Header />
            <div id="../Pages/privacypolicy.jsxprivacy-policy" className="container mx-auto px-6 py-10 bg-[var(--cor-cinza-claro)]">
                <h1 className="text-4xl font-bold text-center text-[var(--cor-azul)] mb-8">Política de Privacidade</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mb-4">1. Introdução</h2>
                    <p className="text-lg text-gray-700">
                        A ASV PARIS valoriza sua privacidade. Esta política explica como coletamos, usamos e protegemos
                        suas informações ao utilizar nossos serviços.
                    </p>
                    
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;
