import ATNV from "../assets/team/img.jpg";
import mbay from "../assets/team/mbay.jpeg"
import bendji from "../assets/team/bendji.jpeg";
import iddo from "../assets/team/iddo.jpeg";
const AboutUs = () => { 
    return (
        <div className="bg-white font-sans antialiased">
            {/* Section Hero */}
            <header className="bg-gradient-to-r from-[#1A1A1A] bg-[#1E4530] text-white py-20">
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <div className="container mx-auto px-6 text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">À Propos d'ATNV : Association Tchadienne pour la non-violence</h1>
                    <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
                       
                    </p>
                </div>
            </header>

            {/* Contenu Principal */}
            <main className="container mx-auto px-6 py-16">
                {/* Notre Histoire */}
                <section className="mb-20">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="md:w-1/2">
                            <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Notre Histoire</h2>
                            <>
    <p className="text-gray-700 mb-4">
        Fondée à Moundou,Tchad, au Tchad, en 1992, l'Association Tchadienne pour la Non-violence (ATNV) s'est engagée depuis plus de trois décennies à promouvoir la paix, la cohésion sociale et le respect des droits humains. Notre mission est de bâtir un avenir où la non-violence est le fondement des relations humaines et du développement durable de nos communautés.
    </p>
    <p className="text-gray-700 mb-4">
        Depuis nos débuts, nous avons concrétisé cette vision à travers des projets clés, notamment dans la prévention et la gestion des conflits, l'éducation à la paix et aux droits humains, le dialogue intercommunautaire et l'autonomisation des femmes et des jeunes. Nos actions contribuent activement au développement socio-économique et à la stabilité au Tchad.
    </p>
    <p className="text-gray-700">
        Nous sommes fiers de notre héritage et de notre engagement inébranlable envers la dignité humaine, l'innovation sociale et la durabilité. C'est grâce à l'expertise et la passion de notre équipe que nous continuons à œuvrer pour un Tchad plus juste et plus paisible.
    </p>
</>
                        </div>
                        <div className="md:w-1/2">
                            <img
                                src={ATNV}
                                alt="Chantier de construction AL-MOHANDIS CIC"
                                className="rounded-lg shadow-xl w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Notre Mission */}
               <section className="bg-gray-100 rounded-xl p-12 mb-20">
  <div className="text-center max-w-4xl mx-auto">
    <h2 className="text-3xl font-bold text-[#1A1A1A] mb-6">Notre Mission et nos Valeurs</h2>
    <p className="text-xl text-gray-700 mb-8">
      "Promouvoir la culture de la non-violence, de la paix et du développement humain à travers la formation, la sensibilisation et l’action communautaire durable."
    </p>
    <div className="flex flex-wrap justify-center gap-8">
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
        <div className="text-[#16610E] mb-4">
          <i className="fas fa-dove text-3xl"></i>
        </div>
        <h3 className="font-bold text-[#1A1A1A] mb-2">Paix et Non-Violence</h3>
        <p className="text-gray-600">
          Nous croyons en une société fondée sur la tolérance, le dialogue et la résolution pacifique des conflits.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
        <div className="text-[#16610E] mb-4">
          <i className="fas fa-people-arrows text-3xl"></i>
        </div>
        <h3 className="font-bold text-[#1A1A1A] mb-2">Engagement Communautaire</h3>
        <p className="text-gray-600">
          Travailler aux côtés des jeunes, des femmes et des leaders pour impulser un changement local et durable.
        </p>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md w-full sm:w-64">
        <div className="text-[#16610E] mb-4">
          <i className="fas fa-leaf text-3xl"></i>
        </div>
        <h3 className="font-bold text-[#1A1A1A] mb-2">Développement Durable</h3>
        <p className="text-gray-600">
          Favoriser des initiatives responsables dans les domaines de l’éducation, l’économie circulaire et l’écocitoyenneté.
        </p>
      </div>
    </div>
  </div>
</section>

<section className="mb-20">
  <h2 className="text-3xl font-bold text-[#1A1A1A] mb-12 text-center">Notre Équipe de Direction</h2>
  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
    
    {/* Membre 1 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img src={mbay} alt="DJAKASNABEYE LEMBAINDO" className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-[#1A1A1A] mb-1">DJAKASNABEYE LEMBAINDO</h3>
        <p className="text-[#D4AF37] font-medium mb-3">Président Fondateur de l’ATNV</p>
        <p className="text-gray-600">Militant de la non-violence, expert en développement communautaire et en éducation à la paix.</p>
      </div>
    </div>

    {/* Membre 2 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img src={iddo} alt="Ido" className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-[#1A1A1A] mb-1">Iddo</h3>
        <p className="text-[#D4AF37] font-medium mb-3">Coordinateur des Projets Ruraux</p>
        <p className="text-gray-600">Spécialisé dans l'accompagnement du développement rural et les dynamiques communautaires.</p>
      </div>
    </div>

    {/* Membre 3 */}
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="aspect-square overflow-hidden rounded-t-lg">
        <img src={bendji} alt="Benjamin" className="w-full h-full object-cover object-center" />
      </div>
      <div className="p-6">
        <h3 className="font-bold text-xl text-[#1A1A1A] mb-1">Benjamin</h3>
        <p className="text-[#D4AF37] font-medium mb-3">Responsable Formation & Jeunesse</p>
        <p className="text-gray-600">En charge des ateliers de formation, de l'engagement des jeunes et des actions citoyennes.</p>
      </div>
    </div>

  </div>
</section>



               
              
            </main>
        </div>
    );
};

export default AboutUs;