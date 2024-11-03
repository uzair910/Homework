import { DISCOUNT_PERCENTAGE } from "./Data";
import { useState, useEffect } from "react";
import Header from "./Components/Header";
import Products from "./Components/Products";
import Search from "./Components/Search";
import { Product } from "./interfaces/Product";
import Trending from "./Components/Trending";
import { useProducts } from "./hooks/useProducts";
import Loading from "./Components/Loading";

function App() {
  const { loading, error, data } = useProducts(DISCOUNT_PERCENTAGE);
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    if (data) {
      setProducts(data);
    }
  }, [data, error]);

  const handleSearch = (query: string) => {
    const filteredProducts = data.filter((product) =>
      product.title
        .toLowerCase()
        .includes(query.toLowerCase().trimEnd().trimStart())
    );
    setProducts(filteredProducts);
  };

  return (
    <>
      <Header />
      <Search onSearch={handleSearch} />
      <Loading error={error} loading={loading} />
      {!error && (
        <>
          <Trending products={data} />
          <Products products={products} />
        </>
      )}
    </>
  );
}

export default App;
