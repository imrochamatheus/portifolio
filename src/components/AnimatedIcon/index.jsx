import { Box } from "@chakra-ui/react";
import { useState } from "react";
import Lottie from "react-lottie";

const AnimatedIcon = ({ h, w, animationData, color }) => {
  const [stoped, setStoped] = useState(true);

  const changeStoppedState = () => setStoped(false);
  const setTrue = () => setStoped(true);

  const defaultOptions = {
    loop: true,
    autoplay: false,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <Box mt={-2} onMouseOver={changeStoppedState} onMouseLeave={setTrue}>
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
