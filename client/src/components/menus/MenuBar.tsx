import { Flex, Group, Menu, ActionIcon, useMantineColorScheme } from '@mantine/core'
import { CircleUserRound, LogOut, SunMoon } from 'lucide-react'

const MenuBar = () => {
  const { toggleColorScheme } = useMantineColorScheme()

  return (
    <Group>
      <Menu>
        <Menu.Target>
          <ActionIcon variant='transparent'>
            <CircleUserRound />
          </ActionIcon>
        </Menu.Target>
        <Menu.Dropdown>
          <Menu.Item leftSection={<CircleUserRound size={'1rem'} />}>Profile</Menu.Item>
          <Menu.Item leftSection={<LogOut size={'1rem'} />}>Sign Out</Menu.Item>
        </Menu.Dropdown>
      </Menu>

      <ActionIcon variant='transparent' onClick={toggleColorScheme}>
        <SunMoon />
      </ActionIcon>
    </Group>
  )
}

export default MenuBar
