import { Box, Heading } from "@chakra-ui/react";
import "./skeleton_pulse.css"

const SkeletonShow = () => {
  return (
    <Box ml="0.5rem">
      <Heading
        className="animate-pulse"
        height="2.5rem"
        w="40%"
        borderRadius="10px"
        as="h2"
        m="2.7rem 0rem 0rem 0rem"
        mb="1rem"
      ></Heading>

      <Box ml="1rem">
        <Box display="flex" gap="1rem">
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <Box
                key={i + 1}
                width="20rem"
                height="11rem"
                borderRadius="10px"
                className="animate-pulse"
              ></Box>
            ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SkeletonShow;
