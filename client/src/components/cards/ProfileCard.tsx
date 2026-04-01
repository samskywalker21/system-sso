import { Card, Stack, Title, TextInput, Button } from '@mantine/core'
import { useForm } from '@mantine/form'

interface IProfileForm {
  fname: string
  mname: string
  lname: string
}

const ProfileCard = () => {
  const form = useForm<IProfileForm>({
    mode: 'controlled',
  })

  const submitHandler = (values: IProfileForm) => {
    console.log(values)
  }

  return (
    <Card miw={'300px'} w={'500px'} shadow='lg' withBorder>
      <Stack>
        <Title size={'1.5rem'}>Profile</Title>
        <form onSubmit={form.onSubmit(submitHandler)}>
          <Stack gap={'lg'}>
            <TextInput
              label='First Name'
              key={form.key('fname')}
              {...form.getInputProps('fname')}
            />
            <TextInput
              label='Middle Name'
              key={form.key('mname')}
              {...form.getInputProps('mname')}
            />
            <TextInput label='Last Name' key={form.key('lname')} {...form.getInputProps('lname')} />
            <Button type='submit'>Edit</Button>
          </Stack>
        </form>
      </Stack>
    </Card>
  )
}

export default ProfileCard
