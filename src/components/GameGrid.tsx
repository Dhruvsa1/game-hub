import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../hooks/useGames";
import GameCard from "./GameCard";
import GameCardLoadingSkeleton from "./GameCardLoadingSkeleton";
import GameCardContainer from "./GameCardContainer";

const GameGrid = () => {
  const { data , error, isLoading } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6]

  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3}} spacing={10} padding={10}>
        {isLoading ? skeletons.map(s => <GameCardContainer>
          <GameCardLoadingSkeleton key={s}/>
        </GameCardContainer>) : null}
        {data.map((data) => (
          <GameCardContainer>
            <GameCard key={data.name} game={data}></GameCard>
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
