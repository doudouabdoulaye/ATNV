const Footer = () => {
    return (
        <div>
            <footer className="tracking-wide bg-black py-12 px-10">
                <div className="max-w-screen-xl mx-auto">
                    {/* Social Media Icons */}
                    <div className="flex justify-center space-x-6 mb-8">
                        <a href="https://www.facebook.com/YOUR_FACEBOOK_PAGE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                            <i className="fab fa-facebook-f fa-2x"></i> {/* Facebook Icon */}
                        </a>
                        <a href="https://wa.me/YOUR_WHATSAPP_NUMBER" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                            <i className="fab fa-whatsapp fa-2x"></i> {/* WhatsApp Icon */}
                        </a>
                        <a href="https://x.com/YOUR_X_HANDLE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                            <i className="fab fa-x-twitter fa-2x"></i> {/* X (formerly Twitter) Icon */}
                        </a>
                        <a href="https://www.linkedin.com/in/YOUR_LINKEDIN_PROFILE" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-[#FFA726] transition-colors duration-300">
                            <i className="fab fa-linkedin-in fa-2x"></i> {/* LinkedIn Icon */}
                        </a>
                    </div>

                    <hr className="my-12 border-gray-500" />

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-8 gap-x-4">
                        <div>
                            <h4 className="text-[#FFA726] text-base font-medium mb-6">Liens Rapides</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">À Propos de Nous</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Nos Projets</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Carrières</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Actualités & Blog</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[#FFA726] text-base font-medium mb-6">Nos Services</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Forage de Puits d'Eau</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Drainage & Canaux</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Aménagements Hydro-Agricoles</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Études Hydrogéologiques</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Études Géophysiques</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Campagnes Géotechniques</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Conception CAO/DAO</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Construction Civile</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[#FFA726] text-base font-medium mb-6">Ressources & Partenaires</h4>
                            <ul className="space-y-4">
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">FAQ</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Témoignages Clients</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Partenaires</a>
                                </li>
                                <li>
                                    <a href="javascript:void(0)" className="hover:text-[#FFA726] text-gray-400 text-sm">Téléchargements</a>
                                </li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-[#FFA726] text-base font-medium mb-6">Contactez-nous</h4>
                            <ul className="space-y-4">
                                <li>
                                    <address className="not-italic text-gray-400 text-sm">Port 0578, Moundou, Tchad</address>
                                </li>
                                <li>
                                    <a href="tel:+23565708383" className="hover:text-[#FFA726] text-gray-400 text-sm">+235 65 70 83 83</a>
                                </li>
                                <li>
                                    <a href="tel:+23599101288" className="hover:text-[#FFA726] text-gray-400 text-sm">+235 99 10 12 88</a>
                                </li>
                                <li>
                                    <a href="mailto:contact@yourcompany.com" className="hover:text-[#FFA726] text-gray-400 text-sm">contact@yourcompany.com</a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <hr className="my-12 border-gray-500" />

                    {/* Copyright Information */}
                    <div className="text-center text-gray-400 text-sm">
                        <p>&copy; {new Date().getFullYear()} DOUDOU ABDOULAYE MAHAMAT. Tous droits réservés Propulsé par AL-MOHANDIS </p>
                    
                    </div>
                </div>
            </footer>
        </div>
    )
}
export default Footer;