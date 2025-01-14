import { Coffee, IceCream, Music, Users, Utensils, Wifi } from 'lucide-react'


export const Espacios = () => {
  return (
    <section id="spaces" className="py-20 bg-gradient-to-br from-white to-primary/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nuestros Espacios</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">Descubre los diferentes ambientes que hemos creado pensando en tu comodidad y disfrute. Cada espacio tiene su propia personalidad y está diseñado para diferentes ocasiones.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Café Workspace Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                  alt="Zona de café y trabajo"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Zona de Café & Trabajo</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Espacio perfecto para trabajar o estudiar mientras disfrutas de nuestro café de especialidad.
                </p>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="flex items-center gap-1 text-sm">
                    <Wifi className="h-4 w-4" />
                    WiFi
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Coffee className="h-4 w-4" />
                    Café
                  </span>
                </div>
              </div>
            </div>

            {/* Family Area Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                  alt="Área familiar"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Área Familiar</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Un espacio acogedor para toda la familia con zona de juegos para los más pequeños.
                </p>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="flex items-center gap-1 text-sm">
                    <Users className="h-4 w-4" />
                    Familiar
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <IceCream className="h-4 w-4" />
                    Helados
                  </span>
                </div>
              </div>
            </div>

            {/* Events Room Card */}
            <div className="group relative overflow-hidden rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-1.2.1&auto=format&fit=crop&q=80"
                  alt="Salón de eventos"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-6 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-bold mb-2">Salón de Eventos</h3>
                <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                  Espacio privado ideal para celebraciones, reuniones y eventos especiales.
                </p>
                <div className="flex gap-3 mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200">
                  <span className="flex items-center gap-1 text-sm">
                    <Utensils className="h-4 w-4" />
                    Catering
                  </span>
                  <span className="flex items-center gap-1 text-sm">
                    <Music className="h-4 w-4" />
                    Música
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}
