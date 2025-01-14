import { Award, Clock, Users, Leaf } from 'lucide-react';

const features = [
  {
    icon: Award,
    title: "Calidad Premium",
    description: "Ingredientes seleccionados y procesos artesanales que garantizan el mejor sabor"
  },
  {
    icon: Clock,
    title: "Tradición",
    description: "Más de 15 años endulzando los momentos especiales de nuestros clientes"
  },
  {
    icon: Users,
    title: "Equipo Apasionado",
    description: "Personal capacitado y comprometido con la excelencia en cada detalle"
  },
  {
    icon: Leaf,
    title: "Ingredientes Naturales",
    description: "Comprometidos con la frescura y la calidad de nuestros productos"
  }
];

export const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-br from-white to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Images */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80"
                alt="Elaboración artesanal"
                className="rounded-lg shadow-lg w-full h-64 object-cover transform translate-y-4"
              />
              <img
                src="https://images.unsplash.com/photo-1516684732162-798a0062be99?auto=format&fit=crop&q=80"
                alt="Nuestro local"
                className="rounded-lg shadow-lg w-full h-64 object-cover -translate-y-4"
              />
            </div>
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-xl w-3/4">
              <p className="text-center text-gray-600 italic">
                "Creando momentos dulces desde 2008"
              </p>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="lg:pl-12">
            <div className="text-center lg:text-left">
              <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                Nuestra Historia
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Bravissimo nació de una pasión por los helados artesanales y el café de especialidad. 
                Lo que comenzó como un pequeño local en el corazón de la ciudad, se ha convertido en 
                un referente de calidad y sabor, manteniendo siempre nuestra esencia artesanal y el 
                compromiso con la excelencia.
              </p>
              <p className="text-gray-600 mb-12 leading-relaxed">
                Cada helado, cada taza de café y cada postre que servimos lleva consigo años de 
                experiencia, dedicación y el cariño de un equipo apasionado por crear experiencias 
                memorables para nuestros clientes.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div key={index} className="text-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
                  <feature.icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
