import { useAsync } from "react-use";

export function useFetchData(url: string) {
  const { loading, error, value } = useAsync(async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  }, [url]);

  return { loading, error, data: value };
}