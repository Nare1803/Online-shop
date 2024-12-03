
import { BasketItem } from "./basket-item"

export const BasketList = ({ basket, quantityUp, quantityDown, removeFromBasket }) => {
  return (
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
            <BasketItem
              key={item.id}
              item={item}
              quantityUp={quantityUp}
              quantityDown={quantityDown}
              removeFromBasket={removeFromBasket}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
