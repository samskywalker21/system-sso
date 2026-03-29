import {
  Button,
  Divider,
  Group,
  PasswordInput,
  Stack,
  TextInput,
  Title,
  Select,
} from '@mantine/core'
import { isNotEmpty, useForm } from '@mantine/form'
import { UserPlus } from 'lucide-react'
import type { IRegistrationFrom } from '#/utils/Interfaces'
import { useSuspenseQuery } from '@tanstack/react-query'
import { sectionListQuery } from '#/utils/queryOptions'
import { flattenSelectOptions } from '#/utils/helperFunctions'
import useRegister from '#/hooks/useRegister'

const RegistrationForm = () => {
  const sectionsQuery = useSuspenseQuery(sectionListQuery)
  const registerQuery = useRegister()
  const sections = sectionsQuery.data.data.data

  const ord = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Office of the Regional/Assistant Regional Director',
    'divisionId',
    1
  )

  const msd = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Management Support Division',
    'divisionId',
    2
  )

  const lhsd = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Local Health Support Division',
    'divisionId',
    3
  )

  const rled = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Regulations, Licensing, and Enforcement Division',
    'divisionId',
    4
  )

  const pcdoho = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Provincial/City DOH Office',
    'divisionId',
    5
  )

  const others = flattenSelectOptions(
    sections,
    'id',
    'sectionName',
    true,
    'Others',
    'divisionId',
    6
  )

  const selectOptions = [ord, msd, lhsd, rled, pcdoho, others]

  const form = useForm<IRegistrationFrom>({
    mode: 'uncontrolled',
    initialValues: {
      fname: '',
      mname: '',
      lname: '',
      position: '',
      sectionId: '',
      username: '',
      password: '',
      confirmPassword: '',
    },
    validateInputOnBlur: true,
    clearInputErrorOnChange: true,
    validate: {
      fname: isNotEmpty('First Name must not be empty.'),
      lname: isNotEmpty('Last Name must not be empty.'),
      position: isNotEmpty('Position must not be empty.'),
      sectionId: isNotEmpty('Section must be selected.'),
      username: isNotEmpty('Username must not be empty.'),
      password: isNotEmpty('Password must not be empty.'),
      confirmPassword: (value, values) => {
        if (!value) {
          return 'Password must not be empty'
        }
        if (value !== values.password) {
          return 'Passwords do not match'
        }
      },
    },
  })

  const submitHandler = (values: IRegistrationFrom) => {
    const submitData = { ...values, sectionId: Number(values.sectionId) }
    registerQuery.mutate(submitData)
    if (registerQuery.isSuccess) {
      form.reset()
    }
  }

  return (
    <form onSubmit={form.onSubmit(submitHandler)}>
      <Stack gap='lg'>
        <Title order={4}>Profile</Title>
        <Group>
          <TextInput
            label='First Name'
            key={form.key('fname')}
            {...form.getInputProps('fname')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
          <TextInput
            label='Middle Name'
            key={form.key('mname')}
            {...form.getInputProps('mname')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
          <TextInput
            label='Last Name'
            key={form.key('lname')}
            {...form.getInputProps('lname')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
        </Group>
        <Divider />
        <Title order={4}>Position and Section</Title>
        <Group grow>
          <TextInput
            label='Position'
            key={form.key('position')}
            {...form.getInputProps('position')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
          <Select
            label='Section'
            searchable
            nothingFoundMessage='No section found.'
            withAlignedLabels
            checkIconPosition='right'
            data={selectOptions}
            key={form.key('sectionId')}
            {...form.getInputProps('sectionId')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
        </Group>
        <Divider />
        <Group grow>
          <TextInput
            label='Username'
            key={form.key('username')}
            {...form.getInputProps('username')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
          <PasswordInput
            label='Password'
            key={form.key('password')}
            {...form.getInputProps('password')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
          <PasswordInput
            label='Confirm Password'
            key={form.key('confirmPassword')}
            {...form.getInputProps('confirmPassword')}
            disabled={registerQuery.isSuccess || registerQuery.isPending}
          />
        </Group>
        <Button type='submit' disabled={registerQuery.isSuccess || registerQuery.isPending}>
          <UserPlus size={'1rem'} style={{ marginRight: '0.5rem' }} />
          Sign Up
        </Button>
      </Stack>
    </form>
  )
}

export default RegistrationForm
