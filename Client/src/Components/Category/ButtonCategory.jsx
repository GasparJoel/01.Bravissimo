

export const ButtonCategory = ({category,setActiveCategory,activeCategory}) => {
  return (
    <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? `${category.color} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-600 hover:bg-gray-50'
              }`}
            >
              <category.icon className="inline-block mr-2" />
              {category.name}
    </button>
  )
}
