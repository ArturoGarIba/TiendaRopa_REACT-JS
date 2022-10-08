import { useCallback, useState } from "react";

//Usamos funcionalidades extras

function useHttp() {
  const [isLoading, setIsLoading] = useState(false); 
  const [error, setError] = useState(null); 

  //Con el useCallback hace que la función funcione solo si cambió algo
  const request = useCallback(async (requestConfig) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(requestConfig.url, {
        method: requestConfig.method ? requestConfig.method : "GET",
        headers: requestConfig.headers ? requestConfig.headers : {},
        body: requestConfig.body ? JSON.stringify(requestConfig.body) : null,
      });

      if (!response.ok) throw new Error("Something went wrong");

      setIsLoading(false);
      return await response.json();
    } catch (err) {
      setError(err.message);
    }
    setIsLoading(false);
  }, []);

  return { isLoading, error, request };
}

export default useHttp;