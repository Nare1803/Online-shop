export const ProductItem = ({ product, moveToCart }) => {
    const { title, price, category, photo } = product
  
    return (
      <div className="bg-purple-700 p-4 rounded-lg shadow-lg text-center">
        <img src={photo} alt={title} className="w-24 h-24 mx-auto mb-4 rounded-full" />
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-lg">${price.toFixed(2)}</p>
        <small className="text-purple-300">{category}</small>
        <button
          className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded"
          onClick={() => moveToCart(product)}
        >
          Add to Basket
        </button>
      </div>
    )
  }
  

