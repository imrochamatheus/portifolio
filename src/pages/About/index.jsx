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
  Link,
  ScaleFade,
} from "@chakra-ui/react";
import { useMemo, useRef } from "react";
import Nav from "../../components/Nav";
import rock from "../../assets/img/rock.png";
import profilePhoto from "../../assets/img/profile.png";
import questionImg from "../../assets/img/int-icon.png";
import { container, item } from "./animationConfig";

import { BsChevronDoubleDown } from "react-icons/bs";
import { SlideFade } from "@chakra-ui/react";
import { skills } from "./skills";
import { motion } from "framer-motion";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

import kenzie from "../../assets/img/certificadoKenzie.jpg";
import certf_1 from "../../assets/img/certificado_1.png";
import certf_2 from "../../assets/img/certificado_2.png";
import certf_3 from "../../assets/img/certificado_3.png";

// import { Link, animateScroll as scroll } from "react-scroll";

import { useObserver } from "./observers";

const About = () => {
  const skillsRef = useRef(null);
  const aboutRef = useRef(null);
  const hobbiesRef = useRef(null);
  const presentationRef = useRef(null);

  const certifications = useMemo(() => {
    return [kenzie, certf_1, certf_2, certf_3];
  }, []);

  const { inViewport: presentationViewPort } = useObserver(presentationRef);
  const { inViewport: aboutViewPort } = useObserver(aboutRef);
  const { inViewport: hobbiesViewPort } = useObserver(hobbiesRef);
  const { inViewport: skillsViewPort } = useObserver(skillsRef);

  return (
    <Flex
      h="100vh"
      overflowY="auto"
      w="100%"
      overflowX="hidden"
      direction="column"
      align="center"
      position="relative"
      gap={5}
      py={24}
      scrollBehavior="smooth"
    >
      <Stack
        direction={{ base: "column", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <StackItem
          as={SlideFade}
          in={presentationViewPort}
          offsetX="-50%"
          transition="all 1s"
        >
          <Image src={profilePhoto} w={300} ref={presentationRef} />
        </StackItem>
        <Divider
          orientation="vertical"
          bgColor="white"
          h="100px"
          display={{ base: "none", md: "block" }}
        />
        <StackItem
          maxW="350px"
          as={SlideFade}
          in={presentationViewPort}
          offsetY="-50%"
          transition="all 1s"
        >
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
        <Link href="#about">
          <Icon as={BsChevronDoubleDown} fontSize={24} my={1} color="#00f2ea" />
        </Link>
      </Box>
      <Stack
        id="about"
        direction={{ base: "column-reverse", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <StackItem
          maxW="350px"
          as={ScaleFade}
          initialScale={0.6}
          in={aboutViewPort}
          transition="all 1s"
        >
          <Text fontSize={{ base: "xs", md: "sm" }} mb={2}>
            Sou Técnico em Desenvolvimento de Sistemas pelo Senai-BA e
            Desenvolvedor Front End pela Kenzie Academy Brasil, onde atualmente
            presto serviços como monitor de ensino, ou Peer Coach, como somos
            chamados.
          </Text>
          <Text fontSize={{ base: "xs", md: "sm" }}>
            Atualmente, estudo desenvolvimento web full stack também na Kenzie,
            e estou sempre em busca de conhecimento extra onde quer que seja.
            Então já sabe: Aprendeu uma coisa legal? Me ensina também!
          </Text>
        </StackItem>
        <StackItem
          textAlign="center"
          as={SlideFade}
          in={aboutViewPort}
          offsetX="50%"
          transition="all 1s"
        >
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            textShadow="2px 2px #ff0050, -2px -2px #00f2ea"
            mb={3}
          >
            O que faço?
          </Heading>
          <Image
            src={questionImg}
            // w={{ base: 250, md: 300 }}
            w={300}
            ref={aboutRef}
            boxShadow="1px 1px 5px #00f2ea"
            rounded="full"
          />
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
        <Link href="#hobbies">
          <Icon as={BsChevronDoubleDown} fontSize={24} my={1} color="#00f2ea" />
        </Link>
      </Box>
      <Stack
        id="hobbies"
        direction={{ base: "column", md: "row" }}
        justify="center"
        alignItems="center"
        spacing={6}
      >
        <StackItem
          textAlign="center"
          as={SlideFade}
          in={hobbiesViewPort}
          offsetX="-50%"
          transition="all 1s"
        >
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            textShadow="2px 2px #ff0050, -2px -2px #00f2ea"
            id="hobbies"
          >
            Let´s Rock
          </Heading>
          <Image src={rock} w={300} ref={hobbiesRef} />
        </StackItem>
        <StackItem
          maxW="350px"
          as={SlideFade}
          in={hobbiesViewPort}
          offsetX="50%"
          transition="all 1s"
        >
          <Text textShadow="1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea" mb={2}>
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
      </Stack>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.5 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <Link href="#skills">
          <Icon as={BsChevronDoubleDown} fontSize={24} my={1} color="#00f2ea" />
        </Link>
      </Box>

      <Stack spacing={4}>
        <StackItem>
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            textShadow="2px 2px #ff0050, -2px -2px #00f2ea"
            textAlign="center"
          >
            Skills
          </Heading>
        </StackItem>
        <StackItem>
          <Stack
            id="skills"
            ref={skillsRef}
            spacing={{ base: 2, md: 6 }}
            direction="row"
            textAlign="center"
            as={motion.ul}
            variants={container}
            initial="hidden"
            animate={skillsViewPort ? "visible" : ""}
          >
            {skills.map(({ label, icon }, i) => (
              <StackItem
                key={i}
                as={motion.li}
                variants={item}
                whileHover={{
                  color: "#00f2ea",
                  scale: 1.4,
                  textShadow: "1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea",
                }}
                whileTap={{
                  color: "#00f2ea",
                  scale: 1.4,
                  textShadow: "1.5px 1.5px #ff0050, -1.5px -1.5px #00f2ea",
                }}
              >
                <Icon
                  as={icon}
                  fontSize={{ base: 36, md: 28 }}
                  rounded="full"
                />

                <Text display={{ base: "none", md: "block" }}>{label}</Text>
              </StackItem>
            ))}
          </Stack>
        </StackItem>
      </Stack>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.5 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
        mt={6}
      >
        <Link href="#qualifications">
          <Icon as={BsChevronDoubleDown} fontSize={24} my={1} color="#00f2ea" />
        </Link>
      </Box>

      <Stack maxW={{ base: "300px", md: "650px" }} spacing={12}>
        <StackItem>
          <Heading
            fontSize={{ base: "3xl", lg: "4xl" }}
            textShadow="2px 2px #ff0050, -2px -2px #00f2ea"
            textAlign="center"
          >
            Qualificações
          </Heading>
        </StackItem>
        <StackItem>
          <Carousel autoPlay infiniteLoop={true} id="qualifications">
            {certifications.map((certfImg, i) => (
              <div key={i}>
                <img src={certfImg} alt="certification" />
              </div>
            ))}
          </Carousel>
        </StackItem>
      </Stack>

      <Nav />
    </Flex>
  );
};

export default About;
