import { GameQuery } from "../App";
import useData from "./useData";
import { Genre } from "./useGenres";

export interface Platform {
  id: number;
  slug: string;
  name: string
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: {platform: Platform}[]
    metacritic: number;
    rating_top: number;
  }
  
const useGames = (gameQuery: GameQuery) => useData<Game>(
  '/games',  
  { params: 
    { genres: gameQuery.genre?.id, 
      parent_platforms: gameQuery.platform?.id, 
      ordering: gameQuery.ordering,
      search: gameQuery.searchText,
    }
  }
  , 
  [gameQuery]);

export default useGames;