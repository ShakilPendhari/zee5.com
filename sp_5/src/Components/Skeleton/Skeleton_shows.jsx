import { Box, Grid, Heading } from "@chakra-ui/react";
import "./skeleton_pulse.css"

const SkeletonShow = () => {
  return (
    <Box ml="0.5rem">
      <Heading
        className="animate-pulse"
        height={{base:"1.4rem",sm:"1.8rem",md:"2.5rem"}}
        w={{base:"30%",sm:"35%",md:"26%"}}
        minWidth={{base:"10rem",sm:"15rem",md:"23rem"}}
        borderRadius={{base:"5px",sm:"5px",md:"10px"}}
        as="h2"
        m={{base:"2.7rem 0rem 1rem 0.5rem",sm:"2.7rem 0rem 1rem 0.5rem",md:"2.7rem 0rem 1rem 0.5rem"}}
      ></Heading>

      <Box ml="1rem">
        <Grid gap={{base:"1rem",sm:"1rem",md:"1rem"}} gridTemplateColumns="repeat(5,1fr)">
          {Array(5)
            .fill(1)
            .map((_, i) => (
              <Box
                key={i + 1}
                minWidth={{base:"4rem",sm:"10rem",md:"16rem"}}
                width={{base:"9rem",sm:"13rem",md:"16.5rem"}}
                height={{base:"5rem",sm:"8rem",md:"11rem"}}
                borderRadius="10px"
                className="animate-pulse"
              ></Box>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SkeletonShow;
