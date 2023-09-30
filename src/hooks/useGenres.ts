import genres from "../data/genres";

export interface Genre {
    id: number;
    name: string;
    image_background: string;
  }
  
const useGames = () => ({ data: genres, isLoading: false,});

export default useGames;