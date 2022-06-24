import { Flex, Heading } from "@chakra-ui/react";
import Nav from "../../components/Nav";

const Contact = () => {
  return (
    <Flex
      minH="100vh"
      w="100%"
      direction="column"
      justify="center"
      align="center"
    >
      <Nav />
      <Heading>Contact</Heading>
    </Flex>
  );
};

export default Contact;
