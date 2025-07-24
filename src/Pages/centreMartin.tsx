import trainingImage from '../assets/team/formation.jpeg';
import roomRentalImage from '../assets/team/location.jpeg';
import libraryImage from '../assets/team/biblio.jpeg';
import mediaLabImage from '../assets/team/media.jpeg';

export const CentreMartin = () => {
  const services = [
    {
      title: "Atelier de Formation",
      description: "Participez à nos ateliers dynamiques pour développer vos compétences dans divers domaines, de la technologie à l'entrepreneuriat.",
      image: trainingImage,
      buttonText: "Découvrir les Ateliers",
    },
     {
    title: "Location de Salle et Chambre", 
    description: "Nos salles modernes et nos chambres confortables sont idéales pour vos séminaires, formations ou retraites professionnelles.",
    image: roomRentalImage,
    buttonText: "Réserver un Espace",
  },
    {
      title: "Bibliothèque & Ressources",
      description: "Accédez à une vaste collection d'ouvrages et ressources numériques dans un cadre calme et inspirant.",
      image: libraryImage,
      buttonText: "Explorer la Bibliothèque",
    },
    {
      title: "Media Lab",
      description: "Un espace équipé pour vos projets audiovisuels, numériques et créatifs. Idéal pour les créateurs de contenu.",
      image: mediaLabImage,
      buttonText: "Visiter le Media Lab",
    },
  ];

  return (
    <section className="bg-[#0A3D1E] py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
          Découvrez le <span className="text-yellow-400">Centre Martin</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="bg-white text-gray-900 py-2 px-6 rounded-full font-bold hover:bg-gray-300 transition">
                    {service.buttonText}
                  </button>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.description}</p>
                <div className="mt-4 text-right">
                  <a
                    href="#"
                    className="text-yellow-600 hover:text-yellow-500 text-sm font-semibold transition"
                  >
                    En savoir plus &rarr;
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CentreMartin;
