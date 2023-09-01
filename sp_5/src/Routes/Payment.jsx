import { CloseIcon } from "@chakra-ui/icons";
import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import { AiOutlineCheck } from "react-icons/ai";

const object = [
  {
    id: 0,
    text1: "Premium content",
    text2: "Movies, Web Series, TV Shows, Downloads",
    text3: <AiOutlineCheck size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
    text6: "",
    text7: "",
  },
  {
    id: 1,
    text1: "Music",
    text2: "Unlimited Downloads",
    text3: <AiOutlineCheck size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
    text6: "",
    text7: "",
  },
  {
    id: 2,
    text1: "Before TV",
    text2: "",
    text3: <AiOutlineCheck size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
    text6: "",
    text7: "",
  },
  {
    id: 3,
    text1: "Live TV",
    text2: "",
    text3: <AiOutlineCheck size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
    text6: "",
    text7: "",
  },
  {
    id: 4,
    text1: "Ad-free",
    text2: "",
    text3: <AiOutlineCheck size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
    text6: "Except TV Shows",
    text7: "Except TV Shows",
  },
  {
    id: 5,
    text1: "Device",
    text2: "TV, Laptop",
    text3: <CloseIcon size="1.5rem" />,
    text4: <AiOutlineCheck size="1.5rem" />,
    text5: <AiOutlineCheck size="1.5rem" />,
  },
  {
    id: 6,
    text1: "No. of screens",
    text2: "",
    text3: "1",
    text4: "2",
    text5: "4",
  },
  {
    id: 7,
    text1: "Max video quality",
    text2: "",
    text3: "HD (720p)",
    text4: "FHD (1080p)",
    text5: "UHD (2160p)",
  },
  {
    id: 8,
    text1: "Max audio quality",
    text2: "",
    text3: "Stereo",
    text4: "Dolby 5.1",
    text5: "Dolby Atmos",
  },
];

const Payment = () => {
  return (
    <Flex
      // border="1px solid red"
      justifyContent="flex-start"
      alignItems={{ base: "center", sm: "center", md: "center" }}
      height={{ base: "80vh", sm: "85vh", md: "220vh" }}
      width="100vw"
      flexDir="column"
      gap="1.5rem"
    >
      <Heading as="h1" fontWeight="700" fontSize="1.75rem">
        Choose your Premium plan
      </Heading>
      <Box
        overflowY="scroll"
        className="paymentScroll"
        width={{ base: "15rem", sm: "90%", md: "60%" }}
        height={{ base: "15rem", sm: "80%", md: "30%" }}
        border="2px solid green"
        borderRadius="15px"
        p="0rem 0rem 7rem"
        position="relative"
      >
        {/* <Box position="relative" backgroundColor="#0F0617" height="16%"> */}
        <Flex
          background="black"
          justifyContent="center"
          alignItems="center"
          height="3rem"
          position="sticky"
          top="0"
          left="0"
          borderBottom="rgb(176, 175, 175)"
        >
          <Text flex="3"></Text>
          <Text flex="1">Mobile</Text>
          <Text flex="1">Premium HD</Text>
          <Text flex="1">Premium 4k</Text>
        </Flex>
        <Flex>
          <Flex
            flexDir="column"
            justifyContent="space-between"
            borderBottom="rgb(176, 175, 175)"
            // border="1px solid green"
            alignItems="flex-start"
            // p="2rem 1rem"
            // gap="1rem"
            flex="3"
          >
            {object &&
              object?.map((el) => {
                return (
                  <Flex
                    justifyContent="center"
                    alignItems="flex-start"
                    flex=""
                    flexDir="column"
                    borderBottom="1px solid rgb(176, 175, 175)"
                    width="100%"
                  >
                    <Text textAlign="left" fontWeight="400">
                      {el.text1}
                    </Text>
                    <Text
                      textAlign="left"
                      fontSize="0.85rem"
                      fontWeight="200"
                      color="grey"
                    >
                      {el.text2}
                    </Text>
                  </Flex>
                );
              })}
          </Flex>
          <Flex
            flex="1"
            flexDir="column"
            justifyContent="space-between"
            borderBottom="rgb(176, 175, 175)"
            // border="1px solid green"
            alignItems="flex-start"
            // p="2rem 1rem"
            gap="1rem"
          >
            {object &&
              object?.map((el) => {
                return (
                  <Flex
                    justifyContent="center"
                    alignItems="center"
                    flexDir="column"
                    borderBottom="1px solid rgb(176, 175, 175)"
                    width="100%"
                  >
                    <Text>{el.text3}</Text>
                  </Flex>
                );
              })}
          </Flex>
          <Flex
            flex="1"
            flexDir="column"
            justifyContent="space-between"
            // border="1px solid green"
            alignItems="flex-start"
            // p="2rem 1rem"
            gap="1rem"
          >
            {object &&
              object?.map((el) => {
                return (
                  <Flex
                    borderBottom="1px solid rgb(176, 175, 175)"
                    flexDir="column"
                    width="100%"
                  >
                    <Text>{el.text4}</Text>
                  </Flex>
                );
              })}
          </Flex>
          <Flex
            flex="1"
            flexDir="column"
            justifyContent="space-between"
            borderBottom="rgb(176, 175, 175)"
            // border="1px solid green"
            alignItems="flex-start"
            // p="2rem 1rem"
            gap="1rem"
          >
            {object &&
              object?.map((el) => {
                return (
                  <Flex
                    borderBottom="1px solid rgb(176, 175, 175)"
                    flexDir="column"
                    width="100%"
                  >
                    <Text>{el.text5}</Text>
                  </Flex>
                );
              })}
          </Flex>
        </Flex>
        <Box
          position="absolute"
          top="0"
          left="83%"
          height="100%"
          background="rgba(100,100,100,0.2)"
          width="18%"
        ></Box>
      </Box>
      {/* </Box> */}
      <Box></Box>
    </Flex>
  );
};

export default Payment;
