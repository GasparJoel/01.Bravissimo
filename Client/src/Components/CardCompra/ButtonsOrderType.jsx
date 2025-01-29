

export const ButtonsOrderType = ({orderType,setOrderType}) => {


  return (
  
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
  )
}
