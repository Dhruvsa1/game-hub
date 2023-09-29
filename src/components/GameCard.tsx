import React from "react";
import { Game } from "../hooks/useGames";
import {
  Card,
  CardBody,
  Heading,
  Icon,
  Image,
  VStack,
  Text,
  HStack,
} from "@chakra-ui/react";
import GameIconList from "./GameIconList";
import ScoreBadge from "./ScoreBadge";
import getCroppedImages from "../services/imageCropper";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImages(game.background_image)} />
      <CardBody>
        <VStack alignItems={"left"} marginY={1}>
          <Heading fontSize="2xl">{game.name}</Heading>
          <HStack justifyContent={"space-between"}>
            <GameIconList
              platforms={game.parent_platforms.map((p) => p.platform)}
            />
            <ScoreBadge score={game.metacritic}></ScoreBadge>
          </HStack>
        </VStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
