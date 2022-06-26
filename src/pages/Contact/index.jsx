import { Flex, Heading } from "@chakra-ui/react";
import Nav from "../../components/Nav";
import Card from "../../components/ProjectCard";

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
      <Card />
      <Heading>Contact</Heading>
    </Flex>
  );
};

export default Contact;
