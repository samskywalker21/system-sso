import { Separator } from '@/components/ui/separator'
import dohLogo from '#/assets/doh-logo.png'
import regionLogo from '#/assets/doh-regional-logo.png'

const LoginHeader = () => {
  return (
    <div className='flex gap-2'>
      <div className='flex'>
        <img src={dohLogo} className='size-15' />
        <img src={regionLogo} className='size-15'/>
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
