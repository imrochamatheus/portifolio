import { Box, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";

const AnimatedIcon = ({ reactIcon }) => {
  return (
    <Box color="rgba(255,255,255,0.1)" as={motion.div} userSelect="none">
      <Icon
        as={reactIcon}
        transition="1s"
        p="0 5px"
        _hover={{
          color: "#0f0",
          transition: "0s",
          filter: "drop-shadow(-3px -3px 2px rgba(255, 255, 255, 0.3))",
        }}
      />
    </Box>
  );
};

export default AnimatedIcon;
