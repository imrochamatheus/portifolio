import { Flex, Heading, Stack, StackItem } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

import Nav from "../../components/Nav";
import Typewriter from "typewriter-effect";

import profile from "../../assets/img/home-animation.gif";
import { motion } from "framer-motion";

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
          <Image
            src={profile}
            w={{ base: 250, md: 300 }}
            as={motion.img}
            initial={{ marginLeft: "-500px" }}
            animate={{ marginLeft: 0 }}
            exit={{ marginLeft: "-500px" }}
            transition="all .2s"
          />
        </StackItem>

        <StackItem>
          <Stack spacing={1}>
            <StackItem display="flex" alignItems="flex-end">
              <Heading
                fontSize={{ base: "xl", md: "5xl" }}
                fontWeight={300}
                mb={{ md: -1, lg: -2 }}
              >
                Olá,&nbsp;
              </Heading>
              <Heading
                fontSize={{ base: "md", md: "xl" }}
                fontWeight={300}
                variant="span"
              >
                eu sou o
              </Heading>
            </StackItem>

            <StackItem>
              <Heading
                textShadow="4px 4px #ff0000, -4px -4px #9F7AEA"
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              >
                Matheus Rocha!
              </Heading>
            </StackItem>

            <StackItem>
              <Heading
                fontSize={{ base: "md", md: "3xl" }}
                fontWeight={300}
                color="whiteAlpha.600"
              >
                {"<dev/>"}
              </Heading>
            </StackItem>

            <StackItem>
              <Heading fontSize={{ base: "sm", md: "xl" }} fontWeight={300}>
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
