import { Flex, Box } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";

import { BsChevronDoubleUp } from "react-icons/bs";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";

import { projects } from "./projects";

const Projects = () => {
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
      pt={8}
      pb={24}
      scrollBehavior="smooth"
    >
      <Box
        id="top"
        direction={{ base: "column", md: "row" }}
        px={6}
        justify="space-between"
        alignItems="center"
        w="100%"
        maxW={{ base: "100%", md: "700px" }}
      >
        {projects.map(
          ({ link, title, description, tags, demo, code, img }, i) => (
            <ProjectCard
              key={i}
              {...{ link, title, description, tags, demo, code, img, i }}
            />
          )
        )}
      </Box>
      <Box
        as={motion.div}
        whileHover={{ scale: 1.5 }}
        whileTap={{
          scale: 0.8,
          borderRadius: "100%",
        }}
      >
        <Link href="#top">
          <Icon as={BsChevronDoubleUp} fontSize={24} my={1} color="#00f2ea" />
        </Link>
      </Box>
    </Flex>
  );
};

export default Projects;
