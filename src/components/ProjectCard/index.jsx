import {
  Badge,
  Button,
  Center,
  Flex,
  Heading,
  Stack,
  Text,
  Image,
  useColorModeValue,
  SlideFade,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useObserver } from "../../pages/About/observers";

const ProjectCard = ({
  link,
  title,
  description,
  tags,
  demo,
  code,
  img,
  i,
}) => {
  const cardRef = useRef(null);

  const { inViewport: cardViewport } = useObserver(cardRef);

  return (
    <Center
      py={6}
      as={SlideFade}
      ref={cardRef}
      {...(i % 2 ? { offsetX: "-50%" } : { offsetX: "50%" })}
      in={cardViewport}
      transition={`all 2s`}
    >
      <Stack
        borderRadius="lg"
        w={{ sm: "350px", md: "640px" }}
        direction={{ base: "column", md: i % 2 ? "row" : "row-reverse" }}
        bg={useColorModeValue("black", "gray.900")}
        boxShadow={"2xl"}
        padding={4}
      >
        <Flex flex={1} bg="blue.200">
          {link ? (
            <iframe src={link} width="100%" height="100%" title={title} />
          ) : (
            <Image src={img} alt={title} width="100%" height="100%" />
          )}
        </Flex>
        <Stack
          flex={1}
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          p={1}
          pt={2}
        >
          <Heading fontSize={"2xl"} fontFamily={"body"}>
            {title}
          </Heading>

          <Text
            textAlign={"center"}
            color={useColorModeValue("rgb(196, 196, 196)", "gray.400")}
            px={1}
            fontSize="sm"
          >
            {description}
          </Text>
          <Stack align={"center"} justify={"center"} direction={"row"} mt={6}>
            {tags &&
              tags.map((tag, i) => (
                <Badge
                  key={i}
                  px={2}
                  py={1}
                  bg="transparent"
                  color="rgb(196, 196, 196)"
                  textShadow="0.5px 0.5px #ff0050, -0.5px -0.5px #00f2ea"
                  fontWeight={"400"}
                  as={motion.div}
                  whileHover={{
                    scale: 1.4,
                  }}
                  whileTap={{
                    scale: 1.4,
                  }}
                >
                  {tag}
                </Badge>
              ))}
          </Stack>

          <Stack
            width={"100%"}
            mt={"2rem"}
            direction={"row"}
            padding={2}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              p={0}
              flex={1}
              transform="scale(0.8)"
              height="30px"
              fontSize={"sm"}
              rounded={"full"}
              variant="outline"
              bg={"transparent"}
              borderColor="#00f2ea"
              color={"white"}
              _hover={{
                transform: "scale(1)",
              }}
              _focus={{
                bg: "gray.200",
              }}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              onClick={() => window.open(code, "_blank")}
            >
              GitHub
            </Button>
            <Button
              flex={1}
              height="30px"
              fontSize={"sm"}
              color={"white"}
              rounded={"full"}
              variant="outline"
              bg={"transparent"}
              borderColor="#00f2ea"
              transform="scale(0.8)"
              p={0}
              boxShadow={
                "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
              }
              _hover={{
                transform: "scale(1)",
              }}
              onClick={() => window.open(demo, "_blank")}
            >
              Demo
            </Button>
          </Stack>
        </Stack>
      </Stack>
    </Center>
  );
};

export default ProjectCard;
