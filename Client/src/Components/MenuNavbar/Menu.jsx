import { useState } from 'react';
import { IceCream, Coffee, Cake, Utensils } from 'lucide-react';

const categories = [
  { id: 'helados', name: 'Helados', icon: IceCream, color: 'bg-blue-500' },
  { id: 'cafes', name: 'Cafés', icon: Coffee, color: 'bg-yellow-900' },
  { id: 'postres', name: 'Postres', icon: Cake, color: 'bg-pink-500' },
  { id: 'platos', name: 'Platos', icon: Utensils, color: 'bg-green-500' },
];

const menuItems = {
  helados: [
    {
      name: 'Helado Artesanal',
      description: 'Sabores: Chocolate, Vainilla, Fresa, Lúcuma, Mango',
      variants: [
        { size: '1 Bola', price: 'S/. 5.90' },
        { size: '2 Bolas', price: 'S/. 9.90' },
        { size: '3 Bolas', price: 'S/. 12.90' }
      ],
      image: 'https://images.unsplash.com/photo-1580915411954-282cb1b0d780?auto=format&fit=crop&q=80'
    },
    {
      name: 'Sundae Especial',
      description: 'Helado con frutas frescas, crema batida y sirope',
      price: 'S/. 15.90',
      image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80'
    },
    {
      name: 'Copa Bravissimo',
      description: '3 sabores, brownie, frutas y crema batida',
      price: 'S/. 18.90',
      image: 'https://images.unsplash.com/photo-1514849302-984523450cf4?auto=format&fit=crop&q=80'
    }
  ],
  cafes: [
    {
      name: 'Espresso',
      description: 'Café concentrado de tueste medio',
      price: 'S/. 5.90',
      image: 'https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?auto=format&fit=crop&q=80'
    },
    {
      name: 'Cappuccino',
      description: 'Espresso con leche cremada y cacao',
      price: 'S/. 8.90',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80'
    },
    {
      name: 'Café Mocha',
      description: 'Café con chocolate y crema batida',
      price: 'S/. 9.90',
      image: 'https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?auto=format&fit=crop&q=80'
    }
  ],
  postres: [
    {
      name: 'Cheesecake',
      description: 'Con salsa de frutos rojos',
      price: 'S/. 12.90',
      image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80'
    },
    {
      name: 'Tiramisú',
      description: 'Clásico postre italiano con café',
      price: 'S/. 13.90',
      image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?auto=format&fit=crop&q=80'
    },
    {
      name: 'Brownie con Helado',
      description: 'Brownie caliente con helado de vainilla',
      price: 'S/. 14.90',
      image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80'
    }
  ],
  platos: [
    {
      name: 'Sandwich Caprese',
      description: 'Con mozzarella, tomate y pesto',
      price: 'S/. 16.90',
      image: 'https://images.unsplash.com/photo-1539252554453-80ab65ce3586?auto=format&fit=crop&q=80'
    },
    {
      name: 'Ensalada César',
      description: 'Lechuga, pollo, crutones y aderezo césar',
      price: 'S/. 18.90',
      image: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?auto=format&fit=crop&q=80'
    },
    {
      name: 'Pasta Alfredo',
      description: 'Fetuccini en salsa cremosa con pollo',
      price: 'S/. 22.90',
      image: 'https://images.unsplash.com/photo-1645112411341-6c4fd023714a?auto=format&fit=crop&q=80'
    }
  ]
};

export const Menu = () => {
  const [activeCategory, setActiveCategory] = useState('helados');
  const [cart, setCart] = useState([]);
  const [orderType, setOrderType] = useState('');
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [pickupTime, setPickupTime] = useState('');

  const addToCart = (item) => {
    setCart((prev) => [...prev, item]);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const handleSubmit = () => {
    const orderDetails = cart.map((item) => `- ${item.name}: ${item.price}`).join('\n');
    const userDetails = orderType === 'delivery'
      ? `Localización: ${location}\nReferencia: ${reference}`
      : `Hora de recojo: ${pickupTime}`;

    const message = `Hola, me gustaría realizar un pedido:\n${orderDetails}\n\n${userDetails}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  return (
    <section id="menu" className="py-20  bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Nuestro Menú
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubre nuestra variedad de productos elaborados con los mejores ingredientes
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <button
            onClick={() => setOrderType('delivery')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              orderType === 'delivery'
                ? 'bg-primary text-white shadow-lg scale-105' 
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Delivery
          </button>
          <button
            onClick={() => setOrderType('pickup')}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              orderType === 'pickup'
                ? 'bg-primary text-white shadow-lg scale-105'
                : 'bg-white text-gray-600 hover:bg-gray-50'
            }`}
          >
            Recojo
          </button>
        </div>

        {orderType === 'delivery' && (
          <div className="mb-8">
            <input
              type="text"
              placeholder="Localización"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full mb-4 p-3 border rounded-lg"
            />
            <input
              type="text"
              placeholder="Referencia"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              className="w-full p-3 border rounded-lg"
              />
              </div>
            )}
    
            {orderType === 'pickup' && (
              <div className="mb-8">
                <input
                  type="time"
                  placeholder="Hora de recojo"
                  value={pickupTime}
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full p-3 border rounded-lg"
                />
              </div>
            )}
    
              <div className="flex flex-wrap gap-4 justify-center mb-12">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeCategory === category.id
                      ? `${category.color} text-white shadow-lg scale-105` // Usa el color único si está activo
                      : 'bg-white text-gray-600 hover:bg-gray-50' // Usa colores neutros si no está activo
                  }`}
                >
                  <category.icon className="inline-block mr-2" />
                  {category.name}
                </button>
              ))}
            </div>
    
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {menuItems[activeCategory].map((item, index) => (
                <div key={index} className="p-6 bg-white rounded-lg shadow-md">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-lg font-semibold mb-2">{item.name}</h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  {item.variants ? (
                    <div className="space-y-2">
                      {item.variants.map((variant, i) => (
                        <button
                          key={i}
                          onClick={() => addToCart({ name: `${item.name} - ${variant.size}`, price: variant.price })}
                          className="block w-full text-left py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                        >
                          {variant.size} - {variant.price}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <button
                      onClick={() => addToCart({ name: item.name, price: item.price })}
                      className="block w-full text-left py-2 px-4 bg-gray-100 rounded-lg hover:bg-gray-200"
                    >
                      Añadir - {item.price}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
    
          <aside className="fixed top-20 right-4 w-80 bg-white shadow-lg rounded-lg p-4">
            <h3 className="text-xl font-bold mb-4">Carrito de Compras</h3>
            {cart.length > 0 ? (
              <ul className="space-y-4">
                {cart.map((item, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <span>{item.name}</span>
                    <span>{item.price}</span>
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-600 hover:underline"
                    >
                      Quitar
                    </button>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-gray-600">Tu carrito está vacío.</p>
            )}
            <button
              onClick={clearCart}
              className="w-full mt-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
            >
              Vaciar Carrito
            </button>
            {cart.length > 0 && (
              <button
                onClick={handleSubmit}
                className="w-full mt-2 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark"
              >
                Realizar Pedido
              </button>
            )}
          </aside>
        </section>
      );
    };