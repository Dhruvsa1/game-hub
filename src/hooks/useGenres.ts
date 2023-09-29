import useData from "./useData";

interface Genre {
    id: number;
    name: string;
    image_background: string;
  }
  
const useGames = () => useData<Genre>('/genres');

export default useGames;