export const Features = () => {
    return (
        <section className="bg-white py-12 px-4 md:py-16 md:px-8">
            <div className="max-w-screen-xl mx-auto">
                <div className="max-w-3xl mx-auto mb-12 md:mb-16 text-center">
                    <h2 className="text-black text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-4 leading-tight">
                        Découvrir <span className="text-[#D4AF37]">nos services</span>
                    </h2>
                    <p className="text-gray-700 text-lg md:text-xl leading-relaxed font-bold">
                        Al-Mohandis, la meilleure société Tchadienne de construction.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mx-auto">

                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="drainage-forage-title drainage-forage-desc"
                        >
                            <title id="drainage-forage-title">Icône de Drainage ou Canal de Forage</title>
                            <desc id="drainage-forage-desc">Représentation d'un forage vertical croisant un système de drainage horizontal avec de l'eau.</desc>

                            <path d="M480 96H32C14.3 96 0 110.3 0 128s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />

                            <path d="M256 128V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V128h64z" />

                            <path d="M480 320H32c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />

                            <path d="M192 352h128c-8.8-17.6-27.4-32-48-32s-39.2 14.4-48 32-27.4 32-48 32-39.2-14.4-48-32z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />

                            <circle cx="256" cy="224" r="16" />

                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Water Well Drilling Services (WWDS)</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Forage de puits d'eau, installation de pompes et maintenance pour un accès fiable à l'eau souterraine pour divers usages.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>

                    {/*section service de trois elements*/}
                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="hydro-agri-pro-title hydro-agri-pro-desc"
                        >
                            <title id="hydro-agri-pro-title">Icône d'Aménagements Hydro-Agricoles Professionnels</title>
                            <desc id="hydro-agri-pro-desc">Représentation d'un système d'irrigation sur un champ cultivé.</desc>
                            <path d="M448 96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V96zM96 128h320v32H96v-32zm384 96c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192h448v32zM32 288v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64H32zm416 96H64v32h384v-32zM32 416v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64H32z" />
                            <path d="M256 0c-17.7 0-32 14.3-32 32v80c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32zM128 256c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64zM384 256c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Aménagements Hydro-Agricoles</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Conception, planification et mise en œuvre de projets d'irrigation, de drainage et de valorisation des terres agricoles pour une gestion optimale de l'eau.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>

                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="ccs-house-construction-title ccs-house-construction-desc"
                        >
                            <title id="ccs-house-construction-title">Icône de Construction de Maison</title>
                            <desc id="ccs-house-construction-desc">Représentation d'une maison en construction, symbolisant les services de bâtiment civil.</desc>
                            <path d="M464 256h-80V96H128v160H48V480h416V256zM256 32L0 256h96v224h320V256h96L256 32z" />
                            <path d="M256 32L0 256h512L256 32zM128 448V256h256v192H128z" />
                            <path d="M160 288h64v64h-64v-64zm128 0h64v64h-64v-64zm-64 96h64v64h-64v-64z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Civil Construction Services (CCS)</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Services complets en construction civile, de la planification et de la conception à la réalisation de projets d'infrastructures et de bâtiments.
                        </p>

                        <br />
                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>


                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="wwds-title wwds-desc"
                        >
                            <title id="wwds-title">Icon for Water Well Drilling Services</title>
                            <desc id="wwds-desc">Representation of a drilling rig penetrating the ground to extract water.</desc>
                            <path d="M256 0c-17.7 0-32 14.3-32 32v128h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v192c0 17.7 14.3 32 32 32s32-14.3 32-32V224h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96V32c0-17.7-14.3-32-32-32zM192 160h128v32H192v-32zm0 64h128v32H192v-32zM192 288h128v32H192v-32zM192 352h128v32H192v-32z" />
                            <path d="M256 448c-44.2 0-80 35.8-80 80 0 17.7 14.3 32 32 32h96c17.7 0 32-14.3 32-32 0-44.2-35.8-80-80-80z" />
                            <path d="M208 472c16.5-16.5 43.5-16.5 60 0s16.5 43.5 0 60c-16.5 16.5-43.5 16.5-60 0s-16.5-43.5 0-60zM176 400h160c-8.8-17.6-27.4-32-48-32s-39.2 14.4-48 32-27.4 32-48 32-39.2-14.4-48-32z" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Water Well Drilling Services (WWDS)</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Forage de puits d'eau, installation de pompes et maintenance pour un accès fiable à l'eau souterraine pour divers usages.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>
                    {/*fin**/}



                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300 "
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="hydraulic-title hydraulic-desc"
                        >
                            <title id="hydraulic-title">Icône d'Hydraulique</title>
                            <desc id="hydraulic-desc">Représentation d'une goutte d'eau, symbolisant l'hydraulique.</desc>
                            <path d="M256 0C164.7 0 92.8 71.9 92.8 163.2c0 86.8 59.8 171.7 137.9 249.7L256 512l25.3-25.1c78.1-78 137.9-162.9 137.9-249.7C419.2 71.9 347.3 0 256 0z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Étude Hydraulique</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Analyse et conception des systèmes liés à l'eau : gestion des ressources hydriques, irrigation, drainage, assainissement, et protection contre les inondations.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>


                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300 "
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="hydrogeo-professional-title hydrogeo-professional-desc"
                        >
                            <title id="hydrogeo-professional-title">Icône d'Études Hydrogéologiques Professionnelles</title>
                            <desc id="hydrogeo-professional-desc">Représentation d'un forage ou d'un puits tubé avec le niveau de la nappe phréatique.</desc>
                            <path d="M256 0c-40.8 0-73.6 32.8-73.6 73.6v38.4H128c-17.7 0-32 14.3-32 32v192c0 17.7 14.3 32 32 32h64v64c0 17.7 14.3 32 32 32h128c17.7 0 32-14.3 32-32v-64h64c17.7 0 32-14.3 32-32V144c0-17.7-14.3-32-32-32h-54.4V73.6C329.6 32.8 296.8 0 256 0zM256 32c25.4 0 46.4 21 46.4 46.4v35.2H209.6V78.4C209.6 53.8 230.6 32 256 32zM128 144h256v32H128v-32zm0 64h256v32H128v-32zm0 64h256v32H128v-32zm160 128V352h-64v32h64zM416 304v-64H96v64h320z" />
                            <path fill="#007bff" d="M128 320h256v32H128z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Études Hydrogéologiques</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Analyse détaillée des aquifères, modélisation des flux d'eau souterraine, délimitation des zones de protection des ressources et gestion durable.
                        </p>
                        <br />
                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>


                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300 "
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="geophysics-title geophysics-desc"
                        >
                            <title id="geophysics-title">Icône d'Études Géophysiques Professionnelles</title>
                            <desc id="geophysics-desc">Représentation des ondes souterraines et d'un capteur, symbolisant la géophysique.</desc>
                            <path d="M448 32H64c-17.7 0-32 14.3-32 32v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32V64c0-17.7-14.3-32-32-32zM96 96h320v32H96V96zm384 128c0 17.7-14.3 32-32 32H64c-17.7 0-32-14.3-32-32V192h448v32zM32 288v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64H32zm416 96H64v32h384v-32zM32 416v64c0 17.7 14.3 32 32 32h384c17.7 0 32-14.3 32-32v-64H32z" />
                            <path d="M96 352c20.8-21.7 49-32 80-32s59.2 10.3 80 32 49 32 80 32 59.2-10.3 80-32" fill="none" stroke="currentColor" stroke-width="32" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="256" cy="112" r="16" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Études Géophysiques</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Application des principes physiques pour l'exploration du sous-sol, détection des structures géologiques, des ressources et des risques naturels.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>


                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300 "
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="geotechnical-title geotechnical-desc"
                        >
                            <title id="geotechnical-title">Icône de Campagnes Géotechniques</title>
                            <desc id="geotechnical-desc">Représentation d'un forage ou d'une sonde de carottage du sol.</desc>
                            <path d="M256 0c-17.7 0-32 14.3-32 32v128h-96c-17.7 0-32 14.3-32 32s14.3 32 32 32h96v192c0 17.7 14.3 32 32 32s32-14.3 32-32V224h96c17.7 0 32-14.3 32-32s-14.3-32-32-32h-96V32c0-17.7-14.3-32-32-32zM192 160h128v32H192v-32zm0 64h128v32H192v-32zM192 288h128v32H192v-32zm0 64h128v32H192v-32z" />
                            <rect x="64" y="448" width="384" height="64" rx="16" ry="16" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">Campagnes Géotechniques</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Réalisation de sondages, essais in situ et en laboratoire pour caractériser les sols et roches en vue de projets de construction.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37] bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>


                    <div className="rounded-xl group p-8 text-center bg-[#1A1A1A] hover:bg-[#D4AF37] text-white hover:text-[#1A1A1A] shadow-lg hover:shadow-2xl transition duration-300 ease-in-out">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            className="w-10 h-10 mb-6 inline-block group-hover:scale-110 transition-transform duration-300"
                            viewBox="0 0 512 512"
                            role="img"
                            aria-labelledby="cad-title cad-desc"
                        >
                            <title id="cad-title">Icône de CAO/DAO</title>
                            <desc id="cad-desc">Représentation d'un écran d'ordinateur avec des outils de dessin technique.</desc>
                            <path d="M0 64C0 46.3 14.3 32 32 32H480c17.7 0 32 14.3 32 32V352c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32V64zM64 96v224h384V96H64z" />
                            <path d="M384 192c0-17.7-14.3-32-32-32h-64c-17.7 0-32 14.3-32 32s14.3 32 32 32h64c17.7 0 32-14.3 32-32zM128 256c0-17.7-14.3-32-32-32s-32 14.3-32 32v64c0 17.7 14.3 32 32 32s32-14.3 32-32v-64zM448 416H64c-17.7 0-32 14.3-32 32s14.3 32 32 32h384c17.7 0 32-14.3 32-32s-14.3-32-32-32z" />
                            <path d="M224 224L208 240l32 32 16-16 16 16 16-16 16 16 16-16-32-32z" />
                        </svg>
                        <h3 className="text-xl font-semibold mb-3">CAO/DAO</h3>
                        <p className="text-gray-300 group-hover:text-[#1A1A1A] text-sm leading-relaxed mb-6">
                            Maîtrise des logiciels de Conception et Dessin Assistés par Ordinateur pour la création de plans techniques précis et de modèles 3D.
                        </p>

                        <a href="#" className="inline-block px-6 py-3 border border-[#D4AF37]  bg-transparent hover:bg-[#D4AF37] hover:text-[#1A1A1A] rounded-full text-sm font-semibold transition duration-300 ease-in-out shadow-md hover:shadow-lg">
                            EN SAVOIR PLUS
                        </a>
                    </div>
                </div>


                <div className="mt-16 md:mt-24 bg-white rounded-xl shadow-lg hover:shadow-2xl py-8 md:py-10 px-6 md:px-10">
                    <ul className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                        <li className="text-center">
                            <h3 className="text-[#D4AF37] text-4xl md:text-5xl font-bold">100k+</h3>
                            <p className="text-[#707070] text-sm md:text-base mt-2 font-bold">Utilisateurs</p>
                        </li>
                        <li className="text-center">
                            <h3 className="text-[#D4AF37] text-4xl md:text-5xl font-bold">99.9%</h3>
                            <p className="text-[#707070] text-sm md:text-base mt-2 font-bold">Uptime</p>
                        </li>
                        <li className="text-center">
                            <h3 className="text-[#D4AF37] text-4xl md:text-5xl font-bold">50+</h3>
                            <p className="text-[#707070] text-sm md:text-base mt-2 font-bold">Pays</p>
                        </li>
                        <li className="text-center">
                            <h3 className="text-[#D4AF37] text-4xl md:text-5xl font-bold">24/7</h3>
                            <p className="text-[#707070] text-sm md:text-base mt-2 font-bold">Support</p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Features;