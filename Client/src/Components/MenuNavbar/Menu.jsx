import { useState } from 'react';
import { 
  IceCream, 
  Coffee, 
  Cake, 
  Utensils, 
  ShoppingCart, 
  Trash2, 
  X, 
  Plus, 
  Minus,
  CreditCard,
  Wallet,
  Phone,
  User,
  Minimize2,
  Maximize2
} from 'lucide-react';
import { ButtonsOrderType } from '../CardCompra/ButtonsOrderType';
import { Title } from '../CardCompra/Title';
import { ButtonCategory } from '../Category/ButtonCategory';
import { CardProducts } from '../Category/CardProducts';

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
  //Categorias
  const [activeCategory, setActiveCategory] = useState('helados');
  //Carrito de compras
  const [cart, setCart] = useState([]);
  //Para el tipo de orden
  const [orderType, setOrderType] = useState('');

  //datos de form
  const [location, setLocation] = useState('');
  const [reference, setReference] = useState('');
  const [pickupTime, setPickupTime] = useState('');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('');

  const [isCollapsed, setIsCollapsed] = useState(false); // Estado para controlar la visibilidad del carrito

  const addToCart = (item) => {
    setCart((prev) => {
      const existingItem = prev.find(
        (i) => i.name === item.name && i.price === item.price
      );
  
      if (existingItem) {
        return prev.map((i) =>
          i.name === item.name && i.price === item.price
            ? { ...i, quantity: (i.quantity || 1) + 1 }
            : i
        );
      }
  
      // Aquí es donde se asegura que la propiedad 'image' sea parte del item cuando se agrega
      return [
        ...prev,
        {
          ...item,  // item ya debería tener la propiedad 'image' si está presente
          quantity: 1,
        },
      ];
    });
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
  };

  const updateQuantity = (index, change) => {
    setCart(prev => prev.map((item, i) => {
      if (i === index) {
        const newQuantity = (item.quantity || 1) + change;
        if (newQuantity < 1) return item;
        return { ...item, quantity: newQuantity };
      }
      return item;
    }));
  };

  const calculateTotal = () => {
    return cart.reduce((total, item) => {
      const price = parseFloat(item.price.replace('S/. ', ''));
      return total + (price * (item.quantity || 1));
    }, 0).toFixed(2);
  };

  const handleSubmit = () => {
    if (!orderType) {
      alert('Por favor seleccione tipo de entrega (Delivery o Recojo)');
      return;
    }

    if (!customerName || !customerPhone || !paymentMethod) {
      alert('Por favor complete sus datos personales y método de pago');
      return;
    }

    if (orderType === 'delivery' && (!location || !reference)) {
      alert('Por favor complete los datos de entrega');
      return;
    }

    if (orderType === 'pickup' && !pickupTime) {
      alert('Por favor seleccione hora de recojo');
      return;
    }

    const orderDetails = cart.map((item) => 
      `- ${item.name} x${item.quantity || 1}: ${item.price}`
    ).join('\n');
    
    const total = `Total: S/. ${calculateTotal()}`;
    const deliveryType = `Tipo de entrega: ${orderType === 'delivery' ? 'Delivery' : 'Recojo'}`;
    const userDetails = orderType === 'delivery'
      ? `Localización: ${location}\nReferencia: ${reference}`
      : `Hora de recojo: ${pickupTime}`;
    const customerDetails = `Nombre: ${customerName}\nTeléfono: ${customerPhone}\nMétodo de pago: ${paymentMethod}`;

    const message = `Hola, me gustaría realizar un pedido:\n\n${orderDetails}\n\n${total}\n${deliveryType}\n${customerDetails}\n${userDetails}`;
    const whatsappLink = `https://wa.me/?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
  };

  const CustomerInfoForm = () => (
    <div className="space-y-4 mb-4">
      <div className="relative">
        <input
          type="text"
          placeholder="Nombre completo"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <User className="w-5 h-5" />
        </span>
      </div>
      <div className="relative">
        <input
          type="tel"
          placeholder="Teléfono"
          value={customerPhone}
          onChange={(e) => setCustomerPhone(e.target.value)}
          className="w-full p-3 pl-10 border rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
        />
        <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400">
          <Phone className="w-5 h-5" />
        </span>
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Método de pago</label>
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            onClick={() => setPaymentMethod('Efectivo')}
            className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
              paymentMethod === 'Efectivo' 
                ? 'bg-primary text-white border-primary' 
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <Wallet className="w-4 h-4" />
            Efectivo
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('Yape')}
            className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
              paymentMethod === 'Yape' 
                ? 'bg-primary text-white border-primary' 
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <Phone className="w-4 h-4" />
            Yape
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('Plin')}
            className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
              paymentMethod === 'Plin' 
                ? 'bg-primary text-white border-primary' 
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <Phone className="w-4 h-4" />
            Plin
          </button>
          <button
            type="button"
            onClick={() => setPaymentMethod('Tarjeta')}
            className={`p-3 rounded-lg border transition-all flex items-center justify-center gap-2 ${
              paymentMethod === 'Tarjeta' 
                ? 'bg-primary text-white border-primary' 
                : 'border-gray-300 hover:border-primary'
            }`}
          >
            <CreditCard className="w-4 h-4" />
            Tarjeta
          </button>
        </div>
      </div>
    </div>
  );

    // Función para obtener el total de productos en el carrito
    const calculateTotalItems = () => {
      return cart.reduce((total, item) => total + item.quantity, 0);
    };

  return (
    <section id="menu" className="py-20 bg-gradient-to-br from-secondary/5 to-primary/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
       <Title/>
       
       <ButtonsOrderType orderType={orderType} setOrderType={setOrderType} />

        {orderType && <CustomerInfoForm />}

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

        {/* BOTONES DE LAS CATEGORIAS  */}
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          {categories.map((category) => (

            <ButtonCategory key={category.id} category={category} setActiveCategory={setActiveCategory} activeCategory={activeCategory}  />
           
          ))}
        </div>


          {/* Productos recorridos del arreglo    */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {menuItems[activeCategory].map((item, index) => (

            <CardProducts key={index} item={item} addToCart={addToCart} />
           
          ))}
        </div>
      </div>

      <aside className="fixed top-20 right-4 w-80 bg-white shadow-xl rounded-lg overflow-hidden">
      <div className="bg-primary text-white p-4 flex items-center gap-2">
        <ShoppingCart className="w-6 h-6" />
        <span className="text-2xl text-secondary-light font-semibold">{calculateTotalItems()} </span>
        <span className="text-lg"> S/. {calculateTotal()}</span>
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="ml-auto p-2 rounded-full hover:bg-primary/20 transition-colors"
        >
          {isCollapsed ? <Maximize2 /> : <Minimize2 />}
        </button>
      </div>

      <div className={`p-4 ${isCollapsed ? "hidden" : ""}`}>
        <div className="max-h-[calc(100vh-400px)] overflow-y-auto">
          {cart.length > 0 ? (
            <ul className="space-y-4">
              {cart.map((item, index) => (
                <li key={index} className="flex items-center gap-3 bg-gray-50 p-3 rounded-lg">
                  <div className="flex-shrink-0">
                    {/* Imagen pequeña del producto */}
                    <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded-lg" />
                  </div>
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <button
                        onClick={() => updateQuantity(index, -1)}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                        disabled={item.quantity <= 1}
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="font-medium">{item.quantity || 1}</span>
                      <button
                        onClick={() => updateQuantity(index, 1)}
                        className="p-1 rounded-full hover:bg-gray-200 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                  <span className="font-medium">{item.price}</span>
                  <button
                    onClick={() => removeFromCart(index)}
                    className="p-1 text-red-500 hover:bg-red-50 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-center py-8 text-gray-500">
              <ShoppingCart className="w-12 h-12 mx-auto mb-3 opacity-50" />
              <p>Tu carrito está vacío</p>
            </div>
          )}
        </div>

        {cart.length > 0 && (
          <>
            <div className="mt-4 pt-4 border-t">
              <div className="flex justify-between items-center text-lg font-bold">
                <span>Total de productos:</span>
                <span>{calculateTotalItems()} artículos</span>
              </div>
              <div className="flex justify-between items-center text-lg font-bold mt-2">
                <span>Total:</span>
                <span>S/. {calculateTotal()}</span>
              </div>
            </div>

            <div className="space-y-2 mt-4">
              <button
                onClick={clearCart}
                className="w-full py-2 px-4 flex items-center justify-center gap-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
              >
                <Trash2 className="w-5 h-5" />
                Vaciar Carrito
              </button>
              <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 flex items-center justify-center gap-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                Realizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </aside>
    </section>
  );
};