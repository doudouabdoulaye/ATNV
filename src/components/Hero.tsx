import heroBg from '../assets/hero-bg.jpeg';

function Hero() {
    return (
        <section
            className="relative min-h-[70vh] md:min-h-[80vh] lg:min-h-[90vh] bg-cover bg-center flex items-end"
            style={{
                backgroundImage: `url(${heroBg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}
        >
            {/* Bloc flouté, positionné en bas à gauche */}
            <div className="relative z-10 m-6 sm:m-10 max-w-2xl bg-black/30 backdrop-blur-md rounded-xl p-6 sm:p-10">
                <h1 className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl font-pj">
                    ATNV : Association Tchadienne Pour La Non Violence
                </h1>
                <p className="mt-4 text-xl md:text-2xl text-[#D4AF37] font-bold font-pj">
                    La non-violence, c'est le respect absolu de la personne humaine et de toute la création
                </p>
                <p className="mt-2 text-lg text-gray-100 font-pj">
                    Ensemble, construisons un monde plus juste et solidaire.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                    <a
                        href="#"
                        className="text-white bg-[#16610E] hover:bg-[#D4AF37] hover:text-black focus:ring-4 focus:ring-[#D4AF37] font-medium rounded-lg text-sm px-6 py-3 shadow-xl hover:scale-105 transition duration-300 ease-in-out"
                    >
                        Consulter les Services
                    </a>
                    <a
                        href="#"
                        className="text-white bg-[#D4AF37] hover:bg-white hover:text-black focus:ring-4 focus:ring-[#D4AF37] font-medium rounded-lg text-sm px-6 py-3 shadow-xl hover:scale-105 transition duration-300 ease-in-out"
                    >
                        A Propos de Nous
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Hero;
