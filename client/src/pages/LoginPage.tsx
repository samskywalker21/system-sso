import { Button, Card, Flex, Text, Title } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import DOHHeader from '#/components/layouts/DOHHeader'
import LoginForm from '#/components/forms/LoginForm'

const LoginPage = () => {
  return (
    <Flex justify='center' align='center' mih='100dvh'>
      <Card miw='500px' p='xl' visibleFrom='xs' shadow='lg' withBorder radius='lg'>
        <DOHHeader />
        <Flex justify='center' py='2rem'>
          <Title order={2}>Single Sign-On Service</Title>
        </Flex>
        <LoginForm />
        <Flex pt='2rem' align={'center'} justify={'center'} gap={'0.5rem'}>
          <Text>No account?</Text>
          <Button
            variant='transparent'
            renderRoot={(props) => <Link to='/register' {...props} />}
            px={'0'}
          >
            Sign Up
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}

export default LoginPage
