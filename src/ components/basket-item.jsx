export const BasketItem = ({ item, quantityUp, quantityDown, removeFromBasket }) => {
    const { title, price, count } = item
  
    return (
      <tr className="border-b border-purple-700">
        <td className="p-4">{title}</td>
        <td className="p-4">${price.toFixed(2)}</td>
        <td className="p-4">{count}</td>
        <td className="p-4">${(price * count).toFixed(2)}</td>
        <td className="p-4">
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded" onClick={() => quantityUp(item)}>
            +
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 mx-2 rounded" onClick={() => quantityDown(item)}>
            -
          </button>
          <button className="bg-purple-500 hover:bg-purple-600 text-white py-1 px-2 rounded" onClick={() => removeFromBasket(item)}>
            x
          </button>
        </td>
      </tr>
    );
  }