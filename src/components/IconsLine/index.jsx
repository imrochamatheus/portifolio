import { Flex } from "@chakra-ui/react";
import { FaGithub } from "react-icons/fa";
import { FaBatteryFull } from "react-icons/fa";
import { FaFacebookMessenger } from "react-icons/fa";
import { FaGitlab } from "react-icons/fa";
import { FaPhp } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { FaBootstrap } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaWordpress } from "react-icons/fa";
import { FaVuejs } from "react-icons/fa";
import { FaNodeJs } from "react-icons/fa";
import { FaJs } from "react-icons/fa";
import { FaSass } from "react-icons/fa";
import { FaPython } from "react-icons/fa";
import { FaStackOverflow } from "react-icons/fa";
import { FaUbuntu } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { FaReact } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { FaLaravel } from "react-icons/fa";
import AnimatedIcon from "../../components/AnimatedIcon";

const IconsLine = () => {
  const icons = [
    FaGithub,
    FaBatteryFull,
    FaFacebookMessenger,
    FaGitlab,
    FaPhp,
    FaHtml5,
    FaAws,
    FaBootstrap,
    FaLinkedinIn,
    FaWordpress,
    FaVuejs,
    FaNodeJs,
    FaJs,
    FaSass,
    FaPython,
    FaStackOverflow,
    FaUbuntu,
    FaCss3Alt,
    FaReact,
    FaJava,
    FaLaravel,
    FaGithub,
    FaBatteryFull,
    FaFacebookMessenger,
    FaGitlab,
    FaPhp,
    FaHtml5,
    FaAws,
    FaBootstrap,
    FaLinkedinIn,
    FaWordpress,
    FaVuejs,
    FaNodeJs,
    FaJs,
    FaSass,
    FaPython,
    FaStackOverflow,
    FaUbuntu,
    FaCss3Alt,
    FaReact,
    FaJava,
    FaLaravel,
    FaGithub,
    FaBatteryFull,
    FaFacebookMessenger,
    FaGitlab,
    FaPhp,
    FaHtml5,
    FaAws,
    FaBootstrap,
    FaLinkedinIn,
    FaWordpress,
    FaVuejs,
    FaNodeJs,
    FaJs,
    FaSass,
    FaPython,
    FaStackOverflow,
    FaUbuntu,
    FaCss3Alt,
    FaReact,
    FaJava,
    FaLaravel,
  ];

  return (
    <Flex
      w="100%"
      position="relative"
      fontSize={"6xl"}
      transform="rotate(-30deg)"
      ml={-10}
      overflow="hidden"
    >
      <Flex>
        {icons.map((_, i) => (
          <AnimatedIcon
            reactIcon={icons[Math.floor(Math.random() * 20)]}
            key={i}
          />
        ))}
      </Flex>
    </Flex>
  );
};

export default IconsLine;
