import React from 'react'

export const CardProducts = ({item,addToCart}) => {


  return (
    <div >
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
                      className="block w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                    >
                      Agregar {variant.size} - {variant.price}
                    </button>
                  ))}
                </div>
              ) : (
                <button
                  onClick={() => addToCart({ name: item.name, price: item.price })}
                  className="block w-full py-2 px-4 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
                >
                  Agregar - {item.price}
                </button>
              )}
    </div>
  )
}
