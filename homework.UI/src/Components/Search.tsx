import { useRef, ChangeEvent } from "react";

export default function Search({
  onSearch: onSearch,
}: {
  onSearch?: (query: string) => void;
}) {
  const inputRef = useRef<HTMLInputElement>(null);
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => {
    const query = inputRef.current?.value || "";
    onSearch?.(query);
  };

  return (
    <input
      ref={inputRef}
      className="search-input"
      type="text"
      placeholder="Search by name..."
      onChange={handleSearch}
    />
  );
}
