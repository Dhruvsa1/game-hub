import React from "react";
import useGenres from "../hooks/useGenres";
import { HStack, List, ListItem, Image, Text } from "@chakra-ui/react";
import getCroppedImages from "../services/imageCropper";

export const GenreList = () => {
  const { data } = useGenres();
  return (
    <List>
      {data.map((g) => (
        <ListItem key={g.id}>
          <HStack paddingY={"5px"}>
            <Image
              boxSize="32px"
              borderRadius={3}
              src={getCroppedImages(g.image_background)}
            />
            <Text fontSize='lg'>{g.name}</Text>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};
