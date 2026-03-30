import { Divider, Flex, Grid, Stack, Title, Text, Image } from '@mantine/core'
import dohLogo from '#/assets/dohLogo.png'
import regionLogo from '#/assets/regionLogo.png'

const DOHHeader = () => {
  return (
    <Flex direction='row' gap='md'>
      <Grid>
        <Image src={dohLogo} w='60' />
        <Image src={regionLogo} w='60' />
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
