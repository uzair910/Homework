import { useAsync } from "react-use";
import { API_URL, API_GET_ALL_PRODUCTS } from "../Data";
import { Product } from "../interfaces/Product";

export function useProducts(discountPercentage: number | null = null): {
  loading: boolean;
  error: Error | undefined;
  data: Product[];
} {
  const {
    loading,
    error,
    value = [],
  } = useAsync(async () => {
    const response = await fetch(
      API_URL +
        API_GET_ALL_PRODUCTS +
        `?discountPercentage=${discountPercentage}`
    );
    if (!response.ok) {
      throw new Error("Fetching filtered data from API failed");
    }
    return await response.json();
  }, [discountPercentage]);

  return { loading, error, data: value };
}
