import useData from "./useData";

interface Genre {
    id: number;
    name: string;
  }
  
const useGames = () => useData<Genre>('/genres');

export default useGames;