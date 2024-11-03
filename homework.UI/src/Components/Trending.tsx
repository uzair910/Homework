import { Product } from "../interfaces/Product";
import styles from "./Trending.module.css";

interface TrendingProps {
  products: Product[];
}

export default function Trending({ products }: TrendingProps) {
  const topThreeProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map((product) => product.title)
    .join(", ");

  return (
    <p className={styles.trendingProducts}>
      <span className={styles.trendingLabel}>Trending:</span> {topThreeProducts}
    </p>
  );
}
