import { useState, useEffect } from "react";

export default function Products() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
      
        const response = await fetch("http://localhost:5034/api/products"
          , {        mode: 'no-cors'         }
        );
        console.log("response: ", response);
        console.log("response OK : ", response.ok);
        console.log("response STATUS: ", response.status);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        console.log("response OK! / NOW fetching products...");
        const products = await response.json();

        console.log("setting state products...");
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