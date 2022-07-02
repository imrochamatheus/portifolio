import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Stack,
  Textarea,
  Tooltip,
  useClipboard,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React from "react";
import AnimatedStars from "../../components/AnimatedStars";

import { useRef } from "react";
import { BsGithub, BsLinkedin, BsPerson } from "react-icons/bs";
import { MdEmail, MdOutlineEmail } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import { IoLogoWhatsapp } from "react-icons/io";
import { toast } from "react-toastify";

import emailjs from "emailjs-com";

export default function Contact() {
  const { hasCopied, onCopy } = useClipboard("im.rochamatheus@gmail.com");
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          toast.success("Mensagem enviada! Obrigado pelo contato.");
        },
        (error) => {
          toast.error(error.message);
        }
      );

    e.target.reset();
  };

  return (
    <AnimatePresence>
      <Box
        as={motion.div}
        initial={{ marginLeft: "100%" }}
        animate={{ marginLeft: 0 }}
        exit={{ marginLeft: "100%" }}
      >
        <Flex
          bg="black"
          align="center"
          justify="center"
          id="contact"
          pb={{ base: 24, md: 0 }}
        >
          <AnimatedStars />
          <Box
            borderRadius="lg"
            m={{ base: 5, md: 16, lg: 10 }}
            p={{ base: 5, lg: 16 }}
          >
            <Box>
              <VStack spacing={{ base: 4, md: 8, lg: 10 }}>
                <Heading
                  fontSize={{
                    base: "xl",
                    md: "3xl",
                  }}
                >
                  Deixe sua mensagem!
                </Heading>

                <Stack
                  spacing={{ base: 4, md: 8, lg: 20 }}
                  direction={{ base: "column", md: "row" }}
                >
                  <Stack
                    align="center"
                    justify="space-around"
                    direction={{ base: "row", md: "column" }}
                  >
                    <Tooltip
                      label={hasCopied ? "Email copiado!" : "Copiar email"}
                      closeOnClick={false}
                      hasArrow
                    >
                      <IconButton
                        aria-label="email"
                        variant="ghost"
                        size="lg"
                        fontSize="3xl"
                        color="rgb(196, 196, 196)"
                        icon={<MdEmail />}
                        _hover={{
                          color: "#00f2ea",
                          transform: "scale(1.2)",
                        }}
                        onClick={onCopy}
                        isRound
                      />
                    </Tooltip>

                    <Tooltip label={"Visitar perfil no GitHub"}>
                      <Link href="#">
                        <IconButton
                          aria-label="github"
                          variant="ghost"
                          size="lg"
                          fontSize="3xl"
                          color="rgb(196, 196, 196)"
                          icon={<BsGithub />}
                          _hover={{
                            color: "#00f2ea",
                            transform: "scale(1.2)",
                          }}
                          isRound
                          onClick={() =>
                            window.open(
                              "https://github.com/imrochamatheus",
                              "_blank"
                            )
                          }
                        />
                      </Link>
                    </Tooltip>

                    <Tooltip label={"Copiar email"}>
                      <Link href="#">
                        <IconButton
                          aria-label="twitter"
                          variant="ghost"
                          size="lg"
                          color="rgb(196, 196, 196)"
                          icon={<IoLogoWhatsapp size="28px" />}
                          _hover={{
                            color: "#00f2ea",
                            transform: "scale(1.2)",
                          }}
                          isRound
                          onClick={() =>
                            window.open(
                              "https://api.whatsapp.com/send?phone=5571988119884",
                              "_blank"
                            )
                          }
                        />
                      </Link>
                    </Tooltip>

                    <Tooltip label={"Visitar perfil no Linkedin"}>
                      <Link href="#">
                        <IconButton
                          aria-label="linkedin"
                          variant="ghost"
                          size="lg"
                          icon={<BsLinkedin size="28px" />}
                          _hover={{
                            color: "#00f2ea",
                            transform: "scale(1.2)",
                          }}
                          isRound
                          onClick={() =>
                            window.open(
                              "https://www.linkedin.com/in/matheus-rocha-in/",
                              "_blank"
                            )
                          }
                        />
                      </Link>
                    </Tooltip>
                  </Stack>

                  <Box
                    bg={useColorModeValue("white", "gray.700")}
                    borderRadius="lg"
                    p={8}
                    color={useColorModeValue("gray.700", "whiteAlpha.900")}
                    shadow="base"
                  >
                    <form onSubmit={sendEmail} ref={form}>
                      <VStack spacing={5}>
                        <FormControl isRequired>
                          <FormLabel>Name</FormLabel>

                          <InputGroup>
                            <InputLeftElement children={<BsPerson />} />
                            <Input
                              type="text"
                              name="name"
                              placeholder="Seu nome"
                              _focus={{
                                borderColor: "white",
                              }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Email</FormLabel>

                          <InputGroup>
                            <InputLeftElement children={<MdOutlineEmail />} />
                            <Input
                              type="email"
                              name="email"
                              placeholder="Seu Email"
                              _focus={{
                                borderColor: "white",
                              }}
                            />
                          </InputGroup>
                        </FormControl>

                        <FormControl isRequired>
                          <FormLabel>Message</FormLabel>

                          <Textarea
                            name="message"
                            placeholder="Mensagem..."
                            rows={6}
                            resize="none"
                            _focus={{
                              borderColor: "white",
                            }}
                          />
                        </FormControl>

                        <Button
                          type="submit"
                          colorScheme="blue"
                          bg="blue.400"
                          color="white"
                          _hover={{
                            bg: "blue.500",
                          }}
                        >
                          Enviar
                        </Button>
                      </VStack>
                    </form>
                  </Box>
                </Stack>
              </VStack>
            </Box>
          </Box>
        </Flex>
      </Box>
    </AnimatePresence>
  );
}
