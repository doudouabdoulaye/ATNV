// src/components/Header.tsx
import { useState } from 'react';
import { Link } from 'react-router-dom'; // Importation correcte pour React Router DOM

// Assurez-vous que ce chemin est exact par rapport à votre dossier 'assets'.
// Dans Vite, l'importation directe d'images locales fonctionne bien.
import logo from '../assets/logo/ATNV-OK.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false); // État pour le champ de recherche
    const [searchTerm, setSearchTerm] = useState(''); // État pour la valeur du champ de recherche

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        // Ferme la recherche si le menu mobile s'ouvre
        if (isSearchOpen) setIsSearchOpen(false);
    };

    const toggleSearch = () => {
        setIsSearchOpen(!isSearchOpen);
        // Efface le terme de recherche lorsque le champ est fermé
        if (isSearchOpen) setSearchTerm('');
        // Ferme le menu mobile si la recherche s'ouvre
        if (isMenuOpen) setIsMenuOpen(false);
    };

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('Recherche effectuée pour :', searchTerm);
        // Ici, vous pouvez ajouter votre logique de recherche, par exemple:
        // - Rediriger vers une page de résultats de recherche
        // - Filtrer des éléments sur la page actuelle
        // Ferme le champ de recherche après la soumission
        setIsSearchOpen(false);
        setSearchTerm(''); // Efface le champ
    };

    return (
        <div className="w-full  bg-gradient-to-r top-0 left-0">
            <header className="flex justify-between items-center text-black py-4 px-4 md:px-8 xl:px-32 bg-white drop-shadow-md relative z-20">
                {/* Logo de l'entreprise */}
                
                <div className="space-y-4">
                            <div className="flex items-center">
                              <img
                        src={logo}
                        alt="Logo de l'entreprise"
                        width={128} // Définir une largeur de base (pixels)
                        height={80} // Ajustez la hauteur selon le ratio de votre logo
                        className="w-24 md:w-32 lg:w-20 hover:scale-105 transition-all duration-300 ease-in-out"
                    />
                                {/* Using a placeholder SVG for the company icon. You can replace this with your logo or a more relevant icon */}
                                <svg className="h-8 w-8 text-[#FFA726]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    
                                </svg>
                                <span className="ml-2 text-4xl font-bold text-[#1E4530] ">ATNV</span>
                            </div>
                            </div>
                {/* Navigation principale */}
                <nav className="hidden xl:flex items-center gap-12 font-semibold text-base">
                    
                    <ul className="flex items-center gap-12">
                        <li className="p-2 hover:bg-[#1E4530] hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                            <Link to="/">Accueil</Link>
                        </li>
                       <Link to="/AboutUs"> <li className="p-2 hover:bg-[#1E4530] hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                            À Propos
                        </li></Link>
                        <li className="p-2 hover:bg-[#1E4530] hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                            <Link to="/NosActions">Nos Actions</Link>
                        </li>
                          <li className="p-2 hover:bg-[#1E4530] hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                            <Link to="/Blog">Blog</Link>
                        </li>
                        <li className="p-2 hover:bg-[#1E4530] hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <Link
                        to="/centreMartin"
                        className="text-white bg-[#1E4530] hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
                    >
                        Centre Martin Luther
                    </Link>
                </nav>

                {/* Icônes et bouton burger pour tous les écrans */}
                <div className="flex items-center gap-4 md:gap-6">
                    {/* Champ de recherche ou Icône de Recherche */}
                    {isSearchOpen ? (
                        <form onSubmit={handleSearchSubmit} className="flex items-center">
                            <input
                                type="text"
                                placeholder="Rechercher..."
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="border border-gray-300 rounded-md py-1 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#16610E] transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="ml-2 text-gray-700 hover:text-black focus:outline-none transition-colors duration-300"
                                aria-label="Soumettre la recherche"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 512 512"
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    fill="currentColor"
                                >
                                    <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                                </svg>
                            </button>
                            <button
                                type="button"
                                onClick={toggleSearch}
                                className="ml-2 text-gray-700 hover:text-black focus:outline-none transition-colors duration-300"
                                aria-label="Fermer la recherche"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 384 512"
                                    className="w-5 h-5 md:w-6 md:h-6"
                                    fill="currentColor"
                                >
                                    <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 87.4 106.1c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 42.1 360.6c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 296.6 405.9c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                                </svg>
                            </button>
                        </form>
                    ) : (
                        <button
                            className="text-gray-700 hover:text-black focus:outline-none transition-colors duration-300"
                            aria-label="Rechercher"
                            onClick={toggleSearch}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-5 h-5 md:w-6 md:h-6"
                                fill="currentColor"
                            >
                                <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.1-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
                            </svg>
                        </button>
                    )}

                    {/* Icône Utilisateur Professionnelle */}
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

                    {/* Bouton de menu "hamburger" (visible sur les petits écrans) */}
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

           {/* Menu mobile : s'affiche/se cache */}
<div
    className={`xl:hidden fixed top-20 left-0 w-full bg-[#1E4530]/95 shadow-xl backdrop-blur-md transition-all duration-300 ease-in-out overflow-hidden
        ${isMenuOpen ? 'max-h-screen opacity-100 py-4 z-50' : 'max-h-0 opacity-0 z-0'}
    `}
>
    <nav className="flex flex-col items-center gap-4 font-semibold text-base">
        <ul className="flex flex-col items-center gap-4 w-full text-white">
            <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/" onClick={toggleMenu}>Accueil</Link>
            </li>
            <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/AboutUs" onClick={toggleMenu}>À Propos</Link>
            </li>
            <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/NosActions" onClick={toggleMenu}>Nos Actions</Link>
            </li>
            <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/Blog" onClick={toggleMenu}>Blog</Link>
            </li>
            <li className="p-2 w-full text-center hover:bg-black hover:text-white rounded-md transition-all duration-300 cursor-pointer">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
            </li>
        </ul>
        <Link
            to="/centreMartin"
            className="text-white bg-black hover:bg-gray-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mt-4 shadow-lg hover:scale-105 transition-all duration-300 ease-in-out"
            onClick={toggleMenu}
        >
            Centre Martin Luther
        </Link>
    </nav>
</div>

        </div>
    );
}

export default Header;