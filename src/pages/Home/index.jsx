import {
  Flex,
  Heading,
  SlideFade,
  Stack,
  StackItem,
  Box,
  Slide,
} from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

import profile from "../../assets/img/home-animation-removed.gif";
import IconsBackground from "../../components/IconsBackground";
import { paths } from "../../assets/utils";
import { useLocation } from "react-router-dom";

const Home = () => {
  const {
    pathname,
    state: { prevPath },
  } = useLocation();

  return (
    <Box
      as={Slide}
      in={true}
      direction={paths[pathname] < paths[prevPath] ? "left" : "right"}
    >
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
          spacing={5}
          display="flex"
          align="center"
        >
          <IconsBackground />
          <StackItem
            as={SlideFade}
            in={true}
            offsetX="-50%"
            transition="all 1s"
          >
            <Image src={profile} w={{ base: 250, md: 300 }} />
          </StackItem>

          <StackItem>
            <Stack spacing={1}>
              <StackItem display="flex" alignItems="flex-end">
                <Heading
                  position="relative"
                  zIndex="999"
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
                  position="relative"
                  zIndex="999"
                >
                  eu sou o
                </Heading>
              </StackItem>

              <StackItem>
                <Heading
                  position="relative"
                  zIndex="999"
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
                  position="relative"
                  zIndex="999"
                  fontSize={{ base: "md", md: "3xl" }}
                  fontWeight={300}
                  color="whiteAlpha.600"
                >
                  {"<dev/>"}
                </Heading>
              </StackItem>

              <StackItem>
                <Heading
                  fontSize={{ base: "sm", md: "xl" }}
                  fontWeight={300}
                  position="relative"
                  zIndex="999"
                >
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
    </Box>
  );
};

export default Home;
