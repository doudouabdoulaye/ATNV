import { useState } from 'react';
import logo from '../assets/logo/WhatsApp_Image_2025-06-21_at_10.18.43-removebg-preview.png';

const Header = () => {
    // cet option gere l'ouverture/fermeture du menu mobile
    const [isMenuOpen, setIsMenuOpen] = useState(false);

   
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        // ce container assure que le header prend toute la largeur
        <div className="w-full absolute bg-gradient-to-r top-0 left-0">
            <header className="flex justify-between items-center text-black py-4 px-4 md:px-8 xl:px-32 bg-white drop-shadow-md relative z-20">
                {/* Logo de l'entreprise */}
                <a href="#" className="flex-shrink-0">
                    <img
                        src={logo}
                        alt="Logo de l'entreprise"
                        className="w-24 md:w-32 lg:w-20 hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                </a>

                {/* Navigation principale ou les elements de menu */}
                <nav className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    <ul className="flex items-center gap-12">
                        <li className="p-2 hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">Accueil</li>
                        <li className="p-2 hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">À Propos</li>
                        <li className="p-2 hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">Nos Services</li>
                        <li className="p-2 hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">Carrières</li>
                    </ul>
                    <button
                        type="button"
                        className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Demander Services
                    </button>
                </nav>

                {/* Icônes et bouton burger pour tous les écrans (burger visible en mode mobile) ou Responsivité */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Icône de Recherche Professionnelle (style Font Awesome) */}
                    <button className="text-gray-700 hover:text-black focus:outline-none transition-colors duration-300" aria-label="Rechercher">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="currentColor"
                        
                        >
                            <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                        </svg>
                    </button>

                    {/* Icône Utilisateur Professionnnpm install react-router-domelle (style Font Awesome) */}
                    <button className="text-gray-700 hover:text-black focus:outline-none transition-colors duration-300" aria-label="Mon compte">
                        <svg
                            
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-5 h-5 md:w-6 md:h-6"
                            fill="currentColor"
                        >
                            <path d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
                        </svg>
                    </button>

                    {/* Bouton de menu "hamburger" (visible sur les petits écrans, masqué sur XL) */}
                    <button
                        className="xl:hidden text-gray-700 hover:text-black focus:outline-none transition-colors duration-300"
                        onClick={toggleMenu}
                        aria-label="Ouvrir le menu"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 448 512"
                            className="w-7 h-7 md:w-8 md:h-8"
                            fill="currentColor"
                        >
                            <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
                        </svg>
                    </button>
                </div>
            </header>

            {/* Menu mobile : s'affiche/se cache en fonction de 'isMenuOpen' */}
            {/* z-10 pour être en dessous du header mais au-dessus d'autre contenu potentiel */}
            <div
                className={`xl:hidden absolute top-full left-0 w-full bg-[#D4AF37] shadow-md transition-all duration-300 ease-in-out overflow-hidden z-10
                            ${isMenuOpen ? 'max-h-screen opacity-100 py-4' : 'max-h-0 opacity-0'}`}
            >
                <nav className="flex flex-col items-center gap-4 font-semibold text-base">
                    <ul className="flex flex-col items-center gap-4 w-full">
                        <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Accueil</li>
                        <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer" onClick={toggleMenu}>À Propos</li>
                        <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Nos Services</li>
                        <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer" onClick={toggleMenu}>Carrières</li>
                    </ul>
                    <button
                        type="button"
                        className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                        onClick={toggleMenu} // Ferme le menu après clic sur le bouton
                    >
                        Demander Services
                    </button>
                </nav>
            </div>
        </div>
    );
}

export default Header;