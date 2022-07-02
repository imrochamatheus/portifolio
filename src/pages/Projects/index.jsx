import { Box, Slide } from "@chakra-ui/react";
import ProjectCard from "../../components/ProjectCard";
import Astro from "../../components/Astro";

import { BsChevronDoubleUp } from "react-icons/bs";
import AnimatedStars from "../../components/AnimatedStars";
import { motion } from "framer-motion";
import { Link } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/react";
import { useRef } from "react";
import { useLocation } from "react-router-dom";
import { projects } from "./projects";
import { paths } from "../../assets/utils";

const Projects = () => {
  const constraintsRef = useRef(null);

  const {
    pathname,
    state: { prevPath },
  } = useLocation();

  return (
    <Box
      as={Slide}
      in={true}
      direction={paths[pathname] < paths[prevPath] ? "left" : "right"}
    >
      <Box
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
        as={motion.div}
        ref={constraintsRef}
      >
        <Box
          position="relative"
          id="top"
          direction={{ base: "column", md: "row" }}
          px={6}
          justify="space-between"
          alignItems="center"
          w="100%"
          maxW={{ base: "100%", md: "700px" }}
          initial="hidden"
          animate="visible"
        >
          <Astro wrapper={constraintsRef} />
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
          position="relative"
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
        <AnimatedStars />
      </Box>
    </Box>
  );
};

export default Projects;
