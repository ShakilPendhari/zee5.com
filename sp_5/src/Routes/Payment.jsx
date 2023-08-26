import { Box, Flex } from "@chakra-ui/react";

const Payment = () => {
  return (
    <Flex
      // border="1px solid red"
      justifyContent="center"
      alignItems={{ base: "flex-start", sm: "flex-start", md: "center" }}
      height={{ base: "80vh", sm: "85vh", md: "90vh" }}
      width="100vw"
    >
      <Box
        width={{ base: "15rem", sm: "90%", md: "50%" }}
        height={{ base: "15rem", sm: "80%", md: "90%" }}
        border="2px solid green"
        borderRadius="15px"
      >
        Payment
      </Box>
    </Flex>
  );
};

export default Payment;
