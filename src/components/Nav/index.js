import { Breadcrumb, Flex } from "@chakra-ui/react";
import { sections } from "./sections";
import { AnimatePresence } from "framer-motion";

import Item from "./Item";

const Nav = () => {
  return (
    <AnimatePresence>
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
            <Item {...{ label, url, icon }} key={i} />
          ))}
        </Breadcrumb>
      </Flex>
    </AnimatePresence>
  );
};

export default Nav;
