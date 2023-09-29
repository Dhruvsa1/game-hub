import React from "react";
import useGenres, { Genre } from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text, Spinner, Button } from "@chakra-ui/react";
import getCroppedImages from "../services/imageCropper";

interface Props {
  onSelect: (genre: Genre) => void;
}

export const GenreList = ({ onSelect } : Props) => {
  const { data, isLoading } = useGenres();

  if (isLoading) return <Spinner />;

  return (
    <List>
      {data.map((genre) => (
        <ListItem key={genre.id}>
          <HStack paddingY={"5px"}>
            <Image
              boxSize="32px"
              borderRadius={3}
              src={getCroppedImages(genre.image_background)}
            />
            <Button variant='link' fontSize="lg" onClick={() => onSelect(genre)}>{genre.name}</Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
