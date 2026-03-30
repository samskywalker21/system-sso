import { Card, Flex, Stack, Title } from '@mantine/core'

const HomePage = () => {
  return (
    <Flex
      gap={'md'}
      direction={{
        base: 'column',
        sm: 'row',
      }}
      align={'center'}
    >
      <Card w='500px'>
        <Stack>
          <Title size={'1.5rem'}>Profile</Title>
        </Stack>
      </Card>
      <Card w='500px'>
        <Stack>
          <Title size={'1.5rem'}>Credentials</Title>
        </Stack>
      </Card>
      <Card w='500px'>
        <Stack>
          <Title size={'1.5rem'}>Roles</Title>
        </Stack>
      </Card>
    </Flex>
  )
}

export default HomePage
