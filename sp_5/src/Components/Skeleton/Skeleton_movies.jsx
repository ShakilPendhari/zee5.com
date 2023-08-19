import { Box, Grid, Heading } from "@chakra-ui/react";
import React from "react";
import "./skeleton_pulse.css"

const SkeletonMovies = () => {
  return (
    <Box ml="0.5rem">
      <Heading
        className="animate-pulse"
        height={{base:"1.4rem",sm:"2rem",md:"2.5rem"}}
        w={{base:"26%",sm:"37%",md:"30%"}}
        minWidth={{base:"7.5rem",sm:"13.65rem",md:"17.7rem"}}
        borderRadius={{base:"7px",sm:"9px",md:"10px"}}
        as="h2"
        m={{base:"2.7rem 0rem 0rem 0.8rem",sm:"2.7rem 0rem 0rem 0.7rem",md:"2.7rem 0rem 0rem 0.7rem"}}
        mb={{base:"1rem",sm:"1rem",md:"1rem"}}
      ></Heading>

      <Box ml="1rem">
        <Grid gap="1rem" gridTemplateColumns="repeat(6,1fr)">
          {Array(6)
            .fill(1)
            .map((_, i) => (
              <Box
                key={i + 1}
                // minWidth={{base:"4rem",sm:"10rem",md:"16rem"}}
                // width={{base:"6.2rem",sm:"11.5rem",md:"16rem"}}
                // height={{base:"8.5rem",sm:"16rem",md:"24.5rem"}}
                width={{ base: "30vw", sm: "30vw", md: "16rem" }}
                minWidth={{ base: "7.5rem", sm: "11.5rem", md: "16rem" }}
               
                height={{ base: "8.7rem", sm: "16rem", md: "25rem" }}
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
