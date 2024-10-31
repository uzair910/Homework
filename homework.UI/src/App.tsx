import './App.css'
import { useState, useEffect } from 'react';
import Header from './Components/Header';
import Products from './Components/Products';
import SearchComponent from './Components/Search';
import { Product } from './interfaces/productInterface';


function App() {
  const [products, setProducts] = useState<Product[]>([]);
  
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);
  
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch("http://localhost:5034/api/products");
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const products = await response.json();
        setProducts(products);
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
    <SearchComponent products={products}  onSearchResults={handleSearch}/>
    <Products products={filteredProducts} />
  </>
  )
}

export default App
