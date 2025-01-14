import { useEffect, useState } from "react";


const slides = [
    {
      url: "https://images.unsplash.com/photo-1517093602195-b40af9688b46?auto=format&fit=crop&q=80",
      title: "Helados Artesanales",
      description: "Sabores únicos elaborados con ingredientes naturales"
    },
    {
      url: "https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80",
      title: "Café de Especialidad",
      description: "Los mejores granos seleccionados para tu paladar"
    },
    {
      url: "https://images.unsplash.com/photo-1416453072034-c8856e589779?auto=format&fit=crop&q=80",
      title: "Postres Exclusivos",
      description: "Creaciones dulces que te sorprenderán"
    }
  ];

export const ImageSlider = () => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => 
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
      }, 5000); // Change slide every 5 seconds
  
      return () => clearInterval(timer);
    }, []);

  return (
    <div className="relative h-[600px] w-full overflow-hidden">
      <div 
        className="absolute top-0 left-0 w-full h-full flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="min-w-full h-full relative flex-shrink-0"
          >
            <img
              src={slide.url}
              alt={slide.title}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold mb-4 transform translate-y-[-20px] opacity-0 animate-slideUp">
                  {slide.title}
                </h2>
                <p className="text-xl transform translate-y-[-20px] opacity-0 animate-slideUp animation-delay-200">
                  {slide.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentIndex 
                ? 'bg-white w-8' 
                : 'bg-white/50 hover:bg-white/75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
