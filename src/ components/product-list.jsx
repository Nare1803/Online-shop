import { ProductItem } from "./product-item"

export const ProductList = ({ products, moveToCart }) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-6">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} moveToCart={moveToCart} />
      ))}
    </div>
  );
}


