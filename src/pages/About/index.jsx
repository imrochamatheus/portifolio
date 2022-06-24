import { Box, Flex, Heading } from "@chakra-ui/react";
import Nav from "../../components/Nav";

const About = () => {
  return (
    <Flex
      minH="100vh"
      w="100%"
      direction="column"
      justify="center"
      align="center"
      position="relative"
    >
      <Box>
        <Heading>About</Heading>
      </Box>
      <Nav />
    </Flex>
  );
};

export default About;
