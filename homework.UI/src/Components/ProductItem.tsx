import { Product } from '../interfaces/productInterface';
export default function ProductItem({ product }: { product: Product }) {
  return (
    <li className="product-item">
      <article>
        <div>
            <h3>{product.title}</h3>
            <h4>{product.brand}</h4>
            <p className="product-item-price">${product.price}</p>
            <p className="product-item-description">{product.description}</p>

        </div>
      </article>
    </li>
  );
}
