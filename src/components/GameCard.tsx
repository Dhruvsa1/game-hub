import React from "react";
import { Game } from "../hooks/useGames";
import { Card, CardBody, Heading, Icon, Image, VStack, Text } from "@chakra-ui/react";
import GameIconList from "./GameIconList";


interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={game.background_image} />
      <CardBody>
        <VStack justifyContent={"left"} marginY={1}>
            <Heading fontSize="2xl">{game.name}</Heading>
            <GameIconList platforms={game.parent_platforms.map(p => p.platform)}/>
        </VStack>
         
      </CardBody>
    </Card>
  );
};

export default GameCard;
