import { Flex, HStack, Icon, Spacer, Text } from "@chakra-ui/react";
import { AiFillTags } from "react-icons/ai";

interface Props {
  allTags: string[];
}
const TagList = ({ allTags }: Props) => {
  return (
    <Flex wrap="wrap">
      {allTags.map((tag) => (
        <HStack key={tag}>
          <Icon as={AiFillTags} color="gray.500" />
          <Text>{tag}</Text>
          <Spacer/>
        </HStack>
      ))}
    </Flex>
  );
};

export default TagList;
