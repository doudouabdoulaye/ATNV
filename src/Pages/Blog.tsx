

const Blog = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-16 font-sans">
      <br />
      <br />
      <br />
      <br />
      <br />
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Nos Derniers Articles</h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Découvrez nos dernières réflexions, témoignages et mises à jour pour rester informé et inspiré.
        </p>
      </div>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {/* Blog Post 1 */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475"
            alt="Technologie"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <span className="inline-block bg-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Technologie
            </span>
            <h3 className="text-xl font-bold text-gray-800 mb-2">L'avenir du développement web en 2023</h3>
            <p className="text-gray-600 mb-4">
              Explorez les tendances et technologies qui façonnent le web aujourd’hui.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">15 Juin 2023</span>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2"
                  alt="Sarah Johnson"
                  className="w-6 h-6 rounded-full mr-2"
                />
                Sarah Johnson
              </div>
            </div>
          </div>
        </article>

        {/* Blog Post 2 */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40"
            alt="Business Meeting"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <span className="inline-block bg-green-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Entreprise
            </span>
            <h3 className="text-xl font-bold text-gray-800 mb-2">5 stratégies pour développer votre activité en ligne</h3>
            <p className="text-gray-600 mb-4">
              Découvrez comment toucher plus de monde avec votre projet ou ONG.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">10 Juin 2023</span>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d"
                  alt="Michael Chen"
                  className="w-6 h-6 rounded-full mr-2"
                />
                Michael Chen
              </div>
            </div>
          </div>
        </article>

        {/* Blog Post 3 */}
        <article className="bg-white rounded-xl shadow-lg overflow-hidden transition transform hover:-translate-y-1 hover:shadow-xl">
          <img
            src="https://images.unsplash.com/photo-1541462608143-67571c6738dd"
            alt="UX Design"
            className="w-full h-52 object-cover"
          />
          <div className="p-6">
            <span className="inline-block bg-purple-500 text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
              Design
            </span>
            <h3 className="text-xl font-bold text-gray-800 mb-2">Les principes UX pour de meilleures conversions</h3>
            <p className="text-gray-600 mb-4">
              Appliquer l’UX pour rendre votre message plus percutant et clair.
            </p>
            <div className="flex items-center text-sm text-gray-500">
              <span className="mr-4">5 Juin 2023</span>
              <div className="flex items-center">
                <img
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956"
                  alt="Emma Rodriguez"
                  className="w-6 h-6 rounded-full mr-2"
                />
                Emma Rodriguez
              </div>
            </div>
          </div>
        </article>
      </div>

      {/* Button */}
      <div className="text-center mt-12 ">
        <a
          href="#"
          className="inline-block bg-[#1E4530] hover:bg-blue-600 text-white font-semibold px-6 py-3 rounded-full transition "
        >
          Voir tous les articles
        </a>
      </div>
    </section>
  );
};

export default Blog;
