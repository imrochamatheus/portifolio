import {
  Text,
  Flex,
  Heading,
  Stack,
  StackItem,
  Image,
  Divider,
  Icon,
  Box,
} from "@chakra-ui/react";
import Nav from "../../components/Nav";
import profilePhoto from "../../assets/img/profile.png";
import rock from "../../assets/img/rock.png";
import { BsChevronDoubleDown } from "react-icons/bs";
import { motion } from "framer-motion";
import { SlideFade } from "@chakra-ui/react";

const About = () => {
  return (
    <Flex
      minH="100vh"
      w="100%"
      direction="column"
      justify="center"
      align="center"
      position="relative"
      gap={5}
      pb={24}
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <StackItem as={SlideFade} in={true} offsetX="-50%" transition="all 2s">
          <Image src={profilePhoto} w={300} />
        </StackItem>
        <Divider
          orientation="vertical"
          bgColor="white"
          h="100px"
          display={{ base: "none", md: "block" }}
        />
        <StackItem maxW="350px">
          <Text
            textShadow="1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea"
            mt={{ base: 2, md: -24 }}
          >
            Sobre mim
          </Text>
          <Heading fontSize={{ base: "3xl", lg: "4xl" }}>Matheus Rocha</Heading>
          <Text mb={2} fontSize={{ base: "sm", md: "md" }}>
            Apaixonado por resolver problemas de forma criativa!
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Aspirante a muitas coisas, encontrei na tecnologia uma maneira de
            estar sempre aprendendo e evoluindo.
          </Text>
        </StackItem>
      </Stack>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.5 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <Icon as={BsChevronDoubleDown} fontSize={24} my={1} color="#00f2ea" />
      </Box>
      <Stack
        direction={{ base: "column-reverse", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <StackItem maxW="350px">
          <Text
            textShadow="1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea"
            mt={{ base: 0, md: 24 }}
            mb={2}
          >
            Hobbies
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }} mb={2}>
            Ainda na adolescência, despertei um interesse muito grande pela
            música, em especial por instrumentos de corda. Então, nas horas
            vagas, costumo praticar e tocar com alguns amigos.
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Também me aventuro num joguinho "pouco conhecido", o League Of
            Legends, ou, para os mais íntimos, lolzinho.
          </Text>
        </StackItem>

        <StackItem
          textAlign="center"
          as={SlideFade}
          in={true}
          offsetX="50%"
          transition="all 2s"
        >
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            textShadow="2px 2px #ff0050, -2px -2px #00f2ea"
          >
            Let´s Rock
          </Heading>
          <Image src={rock} w={300} />
        </StackItem>
      </Stack>
      <Nav />
    </Flex>
  );
};

export default About;
