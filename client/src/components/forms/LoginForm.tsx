import { TextInput, PasswordInput, Stack, Button } from '@mantine/core'
import { useForm, isNotEmpty } from '@mantine/form'
import { CircleUser, KeySquare, LogIn } from 'lucide-react'
import useLogin from '#/hooks/useLogin'

const LoginForm = () => {
  const form = useForm({
    mode: 'uncontrolled',
    initialValues: {
      username: '',
      password: '',
    },
    clearInputErrorOnChange: true,
    onSubmitPreventDefault: 'always',
    validate: {
      username: isNotEmpty('Username must not be empty.'),
      password: isNotEmpty('Password must not be empty.'),
    },
  })

  const query = useLogin()

  const submitHandler = (values: typeof form.values) => {
    query.mutate(values)
    if (query.isSuccess) {
      form.reset()
    }
  }

  return (
    <>
      <form onSubmit={form.onSubmit(submitHandler)}>
        <Stack gap='lg'>
          <TextInput
            label='Username'
            key={form.key('username')}
            disabled={query.isSuccess || query.isPending}
            {...form.getInputProps('username')}
            leftSection={<CircleUser size={'1rem'} />}
          />
          <PasswordInput
            label='Password'
            key={form.key('password')}
            disabled={query.isSuccess || query.isPending}
            {...form.getInputProps('password')}
            leftSection={<KeySquare size={'1rem'} />}
          />
          <Button type='submit' disabled={query.isSuccess || query.isPending}>
            <LogIn size={'1rem'} style={{ marginRight: '0.5rem' }} />
            Sign In
          </Button>
        </Stack>
      </form>
    </>
  )
}

export default LoginForm
