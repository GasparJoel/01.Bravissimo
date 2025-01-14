import { ChevronLeft, ChevronRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";



const promotions = [
  {
    image: "https://images.unsplash.com/photo-1579954115545-a95591f28bfc?auto=format&fit=crop&q=80",
    title: "Combo Helado Familiar",
    description: "1L de helado artesanal + 2 toppings a elección",
    price: "S/. 35.90",
    originalPrice: "S/. 45.90",
    message: "¡Hola! Me interesa el Combo Helado Familiar"
  },
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
    title: "Café + Postre",
    description: "Café americano + postre del día",
    price: "S/. 18.90",
    originalPrice: "S/. 24.90",
    message: "¡Hola! Me interesa el Combo Café + Postre"
  },
  {
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&q=80",
    title: "Pack de Postres",
    description: "4 porciones de diferentes postres",
    price: "S/. 39.90",
    originalPrice: "S/. 49.90",
    message: "¡Hola! Me interesa el Pack de Postres"
  },
  {
    image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&q=80",
    title: "Combo Desayuno",
    description: "Café + sándwich + jugo natural",
    price: "S/. 22.90",
    originalPrice: "S/. 29.90",
    message: "¡Hola! Me interesa el Combo Desayuno"
  },
  {
    image: "https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&q=80",
    title: "Pack Helados Mini",
    description: "6 copas de helado de 100ml",
    price: "S/. 25.90",
    originalPrice: "S/. 35.90",
    message: "¡Hola! Me interesa el Pack Helados Mini"
  },
  {
    image: "https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?auto=format&fit=crop&q=80",
    title: "Combo Merienda",
    description: "2 cafés + 2 postres del día",
    price: "S/. 32.90",
    originalPrice: "S/. 42.90",
    message: "¡Hola! Me interesa el Combo Merienda"
  },
  {
    image: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
    title: "Café + Pollo",
    description: "Café americano + postre del día",
    price: "S/. 18.90",
    originalPrice: "S/. 24.90",
    message: "¡Hola! Me interesa el Combo Café + Postre"
  },
];
export const Promotions = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sliderRef = useRef(null);
  // const autoPlayRef = useRef();

  const handleWhatsAppClick = (message) => {
    const phoneNumber = "977982771";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
  };

  const scrollToIndex = (index) => {
    if (sliderRef.current) {
      const cardWidth = sliderRef.current.offsetWidth / 3;
      sliderRef.current.scrollTo({
        left: index * cardWidth,
        behavior: 'smooth'
      });
    }
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % Math.ceil(promotions.length / 3);
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex === 0 ? Math.ceil(promotions.length / 3) - 1 : prevIndex - 1;
      scrollToIndex(newIndex);
      return newIndex;
    });
  };

  useEffect(() => {
    // if (isAutoPlaying) {
    //   autoPlayRef.current = setInterval(nextSlide, 5000);
    // }
    // return () => {
    //   if (autoPlayRef.current) {
    //     clearInterval(autoPlayRef.current);
    //   }
    // };
  }, [isAutoPlaying]);

  
  return (
    <section className="py-20 bg-gradient-to-br from-primary/10 to-secondary/10">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Promociones Especiales
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Aprovecha nuestras deliciosas promociones y disfruta de los mejores sabores
        </p>
      </div>
  
      {/* Carrusel horizontal */}
      <div className="relative">
        {/* Contenedor del carrusel */}
        <div
          ref={sliderRef}
          className="overflow-hidden"
        >
          <div className="flex transition-transform duration-500 gap-8">
            {promotions.map((promo, index) => (
              <div
                key={index}
                className="min-w-[calc(100%-1.5rem)] sm:min-w-[calc(50%-1.5rem)] lg:min-w-[calc(33.333%-1.5rem)] bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <div className="relative">
                  <div className="absolute top-4 right-4 bg-secondary text-white px-4 py-1 rounded-full font-semibold">
                    ¡Oferta!
                  </div>
                  <img
                    src={promo.image}
                    alt={promo.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {promo.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{promo.description}</p>
                  <div className="flex items-center justify-between mb-6">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        {promo.price}
                      </span>
                      <span className="ml-2 text-sm text-gray-500 line-through">
                        {promo.originalPrice}
                      </span>
                    </div>
                    <span className="text-secondary font-semibold">
                      Ahorra{" "}
                      {(
                        parseFloat(promo.originalPrice.replace("S/. ", "")) -
                        parseFloat(promo.price.replace("S/. ", ""))
                      ).toFixed(2)}
                    </span>
                  </div>
                  <button
                    onClick={() => handleWhatsAppClick(promo.message)}
                    className="w-full bg-gradient-to-r from-primary to-primary-dark text-white font-semibold py-3 px-6 rounded-lg hover:from-primary-dark hover:to-primary transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <span>Pedir por WhatsApp</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
  
        {/* Botón para el carrusel: Izquierda */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
          aria-label="Anterior"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
  
        {/* Botón para el carrusel: Derecha */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:bg-gray-50 transition-colors duration-200"
          aria-label="Siguiente"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  </section>
  )
}
