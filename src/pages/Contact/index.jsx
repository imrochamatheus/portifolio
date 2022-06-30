import { Box, Flex } from "@chakra-ui/react";

import IconsLine from "../../components/IconsLine";

const Contact = () => {
  return (
    <Flex
      h="100vh"
      w="100%"
      position="relative"
      overflow="hidden"
      direction="column"
    >
      <Box position="relative" top="-50%">
        {Array(20)
          .fill(<IconsLine />)
          .map((item, i) => (
            <Box key={i}>{item}</Box>
          ))}
      </Box>
    </Flex>
  );
};

export default Contact;
