import {
  BreadcrumbItem,
  BreadcrumbLink,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { linkMotion, iconMotion } from "../animationsConfig";
import { useLocation } from "react-router-dom";

const Item = ({ label, url, icon }) => {
  const navLink = useRef(null);
  const location = useLocation();

  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    if (location.pathname === url) {
      return setIsActive(true);
    }
    setIsActive(false);
  }, [location.pathname, url]);

  return (
    <BreadcrumbItem
      as={motion.div}
      initial="rest"
      whileHover="hover"
      animate="rest"
      mx={6}
      variants={linkMotion}
    >
      <BreadcrumbLink
        as={Link}
        to={url}
        ref={navLink}
        rounded="md"
        _hover={{ color: "#00f2ea" }}
        style={{
          ...(isActive ? { color: "#00f2ea" } : ""),
        }}
      >
        <Stack
          align="center"
          direction={{ base: "column", md: "row" }}
          px={{ base: 1, md: 5 }}
        >
          <StackItem as={motion.div} variants={iconMotion}>
            <Icon as={icon} fontSize={24} color="white.500" rounded="full" />
          </StackItem>
          <StackItem>
            <Text fontFamily={"heading"} fontSize={{ base: "sm" }}>
              {label}{" "}
            </Text>
          </StackItem>
        </Stack>
      </BreadcrumbLink>
    </BreadcrumbItem>
  );
};

export default Item;
