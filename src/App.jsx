import { useState } from "react";
import "./App.css";
import { ProductList } from "./ components/product-list";
import { BasketList } from "./ components/basket-list";

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
    const found = basket.find(item=>item.id == products.id)
    if(found) {
      found.count++
      setBasket([...basket])
    } else {
      setBasket ([...basket,{...products,count:1}])
    }
  }

  const quantityUp = products => {
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
      <ProductList products={products} moveToCart={moveToCart} />
      <BasketList
        basket={basket}
        quantityUp={quantityUp}
        quantityDown={quantityDown}
        removeFromBasket={removeFromBasket}
      />
    </div>
  );
}

export default App



