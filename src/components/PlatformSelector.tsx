import { Button, Menu, MenuButton, MenuItem, MenuList, } from "@chakra-ui/react";
import usePlatforms from "../hooks/usePlatforms";
import { BsChevronDown } from "react-icons/bs";
import { Platform } from "../hooks/useGames";

interface Props {
  onSelect: (platform: Platform) => void;
  selectedPlatform: Platform | null;
}

const PlatformSelector = ({ onSelect, selectedPlatform } : Props) => {
  const { data, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
        <MenuButton as={Button} rightIcon={<BsChevronDown/>}>{selectedPlatform ? selectedPlatform.name : "Platforms"}</MenuButton>
      <MenuList>
          {data.map((platform) => (
            <MenuItem onClick={() => onSelect(platform)} key={platform.id}>
                {platform.name}
            </MenuItem>
          ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
