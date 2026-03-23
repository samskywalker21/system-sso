import { Separator } from '@/components/ui/separator'
import { Circle } from 'lucide-react'

const LoginHeader = () => {
  return (
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
  )
}

export default LoginHeader
