import { Flex, Card, Title, Text, Button } from '@mantine/core'
import { Link } from '@tanstack/react-router'
import RegistrationForm from '#/components/forms/RegistrationForm'
import { ArrowBigLeft } from 'lucide-react'

const RegisterPage = () => {
  return (
    <Flex justify='center' align='center' mih='100dvh'>
      <Card miw={'600px'} p='xl' visibleFrom='xs' shadow='lg' withBorder radius='lg'>
        <Flex justify='start' pb={'2rem'}>
          <Title order={3}>Sign Up Form</Title>
        </Flex>
        <RegistrationForm />
        <Flex pt='2rem' align={'center'} justify={'start'}>
          <Button variant='transparent' renderRoot={(props) => <Link to='/' {...props} />}>
            <ArrowBigLeft size={'1rem'} style={{ marginRight: '0.5rem' }} />
            Back to Login
          </Button>
        </Flex>
      </Card>
    </Flex>
  )
}

export default RegisterPage
