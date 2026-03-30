import { AppShell, ScrollArea, NavLink } from '@mantine/core'
import { Link, useNavigate } from '@tanstack/react-router'
import { useMutation, useSuspenseQuery } from '@tanstack/react-query'
import { userRoleQuery, logOutQuery } from '#/utils/queryOptions'
import NavBarHeader from '../layouts/NavBarHeader'
import { User } from 'lucide-react'
import { useEffect } from 'react'

const NavBarMenu = () => {
  const nav = useNavigate()

  const {
    data: {
      data: {
        data: { accessLevel },
      },
    },
  } = useSuspenseQuery(userRoleQuery)

  const query = useMutation(logOutQuery)

  useEffect(() => {
    if (query.isSuccess) {
      localStorage.removeItem('access_token')
    }
    nav({ to: '/' })
  }, [query])

  const logOut = () => {
    query.mutate()
  }

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
        <NavLink label='Sign Out' leftSection={<User size='1rem' />} onClick={logOut} />
      </AppShell.Section>
    </>
  )
}

export default NavBarMenu
