import { Separator } from '@/components/ui/separator'
import regionLogo from '#/assets/doh-regional-logo.png'
import dohLogo from '#/assets/doh-logo.png'

const LoginHeaderMobile = () => {
  return (
    <div className='flex items-center justify-start gap-2 p-3'>
      <div className='flex'>
        <img src={dohLogo} className='size-15' />
        <img src={regionLogo} className='size-15' />
      </div>
      <Separator orientation='vertical' className='border' />
      <div className='flex flex-col justify-center gap-0'>
        <p className='text-xs font-bold'>DEPARTMENT OF HEALTH</p>
        <p className='text-[0.37rem]'>Center for Health Development - Northern Mindanao</p>
      </div>
    </div>
  )
}

export default LoginHeaderMobile
