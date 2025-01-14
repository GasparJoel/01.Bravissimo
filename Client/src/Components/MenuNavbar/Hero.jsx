import { ArrowRight, Coffee, IceCream } from "lucide-react";
import { Espacios } from "../HeroComponents/Espacios";
// import { ImageSlider } from "../HeroComponents/ImageSlider";
import { Promotions } from "../HeroComponents/Promotions";
// import Typewriter from 'typewriter-effect';

export const Hero = () => {
  return (
    <div>
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-light via-white to-secondary-light">
        <div className="absolute inset-0 bg-[url('/public/fondobg.png')] opacity-10 bg-cover bg-center"></div>
        <div className="max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 relative">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
            <div className="flex-1 text-center lg:text-left">
              <div className="flex items-center gap-3 justify-center lg:justify-start mb-6">
                <IceCream className="h-10 w-10 text-primary" />
                <Coffee className="h-10 w-10 text-secondary" />
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl">
                <span className="text-primary animate-backInLeft">Helados</span> y{" "}
                <span className="text-secondary animate-backInLeft delay-150">Café</span>{" "}
                <span className="block mt-2 animate-slideUp delay-300">Artesanal de Calidad</span>
                
               
              </h1>
              <p className="max-w-2xl mb-8 font-medium text-gray-600 lg:mb-8 md:text-lg lg:text-xl mx-auto lg:mx-0">
              Descubre el placer de degustar helados artesanales y café de especialidad, elaborados con los mejores ingredientes y mucho amor.
                {/* <Typewriter
                  options={{
                    strings: [
                      "Descubre el placer de degustar helados artesanales y café de especialidad, elaborados con los mejores ingredientes y mucho amor."
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50, // Velocidad de escritura
                  }}
                /> */}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <a
                  href="#menu"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium text-white rounded-lg bg-primary hover:bg-primary-dark transition-colors duration-300 shadow-lg hover:shadow-xl"
                >
                  Ver Menú
                  <ArrowRight className="w-5 h-5 ml-2" />
                </a>
                <a
                  href="#locations"
                  className="inline-flex items-center justify-center px-6 py-4 text-base font-medium rounded-lg border-2 border-secondary text-secondary hover:bg-secondary hover:text-white transition-colors duration-300"
                >
                  Visítanos
                </a>
              </div>
            </div>

            <div className="flex-1 relative">
              <div className="grid grid-cols-2  gap-4">
              {/* <img src="/public/iconFondo.gif" alt="" /> */}
                <img
                  src="https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80"
                  alt="Helados artesanales"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300"
                />
                <img
                  src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80"
                  alt="Café de especialidad"
                  className="w-full h-48 object-cover rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300 mt-8"
                />
               
              </div>
            </div>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-white to-transparent"></div>
      </section>
      <Promotions/>
      {/* <ImageSlider/> */}
      <Espacios />
     
    </div>
  );
};
