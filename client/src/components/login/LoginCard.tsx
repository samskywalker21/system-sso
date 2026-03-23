import { Link } from '@tanstack/react-router'
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import LoginHeader from './LoginHeader'
import LoginForm from './LoginForm'

const LoginCard = () => {
  return (
    <Card className='w-125'>
      <CardHeader>
        <LoginHeader />
      </CardHeader>
      <CardContent>
        <div className='flex flex-col items-center py-6'>
          <p className='text-2xl font-bold'>Single Sign-On Service</p>
        </div>
        <LoginForm />
      </CardContent>
      <CardFooter className='justify-center'>
        <p className='text-center'>
          No account?{' '}
          <Button variant='link' className='text-green-500' asChild>
            <Link to='/register'>Sign Up</Link>
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}

export default LoginCard
