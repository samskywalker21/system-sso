import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Flex } from '@mantine/core'
import NavBarMenu from '#/components/menus/NavBarMenu'
import { Outlet } from '@tanstack/react-router'
import MenuBar from '../menus/MenuBar'

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
      padding='md'
      transitionDuration={400}
      transitionTimingFunction='ease'
    >
      <AppShell.Navbar>
        <Flex p='md' hiddenFrom='sm'>
          <Burger size='sm' onClick={toggle} opened={mobileOpened} />
        </Flex>
        <NavBarMenu />
      </AppShell.Navbar>
      <AppShell.Main>
        <Flex p='md'>
          <Burger size='sm' hiddenFrom='sm' onClick={toggle} opened={mobileOpened} />
          <Flex direction={'row-reverse'} w={'100%'} align={'center'} visibleFrom='sm'>
            <MenuBar />
          </Flex>
        </Flex>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default DashboardLayout
