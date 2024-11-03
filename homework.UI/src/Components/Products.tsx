import ProductItem from "./ProductItem";
import { Product } from "../interfaces/Product";
import styles from "./Products.module.css";

export default function Products({ products }: { products: Product[] }) {
  return (
    <ul className={styles.products}>
      {products.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ul>
  );
}
