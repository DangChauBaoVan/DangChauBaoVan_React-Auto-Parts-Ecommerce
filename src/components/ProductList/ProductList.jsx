
import { products } from "../data/products";
import ProductCard from "../ProductCard/ProductCard";

export default function ProductList() {
  return (
    <div className="grid grid-cols-5 gap-4">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          image={product.image}
          name={product.name}
          price={product.price}
          oldPrice={product.oldPrice}
        />
      ))}
    </div>
  );
}
