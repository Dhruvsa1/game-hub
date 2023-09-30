import { Box, Image, ImageProps } from "@chakra-ui/react";

import bullsEye from "../assets/bulls-eye.webp";
import thumbsUp from "../assets/thumbs-up.webp";
import meh from "../assets/meh.webp";

interface Props {
  rating: number;
}

const Emoji = ({ rating }: Props) => {
  if (rating < 3) return null;

  // const emojis = [
  //     { value: 1, src: bullsEye},
  //     { value: 2, src: thumbsUp},
  //     { value: 3, src: meh},
  // ] THIS IS ONE OF THE WAYS TO DO THIS ANOTHER WAY IS....

  const emojiMap: { [key: number]: ImageProps } = {
    3: { src: meh, alt: "meh", boxSize: "25px" },
    4: { src: thumbsUp, alt: "Recommended", boxSize: "25px" },
    5: { src: bullsEye, alt: "Exceptional", boxSize: "35px" },
  };

  //const specificEmoji = emojis.find((emoji) => rating === emoji.value);

  return <Image {...emojiMap[rating]} margin={1}/>;
};

export default Emoji;
