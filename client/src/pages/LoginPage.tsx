import LoginCard from '#/components/login/LoginCard'

const LoginPage = () => {
  return (
    <div className='flex min-h-screen items-center justify-center'>
      <div className='hidden md:flex'>
        <LoginCard />
      </div>
      <div className='md:hidden'></div>
    </div>
  )
}

export default LoginPage
