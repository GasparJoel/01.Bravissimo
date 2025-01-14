

export const Gallery = () => {
  return (
    <section id="gallery" className="py-20">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Nuestra Galería</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&q=80" 
            alt="Helado Artesanal"
            className="w-full h-72 object-cover transform transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white font-medium">Helados artesanales elaborados con ingredientes naturales</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80" 
            alt="Café Especial"
            className="w-full h-72 object-cover transform transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white font-medium">Café de especialidad recién tostado</p>
          </div>
        </div>
        <div className="group relative overflow-hidden rounded-lg">
          <img 
            src="https://images.unsplash.com/photo-1559305616-3f99cd43e353?auto=format&fit=crop&q=80" 
            alt="Local Bravissimo"
            className="w-full h-72 object-cover transform transition-transform group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-6">
            <p className="text-white font-medium">Ambiente acogedor y moderno</p>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}
