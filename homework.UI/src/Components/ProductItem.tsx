import { Product } from "../interfaces/Product";
import styles from "./ProductItem.module.css";

export default function ProductItem({ product }: { product: Product }) {
  return (
    <li className={styles.productItem}>
      <article>
        <div>
          <h3>{product.title}</h3>
          <h4>{product.brand}</h4>
          <p className={styles.productItemPrice}>${product.price}</p>
          <p className={styles.productItemDescription}>{product.description}</p>
        </div>
      </article>
    </li>
  );
}
