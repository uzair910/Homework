import React from 'react';
import { ProductInterface } from '../interfaces/productInterface';

interface TrendingProps {
  products: ProductInterface[];
}

export default  function Trending ({ products }: TrendingProps){
  const topThreeProducts = products
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 3)
    .map((product) => product.title)
    .join(', ');

  return (
    <p className="trending-products">
    <span className="label">Trending:</span> {topThreeProducts}
  </p>
  );
};
