import { useEffect } from 'react';

const NosActions = () => {
    // Effect to handle dark mode based on system preference (if needed for this specific page, otherwise remove)
    // This logic is usually better handled globally in your main CSS or App component.
    useEffect(() => {
        if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
            document.documentElement.classList.add('dark');
        }
    }, []);

    const services = [
        {
            title: "Prévention et gestion des conflits",
            description: "Création de comités de parité entre éleveurs et agriculteurs pour désamorcer et résoudre les conflits agro-pastoraux.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h2a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v11a2 2 0 002 2h2m4-11l-3 3m0 0l3 3m-3-3h8m-1 9v-5c0-.66-.45-1.21-1.09-1.39l-4-1c-.54-.15-1.09.07-1.35.59L6 14.5m4 0l-2 2m2-2l2 2m-2-2L9 9m3 3l-2 2m2-2l2-2m-2 2h-.01" />
                </svg>
            ),
        },
        {
            title: "Éducation à la paix et aux droits humains",
            description: "Approches créatives (théâtre, musique, campagnes de sensibilisation) pour éduquer à la non-violence et aux droits humains.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.482 9.246 5 7.5 5S4.168 5.482 3 6.253v13C4.168 18.482 5.754 18 7.5 18s3.332.482 4.5 1.253m0-13C13.168 5.482 14.754 5 16.5 5S19.832 5.482 21 6.253v13C19.832 18.482 18.246 18 16.5 18s-3.332.482-4.5 1.253" />
                </svg>
            ),
        },
        {
            title: "Dialogue intercommunautaire et interreligieux",
            description: "Facilitation des échanges pour favoriser la compréhension, le respect mutuel et la cohésion entre différentes communautés et religions.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.117C6.85 14.515 9.177 14 12 14c4.97 0 9-3.582 9-8s-4.03-8-9-8-9 3.582-9 8c0 1.09.28 2.123.784 3.03M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
        },
        {
            title: "Développement rural et économie circulaire",
            description: "Soutien aux initiatives locales pour un développement durable, incluant des projets d'économie circulaire et de résilience communautaire.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v-1a3 3 0 013-3h11.28a2 2 0 00.77-.16l4.28-1.57A4 4 0 0023 10.02V8a2 2 0 00-2-2H3a2 2 0 00-2 2v2a2 2 0 002 2h1zM3 16h18M3 12h18M10 20v-4m4 4v-4m-4-8V4m4 4V4" />
                </svg>
            ),
        },
        {
            title: "Autonomisation des femmes et des jeunes",
            description: "Mise en place de programmes de formation, de microcrédits et d'accompagnement pour renforcer le rôle des femmes et des jeunes dans la société.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292V21m0-10.646A4 4 0 110 5.292V21m0-10.646A4 4 0 110 5.292V21M12 4.354a4 4 0 110 5.292V21m-4 7h8m-4-4l-4 4m4-4l4 4" />
                </svg>
            ),
        },
        {
            title: "Développement communautaire durable",
            description: "Initiatives visant à améliorer les conditions de vie locales en se concentrant sur l'éducation, la santé, l'accès à l'eau et l'énergie renouvelable.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                </svg>
            ),
        },
        {
            title: "Plaidoyer pour les droits humains",
            description: "Campagnes de sensibilisation et actions de plaidoyer auprès des autorités pour le respect et la protection des droits fondamentaux de tous.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-[#16610E] dark:text-[#D4AF37] mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                </svg>
            ),
        },
    ];

    return (
        <div className="bg-[#1E4530] min-h-screen text-gray-800 dark:text-white">
          <br />
          <br />
          <br />
          
            <div className="pt-20"> 
                <main className="container mx-auto px-6 py-8">
                    <h1 className="text-4xl font-bold text-center text-white mb-12 animate-fade-in">Nos Domaines d'Intervention</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index} // Using index as key is generally discouraged, but okay for static lists
                                className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:scale-105 animate-fade-in"
                                style={{ animationDelay: `${0.1 * (index + 1)}s` }}
                            >
                                {service.icon}
                                <h2 className="text-xl font-semibold text-[#16610E] dark:text-white mb-2">{service.title}</h2>
                                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </main>
            </div>

            {/* In the original HTML, there was a style block.
                For a React/Tailwind project, put this into your global CSS file (e.g., src/index.css)
            */}
            {/*
            <style>
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fade-in {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            </style>
            */}
        </div>
    );
};

export default NosActions;