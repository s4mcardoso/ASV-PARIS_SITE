import Header from '../Components/Header/index.jsx';
import Footer from '../Components/Footer/index.jsx';

function PrivacyPolicy() {
    return (
        <>
            <Header/>
            <div className="container mx-auto px-6 py-10 bg-[var(--cor-cinza-claro)]">
                <h1 className="text-4xl font-bold text-center text-[var(--cor-azul)] mb-8">Política de Privacidade</h1>
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mb-4">1. Introdução</h2>
                    <p className="text-lg text-gray-700">
                        A ASV PARIS valoriza sua privacidade. Esta política explica como coletamos, usamos e protegemos
                        suas informações ao utilizar nossos serviços.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mt-6 mb-4">2. Coleta de Informações</h2>
                    <p className="text-lg text-gray-700">
                        Nossa landing page não coleta informações pessoais diretamente, apenas redireciona você ao nosso canal
                        oficial no WhatsApp. Qualquer informação compartilhada será tratada com sigilo e protegida de acordo com
                        as melhores práticas de segurança.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mt-6 mb-4">3. Segurança e Proteção</h2>
                    <p className="text-lg text-gray-700">
                        Implementamos medidas de segurança para proteger as informações trocadas pelo WhatsApp contra acessos
                        não autorizados. No entanto, não nos responsabilizamos pela segurança da plataforma WhatsApp.
                    </p>
                    
                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mt-6 mb-4">4. Alterações nesta Política</h2>
                    <p className="text-lg text-gray-700">
                        Reservamo-nos o direito de atualizar esta política a qualquer momento. As alterações entrarão em vigor
                        imediatamente após a publicação.
                    </p>

                    <h2 className="text-2xl font-semibold text-[var(--cor-azul)] mt-6 mb-4">5. Contato</h2>
                    <p className="text-lg text-gray-700">
                        Em caso de dúvidas sobre esta política, entre em contato conosco pelo WhatsApp para mais informações.
                    </p>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default PrivacyPolicy;
