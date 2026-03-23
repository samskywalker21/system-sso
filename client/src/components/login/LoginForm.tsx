import { useState } from 'react'
import { useForm, Controller, type SubmitHandler } from 'react-hook-form'
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupInput,
} from '@/components/ui/input-group'
import { Button } from '@/components/ui/button'
import useLogin from '#/hooks/useLogin'
import { CircleUser, KeyRound, Eye, EyeClosed, LogIn } from 'lucide-react'

interface LoginFormData {
  username: string
  password: string
}

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false)

  const loginQuery = useLogin()

  const { handleSubmit, control, reset } = useForm<LoginFormData>({
    defaultValues: {
      username: '',
      password: '',
    },
  })

  const passToggle = () => {
    setShowPass((prev) => !prev)
  }

  const submitHandler: SubmitHandler<LoginFormData> = (data) => {
    loginQuery.mutate(data)
    reset()
  }

  return (
    <>
      <form onSubmit={handleSubmit(submitHandler)}>
        <FieldSet>
          <FieldGroup>
            <Controller
              name='username'
              control={control}
              render={({ field }) => (
                <Field className='gap-1'>
                  <FieldLabel htmlFor={field.name}>Username</FieldLabel>
                  <InputGroup className='h-10'>
                    <InputGroupInput type='text' {...field} disabled={loginQuery.isPending} />
                    <InputGroupAddon>
                      <CircleUser className='size-5' />
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )}
            />
            <Controller
              name='password'
              control={control}
              render={({ field }) => (
                <Field className='gap-1'>
                  <FieldLabel htmlFor={field.name}>Password</FieldLabel>
                  <InputGroup>
                    <InputGroupInput
                      type={showPass ? 'text' : 'password'}
                      {...field}
                      disabled={loginQuery.isPending}
                    />
                    <InputGroupAddon>
                      <KeyRound className='size-5' />
                    </InputGroupAddon>
                    <InputGroupAddon align='inline-end'>
                      <InputGroupButton onClick={passToggle}>
                        {showPass ? <Eye className='size-5' /> : <EyeClosed className='size-5' />}
                      </InputGroupButton>
                    </InputGroupAddon>
                  </InputGroup>
                </Field>
              )}
            />
            <Button
              type='submit'
              variant='default'
              className='font-bold'
              disabled={loginQuery.isPending}
            >
              <LogIn className='size-5' />
              SIGN IN
            </Button>
          </FieldGroup>
        </FieldSet>
      </form>
    </>
  )
}

export default LoginForm
