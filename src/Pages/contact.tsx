import { useState } from "react";

const ContactPage = () => {

  return (
    <>
      <form action="https://fabform.io/f/{form-id}" method="post">
        <section className="text-gray-600 body-font relative">
            <br />
            <br />
            <br />
          <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap">
            
        {/* Carte Google avec Infos */}
<div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
  <iframe
    width="100%"
    height="100%"
    className="absolute inset-0"
    frameBorder="0"
    title="Carte ATNV Moundou"
    scrolling="no"
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25170.388283104833!2d16.0142466!3d8.588731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10e73ebffc18d83f%3A0x8fe7eb07cb7dda17!2sMoundou!5e0!3m2!1sfr!2std!4v1721800000000"
    style={{ filter: 'grayscale(1) contrast(1.2) opacity(0.4)' }}
    allowFullScreen
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>

  <div className="bg-white relative z-10 flex flex-wrap py-6 rounded shadow-md">
    <div className="lg:w-1/2 px-6">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADRESSE</h2>
      <p className="mt-1">Quartier Dambao, Moundou, Tchad</p>
    </div>
    <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
      <a href="mailto:contact@atnv.org" className="text-[#16610E] leading-relaxed">contact@atnv.org</a>
      <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">TÉLÉPHONE</h2>
      <p className="leading-relaxed">+235 65 70 83 83</p>
    </div>
  </div>
</div>


            {/* Formulaire */}
            <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0 rounded-lg shadow-lg p-8">
              <h2 className="text-gray-900 text-2xl mb-4 font-bold">Nous Contacter</h2>
              <p className="leading-relaxed mb-5 text-gray-600">
                Une question, une suggestion ou une collaboration ? Remplissez le formulaire ci-dessous et notre équipe vous répondra rapidement.
              </p>
              <div className="mb-4">
                <label htmlFor="name" className="leading-7 text-sm text-gray-600">Nom</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>   
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white rounded border border-gray-300 focus:border-[#D4AF37] focus:ring-2 focus:ring-[#D4AF37] text-base outline-none text-gray-700 py-2 px-4 transition-colors duration-200 ease-in-out resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="text-white bg-[#1E4530] hover:bg-[#D4AF37] hover:text-black border-0 py-2 px-6 rounded text-lg transition duration-300 ease-in-out"
              >
                Envoyer
              </button>
            </div>
          </div>
        </section>
      </form>
      <DonateSection />
    </>
  );
};

const DonateSection = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <section className="bg-[#1E4530]   text-white py-12 px-4 text-center relative">
      <h2 className="text-3xl font-bold mb-4">Soutenez notre mission de paix et de développement</h2>
      <p className="mb-6 max-w-2xl mx-auto">
        Votre contribution aide l’ATNV à poursuivre ses activités de formation, d’accompagnement rural et de promotion de la non-violence au Tchad.
      </p>

      {/* BOUTON ouvrir/fermer le formulaire */}
      <button
        onClick={() => setShowForm(!showForm)}
        className="inline-block bg-[#D4AF37] hover:bg-yellow-400 text-black font-semibold py-3 px-8 rounded-full shadow-md transition duration-300"
      >
        {showForm ? 'Fermer le Formulaire' : 'Faire un Don'}
      </button>

      {/* FORMULAIRE */}
      {showForm && (
  <form className="mt-8 max-w-xl mx-auto bg-white text-black p-6 rounded-xl shadow-lg space-y-4">
    <div>
      <label className="block font-semibold mb-1">Nom complet</label>
      <input
        type="text"
        className="w-full border rounded px-4 py-2"
        placeholder="Votre nom"
        required
      />
    </div>
    <div>
      <label className="block font-semibold mb-1">Email</label>
      <input
        type="email"
        className="w-full border rounded px-4 py-2"
        placeholder="Votre email"
        required
      />
    </div>
    <div>
      <label className="block font-semibold mb-1">Montant à donner (en FCFA)</label>
      <input
        type="number"
        className="w-full border rounded px-4 py-2"
        placeholder="Ex: 5000"
        required
      />
    </div>
    <div>
      <label className="block font-semibold mb-1">Message (facultatif)</label>
      <textarea
        className="w-full border rounded px-4 py-2"
        rows={3}
        placeholder="Un mot de soutien..."
      ></textarea>
    </div>

    <div className="bg-gray-100 border-l-4 border-[#D4AF37] text-gray-800 p-4 rounded">
      <p className="font-semibold text-lg mb-2">Informations de paiement</p>
      <p>
        Merci de bien vouloir effectuer votre don via virement bancaire aux coordonnées suivantes :
      </p>
      <ul className="mt-2 space-y-1 text-sm">
        <li><strong>Nom de l'organisation :</strong> ATNV</li>
        <li><strong>Banque :</strong> Banque Commerciale du Tchad (BCT)</li>
        <li><strong>Numéro de compte :</strong> <span className="text-[#1E4530] font-bold">00123456789</span></li>
        <li><strong>Objet du paiement :</strong> Don volontaire</li>
      </ul>
      <p className="mt-2 italic text-sm text-gray-600">
        Une fois le virement effectué, cliquez sur le bouton ci-dessous pour nous notifier.
      </p>
    </div>

    <button
      type="submit"
      className="w-full bg-[#1E4530] hover:bg-green-700 text-white py-2 rounded font-semibold transition"
    >
      Confirmer le Don
    </button>
  </form>
      )}
    </section>
  );
};

export default ContactPage;
