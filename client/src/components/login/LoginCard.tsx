import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Circle } from 'lucide-react'
import LoginForm from './LoginForm'

const LoginCard = () => {
  return (
    <Card className='w-125'>
      <CardHeader>
        <div className='flex gap-2'>
          <div className='flex'>
            <Circle size='60px' />
            <Circle size='60px' />
          </div>
          <Separator orientation='vertical' className='border' />
          <div className='flex flex-col justify-center gap-0'>
            <p className='text-lg font-bold'>DEPARTMENT OF HEALTH</p>
            <p className='text-xs'>Center for Health Development - Northern Mindanao</p>
          </div>
        </div>
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
          <Button variant='link' className='text-green-500'>
            Sign Up
          </Button>
        </p>
      </CardFooter>
    </Card>
  )
}

export default LoginCard
