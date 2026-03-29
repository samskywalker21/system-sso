import { Divider, Flex, Grid, Stack, Title, Text } from '@mantine/core'
import { Circle } from 'lucide-react'

const DOHHeader = () => {
  return (
    <Flex direction='row' gap='md'>
      <Grid>
        <Circle size='60px' />
        <Circle size='60px' />
      </Grid>
      <Divider orientation='vertical' />
      <Stack justify='center' gap='0'>
        <Title order={3}>DEPARTMENT OF HEALTH</Title>
        <Text fw='normal' fz='xs'>
          Center for Health Development - Northern Mindanao
        </Text>
      </Stack>
    </Flex>
  )
}

export default DOHHeader
