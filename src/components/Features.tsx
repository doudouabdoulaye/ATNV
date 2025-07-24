import React from "react";

export const Features = () => {
    const atnvServices = [
        {
            title: "Location d’espaces professionnels",
            description: "Salles équipées pour réunions, séminaires et événements professionnels dans un cadre stimulant.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h18M3 10h18M3 14h18M3 18h18" />
                </svg>
            ),
            tag: "Moderne"
        },
        {
            title: "Media Lab",
            description: "Un espace créatif pour la production audiovisuelle, numérique et collaborative ouvert à tous les profils.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5V6.75A2.25 2.25 0 0 0 12.75 4.5H5.25A2.25 2.25 0 0 0 3 6.75v10.5A2.25 2.25 0 0 0 5.25 19.5h7.5A2.25 2.25 0 0 0 15 17.25V13.5l5.25 3V7.5l-5.25 3Z" />
                </svg>
            ),
            tag: "Créatif"
        },
        {
            title: "Formations et ateliers",
            description: "Modules pratiques sur l’agriculture, le numérique, l’entrepreneuriat et plus encore, adaptés aux besoins du territoire.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6m0 0v6m0-6H6m6 0h6" />
                </svg>
            ),
            tag: "Éducatif"
        },
        {
            title: "Développement rural",
            description: "Appui technique et méthodologique pour les initiatives locales visant un développement durable et résilient.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 21v-7.5a4.5 4.5 0 0 1 9 0V21m-9 0h9m0 0v-7.5a4.5 4.5 0 0 1 9 0V21h-9Z" />
                </svg>
            ),
            tag: "Durable"
        },
        {
            title: "Économie circulaire",
            description: "Soutien à des modèles durables fondés sur la réutilisation, la réduction des déchets et la résilience écologique.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1.5M12 19.5V21m9-9h-1.5M4.5 12H3m15.364 6.364l-1.06-1.06M6.697 6.697l-1.06-1.06m0 12.727l1.06-1.06m12.727-12.727l-1.06 1.06M12 6.75A5.25 5.25 0 1 1 6.75 12 5.25 5.25 0 0 1 12 6.75Z" />
                </svg>
            ),
            tag: "Écologique"
        },
        {
            title: "Bibliothèque & centre de ressources",
            description: "Un accès facilité à des ouvrages, des outils pédagogiques et de la documentation spécialisée pour tous.",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 mb-6 inline-block group-hover:scale-110 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.75l6 3-6 3-6-3 6-3Zm0 6v7.5m0 0H5.25a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75H12Zm0 0h6.75a.75.75 0 0 1 .75.75v6a.75.75 0 0 1-.75.75H12Z" />
                </svg>
            ),
            tag: "Accessible"
        },
    ];

    return (
        <section className="bg-[#1E4530] text-white py-12 px-4 md:py-16 md:px-8 font-sans"> {/* Changed to a new, lighter green background */}
            <div className="max-w-screen-xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 leading-tight mt-4">
                        Nos <span className="text-[#D4AF37]">Services</span>
                    </h2>
                    <p className="max-w-2xl mx-auto mt-6 text-gray-400 text-lg md:text-xl leading-relaxed font-bold">
                        ATNV – Innover, Former, Développer pour un avenir durable.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-auto">
                    {atnvServices.map((service, index) => (
                        <div
                            key={index}
                            className="group relative bg-[#062B16] rounded-xl p-8 border border-[#0A3D1E] hover:border-[#D4AF37] transition-all duration-300 hover:shadow-glow-gold overflow-hidden"
                        >
                            {/* Glowing effect on hover */}
                            <div
                                className="absolute -inset-1 bg-gradient-to-r from-[#D4AF37] to-[#1E4530] opacity-0 group-hover:opacity-20 blur-md transition-opacity duration-300" /* Updated 'to' color for glow */
                                style={{
                                    animation: `spin ${5 + index * 0.5}s linear infinite`,
                                }}
                            ></div>
                            <div className="relative z-10">
                                <div className="w-14 h-14 rounded-lg bg-[#0A3D1E] flex items-center justify-center mb-6 shadow-glow-gold">
                                    {React.cloneElement(service.icon, { className: "w-8 h-8 text-[#D4AF37] mb-0 inline-block group-hover:scale-110 transition-transform duration-300" })}
                                </div>
                                <h3 className="text-xl font-bold mb-3 text-white">{service.title}</h3>
                                <p className="text-gray-300 group-hover:text-gray-200 text-sm leading-relaxed">
                                    {service.description}
                                </p>

                                {/* Tag section */}
                                <div className="mt-6 pt-6 border-t border-[#0A3D1E]">
                                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-[#0A3D1E] text-[#D4AF37]">
                                        {service.tag}
                                    </span>
                                </div>

                                {/* "EN SAVOIR PLUS" button */}
                                <a
                                    href="#"
                                    className="inline-block mt-6 px-6 py-3 border border-[#D4AF37] text-white bg-transparent hover:bg-[#D4AF37] hover:text-black rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg"
                                >
                                    EN SAVOIR PLUS
                                </a>
                            </div>

                              

                        </div>
                    ))}

                            

                </div>
                            {/* Réalisations */}
                            <br />
                            <br />
                            <br />
                            <br />

                <section className="bg-[#062B16] text-white rounded-xl p-12 mb-20">
                    <h2 className="text-3xl font-bold mb-12 text-center">Notre Impact en Chiffres</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">30+</div>
                            <div className="text-gray-300">Années d'Expérience</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">50+</div>
                            <div className="text-gray-300">Projets Réalisés</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">100k+</div>
                            <div className="text-gray-300">Personne formé</div>
                        </div>
                        <div>
                            <div className="text-5xl font-bold text-[#D4AF37] mb-2">95%</div>
                            <div className="text-gray-300">Satisfaction</div>
                        </div>
                    </div>
                </section>

            </div>

            {/* section partenaire */}

                    

            {/* fin section partenairs  */}

            {/* Custom Tailwind CSS for the new glow effect and animation */}
            <style>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
            `}</style>
        </section>
    );
};