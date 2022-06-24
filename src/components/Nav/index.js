import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Flex,
  Stack,
  StackItem,
  Text,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { sections } from "./sections";
import { Icon } from "@chakra-ui/react";

const Nav = () => {
  return (
    <Flex
      py={4}
      justify="center"
      position="absolute"
      bottom={0}
      color="rgb(196, 196, 196)"
    >
      <Breadcrumb fontWeight="medium" fontSize="sm" spacing={5} separator="">
        {sections.map(({ label, url, icon }, i) => (
          <BreadcrumbItem key={i}>
            <BreadcrumbLink as={Link} to={url} _hover={{ color: "purple.400" }}>
              <Stack align="center" direction={{ base: "column", md: "row" }}>
                <StackItem>
                  <Icon as={icon} fontSize={24} />
                </StackItem>
                <StackItem>
                  <Text
                    fontFamily={"heading"}
                    fontSize={{ base: "sm", md: "md" }}
                  >
                    {label}{" "}
                  </Text>
                </StackItem>
              </Stack>
            </BreadcrumbLink>
          </BreadcrumbItem>
        ))}
      </Breadcrumb>
    </Flex>
  );
};

export default Nav;
