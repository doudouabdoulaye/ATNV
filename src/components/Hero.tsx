import logo from '../assets/logo/WhatsApp_Image_2025-06-21_at_10.18.43-removebg-preview.png'
function Hero() {
    return (
        <>
        <br />
        <br />
        <br />
        <br />
            <section className="relative py-12 sm:py-16 lg:pt-20 lg:pb-36">
        <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            <div className="grid grid-cols-1 gap-y-8 lg:items-center lg:grid-cols-2 sm:gap-y-20 xl:grid-cols-5">
                <div className="text-center xl:col-span-2 lg:text-left md:px-16 lg:px-0">
                    <div className="max-w-sm mx-auto sm:max-w-md md:max-w-full">
                        <h1 className="text-4xl font-bold leading-tight text-gray-900 sm:text-5xl sm:leading-tight lg:text-6xl lg:leading-tight font-pj">AL-MOHANDIS CIC</h1>

                        <div className="mt-8 lg:mt-12 lg:flex lg:items-center">
                          

                            <p className="mt-4 text-lg text-gray-900 lg:mt-0 lg:ml-4 font-pj">BTP <span className="font-bold">Génie Civil, science Technologie</span> Assistance et consultation</p>
                        </div>
                    </div>

                    <div className="mt-8 sm:flex sm:items-center sm:justify-center lg:justify-start sm:space-x-5 lg:mt-12">
                        <a
                            href="#"
                            title=""
                            className="text-white bg-black hover:bg-[#D4AF37] hover:text-black hover:shadow-2xl focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 ml-4 shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out"
                            role="button"
                        >
                            Consulter les Services
                        </a>

                        <a
                            href="#"
                            title=""
                            className="inline-flex items-center px-4 py-4 mt-4 text-lg font-bold transition-all duration-200 bg-transparent border border-transparent sm:mt-0 font-pj justif-center rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 hover:bg-gray-200 focus:bg-gray-200 hover:shadow-2xl"
                            role="button"
                        >
                            <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path>
                            </svg>
                            Télécharger App
                        </a>
                    </div>
                </div>

                <div className="xl:col-span-3">
                    <img className=" mx-auto scale-110 w-120 hover:scale-105 transition-all" src={logo} alt="" />
                </div>
            </div>
        </div>
    </section>
    </>

  )
}
export default Hero;
