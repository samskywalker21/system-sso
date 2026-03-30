import { useDisclosure } from '@mantine/hooks'
import { AppShell, Burger, Flex, Text } from '@mantine/core'
import NavBarMenu from '#/components/menus/NavBarMenu'
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
        <Flex p='md' hiddenFrom='sm'>
          <Burger size='sm' onClick={toggle} opened={mobileOpened} />
        </Flex>
        <NavBarMenu />
      </AppShell.Navbar>
      <AppShell.Main>
        <Flex bd={'1px white solid'}>
          <Burger size='sm' hiddenFrom='sm' onClick={toggle} opened={mobileOpened} />
          <Flex align={'center'} direction={'row-reverse'} bd={'1px green solid'} w={'100%'}>
            <Text>test</Text>
          </Flex>
        </Flex>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  )
}

export default DashboardLayout
