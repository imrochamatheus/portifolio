import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import { Box } from "@chakra-ui/react";

const Router = () => {
  return (
    <Box minH="100vh" bg="black" color="rgb(196, 196, 196)">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
    </Box>
  );
};

export default Router;
