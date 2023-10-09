import { HStack, Icon, Text } from "@chakra-ui/react";
import { AiFillTags } from "react-icons/ai";

interface Props {
  allTags: string[];
}
const TagList = ({ allTags }: Props) => {
  return (
    <HStack>
      {allTags.map((tag) => (
        <HStack key={tag}>
          <Icon as={AiFillTags} color="gray.500" />
          <Text>{tag}</Text>
        </HStack>
      ))}
    </HStack>
  );
};

export default TagList;
