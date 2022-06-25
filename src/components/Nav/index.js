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
      w="100%"
      color="whiteAlpha.700"
      borderTop="1px solid"
      borderColor="whiteAlpha.400"
    >
      <Breadcrumb fontWeight="medium" fontSize="sm" spacing={8} separator="">
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
