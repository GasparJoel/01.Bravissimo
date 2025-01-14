import { Coffee, Facebook, IceCream, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react"


export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <IceCream className="h-8 w-8 text-primary" />
            <Coffee className="h-8 w-8 text-secondary" />
            <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Bravissimo
            </span>
          </div>
          <p className="text-gray-400 mb-6">
            Helados y café artesanal de la más alta calidad, elaborados con pasión y los mejores ingredientes.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Instagram className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Facebook className="h-6 w-6" />
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              <Twitter className="h-6 w-6" />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Enlaces Rápidos</h3>
          <ul className="space-y-3">
            <li>
              <a href="#home" className="text-gray-400 hover:text-primary transition">Inicio</a>
            </li>
            <li>
              <a href="#about" className="text-gray-400 hover:text-primary transition">Nosotros</a>
            </li>
            <li>
              <a href="#menu" className="text-gray-400 hover:text-primary transition">Menú</a>
            </li>
            <li>
              <a href="#gallery" className="text-gray-400 hover:text-primary transition">Galería</a>
            </li>
            <li>
              <a href="#blog" className="text-gray-400 hover:text-primary transition">Blog</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Horarios</h3>
          <ul className="space-y-3 text-gray-400">
            <li>
              <span className="font-medium">Lunes - Viernes</span>
              <p>8:00 AM - 9:00 PM</p>
            </li>
            <li>
              <span className="font-medium">Sábados y Domingos</span>
              <p>9:00 AM - 10:00 PM</p>
            </li>
            <li>
              <span className="font-medium">Feriados</span>
              <p>10:00 AM - 8:00 PM</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4">Contacto</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-400">
              <MapPin className="h-5 w-5 text-primary flex-shrink-0" />
              <span>Av. Principal 123, Ciudad Central</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <Phone className="h-5 w-5 text-primary flex-shrink-0" />
              <span>+1 234 567 890</span>
            </li>
            <li className="flex items-center gap-2 text-gray-400">
              <Mail className="h-5 w-5 text-primary flex-shrink-0" />
              <span>info@bravissimo.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 pt-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Bravissimo. Todos los derechos reservados.
          </p>
          <div className="flex gap-6 text-sm">
            <a href="#" className="text-gray-400 hover:text-primary transition">
              Política de Privacidad
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition">
              Términos y Condiciones
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
  )
}
