import ProductItem from "./ProductItem";
import { ProductInterface } from "../interfaces/productInterface";

export default function Products({ products }: { products: ProductInterface[] }) {
  return (
    <ul id="products">
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
