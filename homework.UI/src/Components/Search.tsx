// SearchComponent.tsx
import React, { useState, ChangeEvent } from "react";
import { ProductInterface } from "../interfaces/productInterface";

export default function SearchComponent({
  products,
  onSearchResults,
}: {
  products: ProductInterface[];
  onSearchResults?: (query: string) => void;
}) {
  const [query, setQuery] = useState<string>("");
  

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
    onSearchResults?.(event.target.value);
  };

  return (
    <input
      className="search-input"
      type="text"
      placeholder="Search by title..."
      value={query}
      onChange={handleSearch}
    />
  );
}
