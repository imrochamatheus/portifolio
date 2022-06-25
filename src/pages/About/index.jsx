import { Text, Flex, Heading, Stack, StackItem, Image } from "@chakra-ui/react";
import Nav from "../../components/Nav";
import profilePhoto from "../../assets/img/profile.png";

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
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
        mb={{ base: 16, lg: 0 }}
      >
        <StackItem>
          <Image src={profilePhoto} w={300} />
        </StackItem>
        <StackItem maxW="350px">
          <Text textShadow="1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea">
            Sobre mim
          </Text>
          <Heading fontSize={{ base: "3xl", lg: "4xl" }}>Matheus Rocha</Heading>
          <Text mb={2} fontSize={{ base: "sm", md: "md" }}>
            Apaixonado por resolver problemas de forma criativa!
          </Text>
          <Stack fontSize={{ base: "xs", md: "sm" }}>
            <StackItem>
              <Text>
                Aspirante a muitas coisas, encontrei na tecnologia uma maneira
                de estar sempre aprendendo e evoluindo.
              </Text>
            </StackItem>
          </Stack>
        </StackItem>
      </Stack>
      <Nav />
    </Flex>
  );
};

export default About;
