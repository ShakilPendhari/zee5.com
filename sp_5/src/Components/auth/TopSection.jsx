import { Heading, Text } from '@chakra-ui/react'
import React from 'react'
import style from "./../../style/ComponentElement/login.module.css"

const TopSection = ({heading,text}) => {
  return (
    <>
        <Heading
        fontSize={{base:"1.3rem",sm:"1.6rem",md:"1.8rem"}}
        p="0rem 0rem 0.5rem"
        lineHeight={"1.35rem"}
        className={style.mainHead}
        as="h4"
      >
       {heading}
      </Heading>
      <Text
        w="85%"
        fontWeight="500"
        textAlign="center"
        className={style.subhead}
      >
       {text}
      </Text>
    </>
  )
}

export default TopSection