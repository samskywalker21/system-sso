import { Flex, Group, Image, Stack, Text, Title } from '@mantine/core'
import dohLogo from '#/assets/dohLogo.png'
import regionLogo from '#/assets/regionLogo.png'

const NavBarHeader = () => {
  return (
    <Flex direction='column' gap='sm' py='1rem'>
      <Group gap='0.2rem' justify='center' align='center' w='100%'>
        <Image src={dohLogo} w='3rem' />
        <Image src={regionLogo} w='3rem' />
      </Group>
      <Stack gap={0} align='center'>
        <Title size='0.9rem'>DEPARTMENT OF HEALTH</Title>
        <Text size='0.5rem' fw='lighter'>
          Center for Health Development - Northern Mindanao
        </Text>
      </Stack>
      <Flex align='center' justify='center' py='md'>
        <Title size='1rem'>Single Sign-On Service</Title>
      </Flex>
    </Flex>
  )
}

export default NavBarHeader
