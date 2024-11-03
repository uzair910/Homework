import "./App.css";
import { API_URL, API_GET_ALL_PRODUCTS } from "./Data";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Search from "./Components/Search";
import { Product } from "./interfaces/productInterface";
import Trending from "./Components/Trending";
import { useFetchData } from "./hooks/usehttp";

function App() {
  const { loading, error, data } = useFetchData(
    API_URL + API_GET_ALL_PRODUCTS,
    10
  );
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>(products);

  useEffect(() => {
    if (data) {
      setProducts(data);
      setFilteredProducts(data);
    }
  }, [data, error]);

  const handleSearch = (query: string) => {
    const filteredProducts = products.filter((product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase().trimEnd().trimStart())
    );
    setFilteredProducts(filteredProducts);
  };

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <div className={`loading-message${error ? " error" : ""}`}>
        {loading ? "Loading..." : error?.message ?? ""}
      </div>
      {!error && (
        <>
          <Trending products={products} />
          <Products products={filteredProducts} />
        </>
      )}
    </>
  );
}

export default App;
