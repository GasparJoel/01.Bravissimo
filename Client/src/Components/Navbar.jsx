import { useState } from "react";
import { Coffee, IceCream } from "lucide-react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 fixed top-0 w-full z-50 shadow-md">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="flex items-center space-x-3 rtl:space-x-reverse">
          <IceCream className="h-8 w-8 text-primary" />
          <Coffee className="h-8 w-8 text-secondary" />
          <span className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Bravissimo
          </span>
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } w-full md:flex md:items-center md:w-auto`}
          id="navbar-dropdown"
        >
          <ul className="flex flex-col md:flex-row md:space-x-8 mt-4 md:mt-0">
            <li>
              <Link
                to="/"
                className="block text-gray-700 hover:text-primary transition"
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                className="block text-gray-700 hover:text-primary transition"
              >
                Nosotros
              </Link>
            </li>
            <li>
              <Link
                to="/menu"
                className="block text-gray-700 hover:text-primary transition"
              >
                Menú
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className="block text-gray-700 hover:text-primary transition"
              >
                Galería
              </Link>
            </li>
            <li>
              <Link
                to="/locations"
                className="block text-gray-700 hover:text-primary transition"
              >
                Ubicaciones
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="block text-gray-700 hover:text-primary transition"
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

