import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        console.log("fetching products...");
        const response = await fetch("http://localhost:5034/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log("setting state products...");
   
        const products = await response.json();
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }

    }

    fetchProducts();
  }, []);

  return (
    <ul id="products">
      {products.map((product) => (
        <li key={product.ID}>{product.Title}</li>
      ))}
    </ul>
  );
}
