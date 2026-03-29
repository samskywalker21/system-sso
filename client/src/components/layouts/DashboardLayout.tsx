import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Flex } from '@mantine/core'
import { Outlet } from '@tanstack/react-router'

const DashboardLayout = () => {
  const [mobileOpened, { toggle }] = useDisclosure(false)

  return (
    <AppShell
      layout='alt'
      navbar={{
        width: 200,
        breakpoint: 'sm',
        collapsed: { mobile: !mobileOpened },
      }}
      padding={'md'}
      transitionDuration={400}
      transitionTimingFunction='ease'
    >
      <AppShell.Navbar>
        <Flex p='md'>
          <Burger size='sm' hiddenFrom='sm' onClick={toggle} opened={mobileOpened} />
        </Flex>
      </AppShell.Navbar>
      <AppShell.Main>
        <Burger size='sm' hiddenFrom='sm' onClick={toggle} opened={mobileOpened} />
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default DashboardLayout
