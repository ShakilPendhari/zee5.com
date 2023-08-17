import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import "./skeleton_pulse.css"

const SkeletonMovies = () => {
  return (
    <Box ml="0.5rem">
      <Heading
        className="animate-pulse"
        height="2.5rem"
        w="30%"
        borderRadius="10px"
        as="h2"
        m="2.7rem 0rem 0rem 0.7rem"
        mb="1rem"
      ></Heading>

      <Box ml="1rem">
        <Grid gap="1rem" gridTemplateColumns="repeat(6,1fr)">
          {Array(6)
            .fill(1)
            .map((_, i) => (
              <Box
                key={i + 1}
                minWidth={{base:"6rem",sm:"14.5rem",md:"16rem"}}
                width={{base:"6rem",sm:"14.5rem",md:"16rem"}}
                height={{base:"8.5rem",sm:"16rem",md:"24.5rem"}}
                borderRadius="10px"
                className="animate-pulse"
              ></Box>
            ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default SkeletonMovies;
