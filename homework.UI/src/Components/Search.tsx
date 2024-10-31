import { useState, ChangeEvent } from "react";
import { ProductInterface } from "../interfaces/productInterface";

export default function Search({
  products,
  onSearchResults,
}: {
  products: ProductInterface[];
  onSearchResults?: (query: string) => void;
}) {
  const [query, setQuery] = useState<string>(""); // Dont really need this state in current concept but it might be useful if this is needed in future (eg. for cahi)  
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearchResults?.(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by name..."
      value={query}
      onChange={handleSearch}
    />
  );
}
