import { useAsync } from "react-use";

export function useFetchData(url: string, filterOnDiscount: boolean = false) {
  const { loading, error, value } = useAsync(async () => {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return (filterOnDiscount) ? data.filter((item: any) => item.discountPercentage > 10) : data;
    
  }, [url, filterOnDiscount]);

  return { loading, error, data: value };
}