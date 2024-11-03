import { useState, ChangeEvent } from "react";
import styles from "./Search.module.css";

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
      className={styles.searchInput}
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
    />
  );
}