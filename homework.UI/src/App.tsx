import "./App.css";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Search from "./Components/Search";
import { Product } from "./interfaces/productInterface";
import Trending from "./Components/Trending";

function App() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] =
    useState<Product[]>(products);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5034/api/products"); // TODO: Move to a constant
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        setProducts(products);
        setFilteredProducts(products); // Show all products initially
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    }
    fetchProducts();
  }, []);

  const handleSearch = (query: string) => {
    const filteredProducts = products.filter((product) =>
      product.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <Header />
      <Search products={products} onSearch={handleSearch} />
      <Trending products={products} />
      <Products products={filteredProducts} />
    </>
  );
}

export default App;
