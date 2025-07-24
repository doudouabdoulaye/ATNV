import { useEffect } from 'react';
import logo from '../assets/logo/ATNV-OK.png'; // Assurez-vous que ce chemin est correct

const Footer = () => {
    // Effet pour l'orbe suivant la souris
    useEffect(() => {
        const orb = document.querySelector('.orb') as HTMLElement | null;
        if (!orb) return;

        const handleMouseMove = (e: MouseEvent) => {
            orb.style.left = `${e.clientX}px`;
            orb.style.top = `${e.clientY}px`;
        };

        document.addEventListener('mousemove', handleMouseMove);

        // Nettoyage de l'écouteur d'événement au démontage du composant
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // Le tableau vide assure que l'effet ne s'exécute qu'une seule fois au montage

    return (
        <footer className="relative bg-gradient-to-br from-[#062B16] to-[#062B16] text-white overflow-hidden">
            {/* Éléments de fond animés (adaptés aux couleurs ATNV) */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20">
                <div className="absolute top-10 left-5 w-24 h-24 bg-[#D4AF37] rounded-full filter blur-3xl animate-float1"></div>
                <div className="absolute top-20 right-10 w-32 h-32 bg-[#D4AF37] rounded-full filter blur-3xl animate-float2" style={{ animationDelay: '0.5s' }}></div>
                <div className="absolute bottom-5 left-1/3 w-40 h-40 bg-[#D4AF37] rounded-full filter blur-3xl animate-float3" style={{ animationDelay: '1s' }}></div>
            </div>

            {/* Contenu principal du pied de page */}
            <div className="relative max-w-7xl mx-auto px-4 py-8 sm:py-10 lg:px-6"> {/* Reduced py and px */}
                {/* Disposition en grille (4 colonnes) */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"> {/* Reduced gap */}

                    {/* Section Logo/Nom de l'entreprise avec effet interactif */}
                    <div className="group">
                        <div className="flex items-center space-x-2 mb-4"> {/* Reduced mb */}
                            <div className="w-30 h-30  rounded-lg flex items-center justify-center transform group-hover:rotate-6 transition duration-500 overflow-hidden"> {/* Reduced w and h */}
                                <img
                                    src={logo}
                                    alt="Logo ATNV"
                                    className="w-full h-full object-contain p-1"
                                />
                            </div>
                            <h2 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#D4AF37] to-white"> {/* Reduced text size */}
                                ATNV
                            </h2>
                        </div>
                        <p className="text-gray-300 text-sm mb-4"> {/* Reduced text size and mb */}
                            Association Tchadienne pour la Non-violence. Œuvrons pour la paix et le développement communautaire.
                        </p>

                        {/* Liens réseaux sociaux avec effet de lueur au survol */}
                        <div className="flex space-x-3"> {/* Reduced space-x */}
                            <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300"> {/* Reduced w and h */}
                                <span className="sr-only">Facebook</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.959.192-1.333 1.164-1.333h2.836v-3h-5c-2.48 0-4 1.583-4 4v3z" />
                                </svg>
                            </a>
                            <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300">
                                <span className="sr-only">WhatsApp</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.607-3.84-1.607-5.938C.137 5.053 5.307 0 12.16 0c6.046 0 10.536 4.098 10.536 10.935 0 3.652-1.666 6.903-4.542 9.245l1.687 6.163-6.42-1.687c-1.655.267-3.34.401-5.024.401-6.853 0-12.022-5.053-12.022-11.239zM12.16 1.866c-5.916 0-10.709 4.398-10.709 9.718 0 2.22 1.01 4.205 2.585 5.861l-1.89 6.892 7.027-1.888c1.559.418 3.197.632 4.887.632 5.916 0 10.708-4.398 10.708-9.718s-4.792-9.718-10.708-9.718zm-4.382 7.135h-.008c-.787 0-1.425.638-1.425 1.425c0 .787.638 1.425 1.425 1.425h.008c.787 0 1.425-.638 1.425-1.425c0-.787-.638-1.425-1.425-1.425zm7.135 0c-.787 0-1.425.638-1.425 1.425c0 .787.638 1.425 1.425 1.425s1.425-.638 1.425-1.425c0-.787-.638-1.425-1.425-1.425zm-2.85 4.28c-.286-.145-2.052-1.009-2.383-1.127-.33-.118-.57-.177-.809.177-.239.355-.922 1.127-1.12.177-.198-.177-.809-.316-1.529-.942-.596-.513-1.41-1.282-1.789-1.943-.379-.66-.042-1.021.288-1.021.248 0 .513.012.748.012.219 0 .307-.087.456-.277.149-.19.492-.922.661-1.111.17-.19.085-.355-.045-.513-.139-.158-.922-2.204-1.265-3.029-.33-.824-.661-.692-.922-.692-.239 0-.529-.012-.809-.012-.276 0-.72.108-1.109.539-.389.43-.141.979.117 1.626.267.647 1.499 2.51 1.761 2.697.262.189 2.569 3.903 6.2 5.562 1.666.75 2.924.513 3.841.464.917-.049 2.379-.979 2.71-1.804.33-.824.33-.765.239-1.127-.099-.362-.359-.57-.72-.751z" />
                                </svg>
                            </a>
                            <a href="https://x.com/YOUR_X_HANDLE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300">
                                <span className="sr-only">Twitter (X)</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M18.901 1.153C18.667.669 17.753 0 16.582 0H7.07c-1.17 0-2.083.669-2.317 1.153L.367 11.004c-.347.697-.311 1.5.093 2.148L11.332 24h1.336L23.54 13.152c.404-.648.44-.925.093-2.148L18.901 1.153zm-1.895 2.55L14.4 7.607l-3.204 3.204-3.204-3.204L5.006 3.703 1.95 10.612 11.334 22.067c.07.112.17.202.285.267l.006.002.006-.002c.115-.065.215-.155.285-.267l9.384-11.455-3.056-6.91zm-7.661 11.233h-1.968l-1.968-1.968v-1.968h1.968v-1.968h1.968v1.968h1.968v1.968h-1.968z" />
                                </svg>
                            </a>
                            <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-[#D4AF37] hover:shadow-lg hover:shadow-[#D4AF37]/30 transition-all duration-300">
                                <span className="sr-only">LinkedIn</span>
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                    <path d="M22.23 0H1.77C.79 0 0 .77 0 1.72V22.28C0 23.23.79 24 1.77 24h20.46C23.21 24 24 23.23 24 22.28V1.72C24 .77 23.21 0 22.23 0zM7.34 20.45H3.61V8.6H7.34v11.85zM5.47 7.02c-1.28 0-2.32-.98-2.32-2.19S4.19 2.64 5.47 2.64c1.29 0 2.32.98 2.32 2.19S6.75 7.02 5.47 7.02zM20.45 20.45h-3.73v-6.33c0-.98-.02-2.37-1.44-2.37-1.44 0-1.66 1.13-1.66 2.3V20.45H9.9v-11.85h3.58v1.64h.05c.49-.93 1.69-1.9 3.53-1.9 3.78 0 4.48 2.49 4.48 5.73v6.33z" />
                                </svg>
                            </a>
                        </div>
                    </div>

                    {/* Section Liens Rapides avec effet au survol */}
                    <div className="group">
                        <h3 className="text-base font-semibold mb-4 relative inline-block"> {/* Reduced text size and mb */}
                            <span className="relative z-10">Liens Rapides</span>
                            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#D4AF37] transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
                        </h3>
                        <ul className="space-y-2"> {/* Reduced space-y */}
                            <li><a href="#" className="text-gray-300 text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center"> {/* Reduced text size and pl */}
                                <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-1 opacity-0 group-hover:opacity-100 transition duration-300"></span> {/* Reduced size and mr */}
                                Accueil</a></li>
                            <li><a href="#" className="text-gray-300 text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center">
                                <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-1 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                                À Propos de Nous</a></li>
                            <li><a href="#" className="text-gray-300 text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center">
                                <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-1 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                                Nos Projets</a></li>
                            <li><a href="/contact" className="text-gray-300 text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center">
                                <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-1 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                                Contact</a></li>
                            <li><a href="#" className="text-gray-300 text-sm hover:text-white hover:pl-1 transition-all duration-300 flex items-center">
                                <span className="w-0.5 h-0.5 bg-[#D4AF37] rounded-full mr-1 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                                Actualités & Blog</a></li>
                        </ul>
                    </div>

                    {/* Section Nos Services avec icônes animées */}
                    <div>
                        <h3 className="text-base font-semibold mb-4">Nos Services</h3> {/* Reduced text size and mb */}
                        <ul className="space-y-3"> {/* Reduced space-y */}
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5"> {/* Adjusted mt */}
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse"> {/* Reduced w and h */}
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Reduced w and h */}
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2"> {/* Reduced ml */}
                                    <a href="#" className="text-white text-sm hover:text-[#D4AF37] transition">Prévention & Gestion des Conflits</a> {/* Reduced text size */}
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }}>
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.523 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.523 18.246 18 16.5 18s-3.332.477-4.5 1.253"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <a href="#" className="text-white text-sm hover:text-[#D4AF37] transition">Éducation à la Paix & Droits Humains</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }}>
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <a href="#" className="text-white text-sm hover:text-[#D4AF37] transition">Dialogue Intercommunautaire</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Section Contact Info */}
                    <div>
                        <h3 className="text-base font-semibold mb-4">Contactez-nous</h3> {/* Reduced text size and mb */}
                        <ul className="space-y-3"> {/* Reduced space-y */}
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse">
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-xs text-gray-300">Email</p> {/* Reduced text size */}
                                    <a href="mailto:atnv@gmail.com" className="text-white text-sm hover:text-[#D4AF37] transition">atnv@gmail.com</a> {/* Reduced text size */}
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.2s' }}>
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-xs text-gray-300">Phone</p>
                                    <a href="tel:+23565708383" className="text-white text-sm hover:text-[#D4AF37] transition">+235 65 70 83 83</a><br/>
                                    <a href="tel:+23599101288" className="text-white text-sm hover:text-[#D4AF37] transition">+235 99 10 12 88</a>
                                </div>
                            </li>
                            <li className="flex items-start">
                                <div className="flex-shrink-0 mt-0.5">
                                    <div className="w-7 h-7 bg-[#D4AF37]/20 rounded-full flex items-center justify-center animate-pulse" style={{ animationDelay: '0.4s' }}>
                                        <svg className="w-3 h-3 text-[#D4AF37]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0L6.343 16.657a8 8 0 1111.314 0z"></path>
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                        </svg>
                                    </div>
                                </div>
                                <div className="ml-2">
                                    <p className="text-xs text-gray-300">Adresse</p>
                                    <p className="text-white text-sm">Port 0578, Moundou, Tchad</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Section Newsletter avec champ flottant */}
                <div className="mt-8 pt-6 border-t border-gray-800"> {/* Reduced mt and pt */}
                    <h3 className="text-base font-semibold mb-3 text-center">Abonnez-vous à notre newsletter</h3> {/* Reduced text size and mb */}
                    <p className="text-gray-300 text-sm text-center mb-4">Restez informé de nos progrès, annonces et offres exclusives en vous inscrivant avec votre email.</p> {/* Reduced text size and mb */}
                    <form className="mt-3 max-w-md mx-auto"> {/* Reduced mt and max-w */}
                        <div className="relative">
                            <input
                                type="email"
                                placeholder="Votre email"
                                className="w-full bg-gray-800 border border-gray-700 rounded-lg py-2.5 px-3 focus:outline-none focus:ring-2 focus:ring-[#D4AF37] focus:border-transparent placeholder-gray-500 text-white text-sm" // Reduced py, px, and text size
                                aria-label="Votre adresse email"
                            />
                            <button
                                type="submit"
                                className="absolute right-1.5 top-1/2 transform -translate-y-1/2 bg-[#D4AF37] hover:bg-[#16610E] text-black hover:text-white rounded-lg px-3 py-0.5 transition" // Reduced px and py
                            >
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"> {/* Reduced w and h */}
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                                </svg>
                            </button>
                        </div>
                    </form>
                    <p className="text-gray-500 text-xs mt-3 text-center">Nous nous soucions de la protection de vos données. <a href="#" className="text-[#D4AF37] hover:underline">Lire notre Politique de Confidentialité</a>.</p> {/* Reduced text size and mt */}
                </div>

                {/* Section inférieure avec copyright animé */}
                <div className="mt-8 pt-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center"> {/* Reduced mt and pt */}
                    <p className="text-gray-400 text-xs mb-3 md:mb-0"> {/* Reduced text size and mb */}
                        &copy; {new Date().getFullYear()}  ATNV, DOUDOU ABDOULAYE MAHAMAT. Tous droits réservés.
                    </p>
                    <div className="flex space-x-4"> {/* Reduced space-x */}
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition">Politique de Confidentialité</a> {/* Reduced text size */}
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition">Conditions d'Utilisation</a>
                        <a href="#" className="text-gray-400 text-xs hover:text-white transition">Cookies</a>
                    </div>
                </div>
            </div>

            {/* Orb flottant qui suit le curseur (pour des performances optimales, envisagez un throttle sur l'événement mousemove) */}
            <div className="orb absolute w-48 h-48 rounded-full bg-gradient-to-r from-[#D4AF37]/10 to-[#16610E]/10 filter blur-3xl pointer-events-none"></div> {/* Reduced w and h */}

            {/* Styles pour les animations (à placer idéalement dans un fichier CSS global) */}
            <style>{`
                @keyframes float1 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(15px, 15px); } /* Slightly reduced float distance */
                }
                @keyframes float2 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(-10px, 10px); } /* Slightly reduced float distance */
                }
                @keyframes float3 {
                    0%, 100% { transform: translate(0, 0); }
                    50% { transform: translate(0, -15px); } /* Slightly reduced float distance */
                }
                .animate-float1 { animation: float1 8s ease-in-out infinite; }
                .animate-float2 { animation: float2 10s ease-in-out infinite; }
                .animate-float3 { animation: float3 12s ease-in-out infinite; }

                .orb {
                    transform: translate(-50%, -50%); /* Centre l'orb par rapport au curseur */
                    opacity: 0.2; /* Slightly reduced opacity */
                    transition: transform 0.1s ease-out, opacity 0.3s ease-out;
                    will-change: transform; /* Optimisation pour les animations */
                }
            `}</style>
        </footer>
    );
};

export default Footer;