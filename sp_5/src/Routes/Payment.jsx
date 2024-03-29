import {
  CloseIcon,
  CheckIcon,
  ChevronRightIcon,
  ChevronUpIcon,
} from "@chakra-ui/icons";
import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";
import style from "./../style/MainPages/Payment.module.css"

const object = [
  {
    id: 0,
    text1: "Premium content",
    text2: "Movies, Web Series, TV Shows, Downloads",
    text3: <CheckIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "",
    text7: "",
    checkIcon: true,
    closeIcon: false,
  },
  {
    id: 1,
    text1: "Music",
    text2: "Unlimited Downloads",
    text3: <CheckIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "",
    text7: "",
    checkIcon: true,
    closeIcon: false,
  },
  {
    id: 2,
    text1: "Before TV",
    text2: "",
    text3: <CheckIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "",
    text7: "",
    checkIcon: true,
    closeIcon: false,
  },
  {
    id: 3,
    text1: "Live TV",
    text2: "",
    text3: <CheckIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "",
    text7: "",
    checkIcon: true,
    closeIcon: false,
  },
  {
    id: 4,
    text1: "Ad-free",
    text2: "",
    text3: <CheckIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "Except TV Shows",
    text7: "Except TV Shows",
    checkIcon: true,
    closeIcon: false,
  },
  {
    id: 5,
    text1: "Device",
    text2: "TV, Laptop",
    text3: <CloseIcon />,
    text4: <CheckIcon />,
    text5: <CheckIcon />,
    text6: "",
    text7: "",
    checkIcon: true,
    closeIcon: true,
  },
  {
    id: 6,
    text1: "No. of screens",
    text2: "",
    text3: "1",
    text4: "2",
    text5: "4",
    text6: "",
    text7: "",
    checkIcon: false,
    closeIcon: false,
  },
  {
    id: 7,
    text1: "Max video quality",
    text2: "",
    text3: "HD (720p)",
    text4: "FHD (1080p)",
    text5: "UHD (2160p)",
    text6: "",
    text7: "",
    checkIcon: false,
    closeIcon: false,
  },
  {
    id: 8,
    text1: "Max audio quality",
    text2: "",
    text3: "Stereo",
    text4: "Dolby 5.1",
    text5: "Dolby Atmos",
    text6: "",
    text7: "",
    checkIcon: false,
    closeIcon: false,
  },
];

let plans = [
  {
    id: 1,
    quality: "Mobile",
    actualPrice: "₹0",
    price: "₹499",
    duration: "12 months",
    discount: "0%",
    sug: "",
  },
  {
    id: 2,
    quality: "Premium HD",
    actualPrice: "₹999",
    price: "₹699",
    duration: "12 months",
    discount: "30%",
    sug: "Suggested",
  },
  {
    id: 3,
    quality: "Premium 4k",
    actualPrice: "₹1999",
    price: "₹1499",
    duration: "12 months",
    discount: "25%",
    sug: "",
  },
];

let boxShadow = {
  Mobile: false,
  "Premium HD": true,
  "Premium 4k": false,
};
let boxShadowDefault = {
  Mobile: false,
  "Premium HD": false,
  "Premium 4k": false,
};

const Payment = () => {
  const [obj, setObj] = useState(boxShadow);
  const [cardPlan, setCardPlan] = useState(plans);
  const [ isPayment, setIsPayment ] = useState(false);

  const handleClick = (key) => {
    if (obj[key]) {
      return;
    }
    setObj({ ...boxShadowDefault, [key]: !obj[key] });
  };

  const handlePay = ()=>{
    setIsPayment(true);
  }
  

  if (isPayment) {
    return (
      <Alert
        status="success"
        variant="subtle"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        textAlign="center"
        bgColor="green.700"
        width={{ base: "15rem", sm: "90%", md: "60%" }}
        margin="auto"
        height="80vh"
      >
        <AlertIcon boxSize="40px" mr={0} />
        <AlertTitle mt={4} mb={1} fontSize="lg">
          Payment Successful!
        </AlertTitle>
        <AlertDescription maxWidth="sm">
          Congratulations for have a premium plane
        </AlertDescription>
      </Alert>
    );
  }

  return (
    <Flex
      justifyContent="flex-start"
      alignItems={{ base: "center", sm: "center", md: "center" }}
      // height={{ base: "100%", sm: "100%", md: "64rem" }}
      // height="max-content"
      width="100vw"
      flexDir="column"
      gap="1.5rem"
      fontSize={{base:"0.6rem",sm:"0.8rem",md:"1rem"}}
    >
      <Heading as="h1" fontWeight="700" fontSize="1.75em">
        Choose your Premium plan
      </Heading>
      <Box
        width={{ base: "100%", sm: "100%", md: "60%" }}
        className={style.plan}
        height={{ base: "28rem", sm: "28rem", md: "45rem" }}
        backgroundColor="rgba(50,50,50,0.1)"
        borderRadius="20px"
        // pt="1rem"
        position="relative"
        p="1rem 2%"
        overflow="hidden"
        // zIndex="-1"
      >
        <Box
          overflowY="scroll"
          className="paymentScroll"
          width="100%"
          height={{ base: "50%", sm: "47%", md: "45%" }}
          // border="2px solid green"
          borderRadius="1em"
          // p="0rem 3%"
          position="relative"
          scrollBehavior="smooth"
        >
          <Flex borderBottom="0.5px solid grey" zIndex="8">
            <Flex flex="3" flexDir="column">
              <Text flex="1" pt="1rem"></Text>
              <Flex
                flexDir="column"
                justifyContent="flex-start"
                gap="1rem"
                zIndex="9"
                flex="1"
              >
                {object &&
                  object.map((el, i) => (
                    <Flex
                      key={i}
                      // alignItems="center"
                      height="3rem"
                      borderBottom={
                        i !== object.length - 1 ? "0.5px solid grey" : ""
                      }
                    >
                      <Flex flex="1" flexDir="column">
                        <Text textAlign="left" fontSize="1em" fontWeight="600">
                          {el.text1}
                        </Text>
                        <Text textAlign="left" fontSize="0.85em" color="grey">
                          {el.text2}
                        </Text>
                      </Flex>
                    </Flex>
                  ))}
              </Flex>
            </Flex>

            <Flex
              background={obj.Mobile ? "#2c2136" : ""}
              color={obj.Mobile ? "rgb(193, 170, 255)" : "#828282"}
              borderRadius="0.95em"
              flex="1"
              flexDir="column"
            >
              <Text flex="1" fontWeight="700" pt="1rem">
                Mobile
              </Text>
              <Flex
                justifyContent="center"
                flexDir="column"
                flex="1"
                gap="1rem"
                transition="background 0.2s ease-in"
                zIndex="9"
              >
                {object &&
                  object.map((el, i) => (
                    <Flex
                      key={i}
                      // alignItems="center"
                      height="3rem"
                      borderBottom={
                        obj.Mobile || i === object.length - 1
                          ? ""
                          : "0.5px solid grey"
                      }
                    >
                      <Flex
                        flex="1"
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                      >
                        {el.closeIcon ? (
                          <Text fontSize="1em">{el.text3}</Text>
                        ) : el.checkIcon ? (
                          <Text fontSize="1.2em">{el.text3}</Text>
                        ) : (
                          <Text fontSize="1em">{el.text3}</Text>
                        )}

                        <Text fontSize="0.85em">{el.text6}</Text>
                      </Flex>
                    </Flex>
                  ))}
              </Flex>
            </Flex>

            <Flex
              background={obj["Premium HD"] ? "#2c2136" : ""}
              color={obj["Premium HD"] ? "rgb(193, 170, 255)" : "#828282"}
              borderRadius="1em"
              flexDir="column"
              flex="1"
              gap="1rem"
              transition="background 0.2s ease-in"
              zIndex="9"
            >
              <Text fontWeight="700" pt="1rem">
                Premium HD
              </Text>
              {object &&
                object.map((el, i) => (
                  <Flex
                    key={i}
                    // alignItems="center"
                    height="3rem"
                    borderBottom={
                      obj["Premium HD"] || i === object.length - 1
                        ? ""
                        : "0.5px solid grey"
                    }
                  >
                    <Flex
                      flex="1"
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {el.checkIcon ? (
                        <Text fontSize="1.2em">{el.text4}</Text>
                      ) : (
                        <Text fontSize="1em">{el.text4}</Text>
                      )}
                      <Text fontSize="0.85em">{el.text6}</Text>
                    </Flex>
                  </Flex>
                ))}
            </Flex>

            <Flex
              background={obj["Premium 4k"] ? "#2c2136" : ""}
              color={obj["Premium 4k"] ? "rgb(193, 170, 255)" : "#828282"}
              borderRadius="1em"
              justifyContent="center"
              flexDir="column"
              flex="1"
              gap="1rem"
              transition="background 0.2s ease-in"
              zIndex="9"
            >
              <Text fontWeight="700" pt="1rem">
                Premium 4k
              </Text>
              {object &&
                object.map((el, i) => (
                  <Flex
                    key={i}
                    // alignItems="center"
                    height="3rem"
                    borderBottom={
                      obj["Premium 4k"] || i === object.length - 1
                        ? ""
                        : "1px solid grey"
                    }
                  >
                    <Flex
                      flex="1"
                      flexDir="column"
                      justifyContent="center"
                      alignItems="center"
                    >
                      {el.checkIcon ? (
                        <Text fontSize="1.2em">{el.text5}</Text>
                      ) : (
                        <Text fontSize="1em">{el.text5}</Text>
                      )}
                    </Flex>
                  </Flex>
                ))}
            </Flex>
          </Flex>
        </Box>
        <Flex
          mt="2.3rem"
          gap="2rem"
          // border="1px solid red"
          justifyContent="center"
          alignItems="center"
        >
          {cardPlan &&
            cardPlan?.map((el) => (
              <Box
                onClick={() => handleClick(el.quality)}
                borderRadius="8px"
                height="8em"
                border={
                  obj[el.quality]
                    ? "2px solid rgb(167, 133, 255)"
                    : "2px solid #4F4F4F"
                }
                width="11.3em"
                position="relative"
                key={el.id}
                transition="all 0.2s ease-in-out"
                zIndex="12"
              >
                <Flex
                  flexDir="column"
                  zIndex="10"
                  position="relative"
                  pt="1em"
                  justifyContent="space-evenly"
                  height="100%"
                >
                  <Text zIndex="10">{el.quality}</Text>
                  {el.actualPrice !== "₹0" && (
                    <Text
                      zIndex="10"
                      fontSize="0.7rem"
                      textDecoration="line-through"
                    >
                      {el.actualPrice}
                    </Text>
                  )}
                  <Text zIndex="10" fontSize="1.4em" fontWeight="600">
                    {el.price}
                  </Text>
                  <Text zIndex="10">{el.duration}</Text>
                  {el.discount !== "0%" && (
                    <Text
                      position="absolute"
                      top="0"
                      left="0"
                      background="#2F80ED"
                      borderRadius="5px"
                      fontSize="0.7em"
                      width="34%"
                      zIndex="10"
                      borderTopStartRadius="6.3px"
                    >
                      {el.discount} save
                    </Text>
                  )}
                  <Text
                    display={el.sug ? "block" : "none"}
                    position="absolute"
                    top="-1.6rem"
                    left="28%"
                    background="linear-gradient(270deg,#5730c7,#5c2ade 48.11%,#2928D4 94.83%)"
                    zIndex="10"
                    fontSize="0.8em"
                    p="0.15rem 0.55rem"
                    borderRadius="5px"
                    borderBottomLeftRadius="2px"
                    borderBottomRightRadius="2px"
                  >
                    {el.sug}
                  </Text>
                </Flex>
                <Box
                  zIndex="8"
                  display={obj[el.quality] ? "block" : "none"}
                  background="linear-gradient(270deg, rgba(87, 48, 199, 0.4), rgba(92, 42, 222, 0.4) 48.11%, rgba(41, 40, 212, 0.4) 94.83%)"
                  height="85%"
                  borderRadius="15px 0px 48px 160px"
                  position="absolute"
                  width="100%"
                  left="0"
                  top="0"
                >
                  <Box
                    background="linear-gradient(270deg, rgba(87, 48, 199, 0.4), rgba(92, 42, 222, 0.4) 48.11%, rgba(41, 40, 212, 0.4) 94.83%)"
                    height="80%"
                    borderRadius="20px 0px 48px 160px"
                  ></Box>
                </Box>
              </Box>
            ))}
        </Flex>
        <Flex
          alignItems="center"
          p="0.5em 3%"
          justifyContent="space-between"
          backgroundColor="#1D1425"
          borderRadius="calc(1/3)em"
          m="1em 0rem"
          cursor="not-allowed"
        >
          <Flex gap="0.6rem" justifyContent="center" alignItems="center">
            <Image
              src="https://www.zee5.com/webapp-assets/images/applyCode.svg"
              alt="percentage"
            />
            <Text>Apply code</Text>
          </Flex>
          <ChevronRightIcon width="1.3rem" height="1.3rem" />
        </Flex>
        <Text fontSize="0.85em" mt="1rem" textAlign="left" color="grey">
          4K plan is supported on 4K TVs and Connected devices only. See our
          Terms of Use for more details.
        </Text>
        <Flex
          alignItems="center"
          p="0.5rem 3%"
          justifyContent="space-between"
          backgroundColor="#1D1425"
          borderRadius="5px"
          height="6.5rem"
          position={{ base: "fixed", sm: "fixed", md: "absolute" }}
          bottom="0"
          left="0"
          right="0"
          zIndex="1000"
          // cursor="not-allowed"
        >
          <Flex flex="1" justifyContent="center" alignItems="center">
            <Text fontWeight="600" fontSize="1.1em">
              Pay using UPI
            </Text>
            <ChevronUpIcon width="1.7rem" height="1.7rem" />
          </Flex>
          <Flex
            borderRadius="5px"
            justifyContent="center"
            alignItems="center"
            flex="2.5"
            height="60%"
            color="white"
            bgColor="#8330C6"
            fontWeight="600"
            fontSize="1em"
            cursor="pointer"
            onClick={handlePay}
          >
            Buy Premium
          </Flex>
        </Flex>
      </Box>
    </Flex>
  );
};

export default Payment;
