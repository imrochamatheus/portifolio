import { Box } from "@chakra-ui/react";
import Lottie from "react-lottie";

const AnimatedIcon = ({ h, w, animationData, stoped, color }) => {
  const defaultOptions = {
    loop: false,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box mt={-2}>
      <Lottie
        options={defaultOptions}
        height={h}
        width={w}
        isStopped={stoped}
        isPaused={false}
      />
    </Box>
  );
};

export default AnimatedIcon;
