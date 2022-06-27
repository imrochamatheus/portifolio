import {
  Box,
  Flex,
  Heading,
  Icon,
  SlideFade,
  Stack,
  StackItem,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { motion } from "framer-motion";

import Nav from "../../components/Nav";
import Typewriter from "typewriter-effect";

import profile from "../../assets/img/home-animation.gif";

const Home = () => {
  const linkedin = "https://www.linkedin.com/in/matheus-rocha-in/";
  const github = "https://github.com/imrochamatheus";

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
        <StackItem as={SlideFade} in={true} offsetX="-50%" transition="all 1s">
          <Image src={profile} w={{ base: 250, md: 300 }} />
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
                display="flex"
                textShadow={{
                  base: "2px 2px #ff0050, -2px -2px #00f2ea",
                  md: "4px 4px #ff0050, -4px -4px #00f2ea",
                  lg: "6px 6px #ff0050, -6px -6px #00f2ea",
                }}
                fontSize={{ base: "3xl", md: "4xl", lg: "6xl" }}
              >
                Matheus Rocha!
                <Typewriter
                  options={{
                    strings: [""],
                    autoStart: true,
                    loop: true,
                  }}
                />
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
            <StackItem pt={2}>
              <Flex gap={4}>
                <Box
                  as={motion.div}
                  onClick={() => window.open(github, "_blank")}
                  cursor="pointer"
                  whileHover={{
                    scale: 1.5,
                    rotate: 360,
                    color: "#00f2ea",
                  }}
                  whileTap={{
                    scale: 1.5,
                    rotate: 360,
                    color: "#00f2ea",
                  }}
                >
                  <Icon
                    as={BsGithub}
                    fontSize={24}
                    color="white.500"
                    rounded="full"
                  />
                </Box>
                <Box
                  as={motion.div}
                  onClick={() => window.open(linkedin, "_blank")}
                  cursor="pointer"
                  whileHover={{
                    scale: 1.5,
                    rotate: 360,
                    color: "#00f2ea",
                  }}
                  whileTap={{
                    scale: 1.5,
                    rotate: 360,
                    color: "#00f2ea",
                  }}
                >
                  <Icon
                    as={BsLinkedin}
                    fontSize={24}
                    color="white.500"
                    rounded="full"
                  />
                </Box>
              </Flex>
            </StackItem>
          </Stack>
        </StackItem>
      </Stack>
    </Flex>
  );
};

export default Home;
