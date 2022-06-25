import { Flex, Heading, Stack, StackItem } from "@chakra-ui/react";
import Nav from "../../components/Nav";
import Typewriter from "typewriter-effect";
import { Image } from "@chakra-ui/react";

import profile from "../../assets/img/home-animation.gif";

const Home = () => {
  return (
    <Flex
      minH="100vh"
      w="100%"
      direction="column"
      justify="center"
      align="center"
    >
      <Nav />
      <Stack
        direction={{ base: "column", md: "row" }}
        spacing={5}
        display="flex"
        align="center"
      >
        <StackItem>
          <Image src={profile} width={300} />
        </StackItem>
        <StackItem>
          <Stack spacing={0}>
            <StackItem>
              <Heading fontSize={{ base: "md", md: "xl" }}>
                Olá, eu sou o
              </Heading>
            </StackItem>
            <StackItem>
              <Heading
                textShadow="4px 4px #ff0000, -4px -4px #9F7AEA"
                fontSize={{ base: "3xl", md: "6xl" }}
              >
                Matheus Rocha!
              </Heading>
            </StackItem>
            <StackItem>
              <Heading fontSize={{ base: "md", md: "xl" }}>{"<dev/>"}</Heading>
            </StackItem>

            <StackItem>
              <Heading fontSize={{ base: "md", md: "xl" }}>
                <Typewriter
                  options={{
                    strings: [
                      "Desenvolvedor Front End",
                      "Apaixonado por tecnologia!",
                    ],
                    autoStart: true,
                    loop: true,
                  }}
                />
              </Heading>
            </StackItem>
          </Stack>
        </StackItem>
      </Stack>
    </Flex>
  );
};

export default Home;
