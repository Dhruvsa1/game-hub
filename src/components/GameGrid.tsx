import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCardContainer from "./GameCardContainer";
import { Genre } from "../hooks/useGenres";

interface Props {
  selectedGenre: Genre | null;
}

const GameGrid = ({ selectedGenre } : Props) => {
  const { data , error, isLoading } = useGames(selectedGenre);
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
