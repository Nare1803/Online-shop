import { useState } from "react";
import "./App.css";

function App() {
  const [products, setProducts] = useState([
    {
      id: 1,
      title: "Wireless Headphones",
      price: 49.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 2,
      title: "Yoga Mat",
      price: 19.99,
      category: "Fitness",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 3,
      title: "Desk Lamp",
      price: 29.99,
      category: "Home Decor",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 4,
      title: "Running Shoes",
      price: 59.99,
      category: "Footwear",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 5,
      title: "Bluetooth Speaker",
      price: 39.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 6,
      title: "Cooking Utensil Set",
      price: 24.99,
      category: "Kitchen",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 7,
      title: "Notebook",
      price: 4.99,
      category: "Stationery",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 8,
      title: "Gaming Mouse",
      price: 34.99,
      category: "Gaming",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 9,
      title: "Sunglasses",
      price: 14.99,
      category: "Accessories",
      photo: "https://via.placeholder.com/100",
    },
    {
      id: 10,
      title: "Portable Charger",
      price: 25.99,
      category: "Electronics",
      photo: "https://via.placeholder.com/100",
    },
  ]);
  const [basket, setBasket] = useState([]);
  const moveToCart = products => {
    // setBasket ([...basket,{...products,count:1}])
    const found = basket.find(item=>item.id == products.id)
    if(found) {
      found.count++
      setBasket([...basket])//render
    } else {
      setBasket ([...basket,{...products,count:1}])
    }
  }

  const quantityUp = products => {
    // const found = basket.find(item => item.id == products.id)
    // found.count++
    // setBasket([...basket])

    setBasket(basket.map(item=>
      item.id != products.id ? item : {...item,count:item.count + 1}
    ))
  } 

  const quantityDown = products => {
    setBasket(basket.map(item=>
      item.id != products.id ? item : {...item,count:item.count - 1}
    ).filter((item)=> item.count >0))
  } 

  const removeFromBasket = products => {
    setBasket(basket.filter((item) => item.id != products.id))
  }
 

  return (
    <div className="bg-purple-900 min-h-screen text-white">
      <h1 className="text-3xl font-bold text-center py-6">Online Shop</h1>

      {/* Products Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-purple-700 p-4 rounded-lg shadow-lg text-center"
          >
            <img
              src={item.photo}
              alt={item.title}
              className="w-24 h-24 mx-auto mb-4 rounded-full"
            />
            <h2 className="text-xl font-semibold">{item.title}</h2>
            <p className="text-lg">${item.price.toFixed(2)}</p>
            <small className="text-purple-300">{item.category}</small>
            <button className="mt-4 bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded" onClick={() => moveToCart(item)}>
              Add to Basket
            </button>
          </div>
        ))}
      </div>

      {/* Basket */}
      <div className="p-6">
        <h2 className="text-2xl font-semibold mb-4">Basket</h2>
        <table className="table-auto w-full text-left border-collapse">
          <thead>
            <tr className="bg-purple-700 text-green-300">
              <th className="p-4">Title</th>
              <th className="p-4">Price</th>
              <th className="p-4">Count</th>
              <th className="p-4">Subtotal</th>
              <th className="p-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {basket.map((item) => (
              <tr key={item.id} className="border-b border-purple-700">
                <td className="p-4">{item.title}</td>
                <td className="p-4">${item.price.toFixed(2)}</td>
                <td className="p-4">{item.count}</td>
                <td className="p-4">${(item.price * item.count).toFixed(2)}</td>
                <td className="p-4">
                  <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded" onClick={() => quantityUp(item)}>
                    +
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 mx-2 rounded" onClick={() => quantityDown(item)}>
                    -
                  </button>
                  <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded" onClick={()=> removeFromBasket(item)}>
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
