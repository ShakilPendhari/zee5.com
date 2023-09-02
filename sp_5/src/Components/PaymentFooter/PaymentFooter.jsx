import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";

const PaymentFooter = () => {
  return (
    <Flex
    //   border="1px solid green"
    borderTop="1px solid rgba(255, 255, 255, 0.05);"
      flexDir={{ base: "column-reverse", md: "row" }}
      height={{base:"5rem",md:"2rem"}}
      alignItems={{ base: "center", md: "flex-end" }}
      justifyContent={{ base: "space-evenly", md: "space-between" }}
      mb={{base:"7rem",md:"1rem"}}
      mt="0.5rem"
    >
      <Box fontSize={{base:"0.65rem",md:"0.75rem"}} color="grey">
        Copyright © 2023 Zee Entertainment Enterprises Ltd. All rights reserved.
      </Box>
      <Flex gap="1rem" fontSize={{base:"0.75rem",md:"0.85rem"}} color="grey">
        <Text>About Us</Text>
        <Text>|</Text>
        <Text>Help Center</Text>
        <Text>|</Text>
        <Text>Privacy Policy</Text>
        <Text>|</Text>
        <Text>Terms of Use</Text>
        <Text>|</Text>
        <Text>Consent Settings</Text>
      </Flex>
    </Flex>
  );
};

export default PaymentFooter;
