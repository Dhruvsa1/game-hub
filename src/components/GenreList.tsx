import React, { useState } from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import {
  HStack,
  List,
  ListItem,
  Image,
  Text,
  Spinner,
  Button,
  Heading,
} from "@chakra-ui/react";
import getCroppedImages from "../services/imageCropper";

interface Props {
  onSelect: (genre: Genre) => void;
  selectedGenre: Genre | null;
}

export const GenreList = ({ onSelect, selectedGenre }: Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <>
    <Heading fontSize={'2xl'} marginBottom={3}>Genres</Heading>
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={"5px"}>
            <Image
            objectFit={'cover'}
              boxSize="32px"
              borderRadius={3}
              src={getCroppedImages(genre.image_background)}
            />
            <Button
              variant="link"
              fontSize="lg"
              onClick={() => onSelect(genre)}
              fontWeight={selectedGenre?.id == genre.id ? "bold" : "normal"}
              whiteSpace={"normal"}
              textAlign={'left'}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
    </>
  );
};
