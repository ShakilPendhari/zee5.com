import React from 'react'
import { Skeleton, Stack, Heading} from '@chakra-ui/react'

const Loading = () => {
  return (
    <Stack>
  <Skeleton isLoaded height='20px' />
  <Skeleton isLoaded height='20px' />
  <Skeleton isLoaded height='20px' />
</Stack>
  )
}

export default Loading