import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";
import { Platform } from "../hooks/useGames";
import { GameQuery } from "../App";

interface Props {
  gameQuery: GameQuery;
}

const GameGrid = ({ gameQuery } : Props) => {
  const { data , error, isLoading } = useGames(gameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3}} spacing={3} padding={10}>
        {isLoading ? skeletons.map(s => <GameCardContainer key={s}>
          <GameCardLoadingSkeleton />
        </GameCardContainer>) : null}
        {data.map((data) => (
          <GameCardContainer key={data.name}>
            <GameCard  game={data}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
