import ProductItem from "./ProductItem";
import { Product } from "../interfaces/productInterface";

export default function Products({ products }: { products: Product[] }) {
  return (
    <ul id="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
