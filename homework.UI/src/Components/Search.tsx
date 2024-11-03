import { useState, ChangeEvent } from "react";

export default function Search({
  onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const [query, setQuery] = useState("");

  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
    onSearch?.(newQuery);
  };

  return (
    <input
      value={query}
      className="search-input"
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
    />
  );
}