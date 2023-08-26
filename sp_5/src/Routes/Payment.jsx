import { Box, Flex, Heading } from "@chakra-ui/react";

const Payment = () => {
  return (
    <Flex
      // border="1px solid red"
     
      justifyContent="flex-start"
      alignItems={{ base: "center", sm: "center", md: "center" }}
      height={{ base: "80vh", sm: "85vh", md: "90vh" }}
      width="100vw"
      flexDir="column"
      gap="1.5rem"
    >
      <Heading as="h1" fontWeight="700" fontSize="1.75rem">Choose your Premium plan</Heading>
      <Box
        overflow="hidden"
        width={{ base: "15rem", sm: "90%", md: "60%" }}
        height={{ base: "15rem", sm: "80%", md: "90%" }}
        border="2px solid green"
        borderRadius="15px"
        position="relative"
      >
      <Box position="absolute" bottom="0" left="0" right="0" backgroundColor="pink" height="16%">Hello</Box>
      </Box>
    </Flex>
  );
};

export default Payment;
