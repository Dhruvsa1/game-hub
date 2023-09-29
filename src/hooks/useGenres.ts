import { useEffect, useState } from "react";
import apiClient from "../services/apiClient";
import { CanceledError } from "axios";



export interface Genre {
    id: number;
    name: string;
  }
  
export interface FetchGenresResponse {
    count: number;
    results: Genre[];
  }

const useGames = () => {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const [isLoading, setLoading] = useState(false);
  
    useEffect(() => {
        const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchGenresResponse>("/genres", { signal: controller.signal })
        .then((res) => {
          setGenres(res.data.results)
          setLoading(false);
        })
        .catch((err) => 
        {
            if (err instanceof CanceledError) return;
            setError(err.message);
            setLoading(false);
        });

    return () => controller.abort();
    }, []);

    return { genres , error, isLoading };
}

export default useGames;