import { AppShell, ScrollArea, NavLink, Flex } from '@mantine/core'
import { Link, useNavigate } from '@tanstack/react-router'
import { useSuspenseQuery } from '@tanstack/react-query'
import { userRoleQuery } from '#/utils/queryOptions'
import NavBarHeader from '../layouts/NavBarHeader'
import MenuBar from './MenuBar'

const NavBarMenu = () => {
  const nav = useNavigate()

  const {
    data: {
      data: {
        data: { accessLevel },
      },
    },
  } = useSuspenseQuery(userRoleQuery)

  return (
    <>
      <NavBarHeader />
      <AppShell.Section grow component={ScrollArea}>
        <NavLink component={Link} to='/home' label='Home' />
        <NavLink label='Administrator' display={accessLevel <= 1 ? 'flex' : 'hidden'}>
          <NavLink label='User/Profiles' />
          <NavLink label='Roles' />
          <NavLink label='Sections' />
          <NavLink label='Departments' />
          <NavLink label='Systems' />
        </NavLink>
      </AppShell.Section>
      <AppShell.Section>
        <Flex p={'md'} direction={'column-reverse'} hiddenFrom='sm'>
          <MenuBar />
        </Flex>
      </AppShell.Section>
    </>
  )
}

export default NavBarMenu
