import LoginCard from '#/components/login/LoginCard'
import LoginMobile from '#/components/login/LoginMobile'

const LoginPage = () => {
  return (
    <div>
      <div className='hidden min-h-screen items-center justify-center md:flex'>
        <LoginCard />
      </div>
      <div className='flex min-h-screen min-w-full flex-col md:hidden'>
        <LoginMobile />
      </div>
    </div>
  )
}

export default LoginPage
