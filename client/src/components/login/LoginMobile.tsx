import LoginHeaderMobile from '#/components/login/LoginHeaderMobile'
import LoginForm from '#/components/login/LoginForm'
import { Button } from '@/components/ui/button'
import { Link } from '@tanstack/react-router'

const LoginMobile = () => {
  return (
    <>
      <LoginHeaderMobile />
      <div className='py-5 text-center text-2xl font-bold'>
        <p>Single Sign-On Service</p>
      </div>
      <div className='px-4'>
        <LoginForm />
      </div>
      <div className='items-center justify-center py-5 text-center'>
        <p>
          No account?{' '}
          <Button variant='link' className='text-green-500' asChild>
            <Link to='/register'>Sign up</Link>
          </Button>
        </p>
      </div>
    </>
  )
}

export default LoginMobile
