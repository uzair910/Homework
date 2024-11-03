import { useAsync } from "react-use";

export function useFetchData(
  url: string,
  discountPercentage: number | null = null
) {

  console.log ( url + `?discountPercentage=${discountPercentage}`);
  const { loading, error, value } = useAsync(async () => {
    const response = await fetch(
      url + `?discountPercentage=${discountPercentage}`
    );
    if (!response.ok) {
      throw new Error("Fetching filtered data from API failed");
    }

    return await response.json();
  }, [url, discountPercentage]);

  return { loading, error, data: value };
}
