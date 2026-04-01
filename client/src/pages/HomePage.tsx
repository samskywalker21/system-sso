import ProfileCard from '#/components/cards/ProfileCard'
import { Flex } from '@mantine/core'

const HomePage = () => {
  return (
    <Flex
      gap={'md'}
      direction={{
        base: 'column',
        sm: 'row',
      }}
      align={'center'}
      p='md'
    >
      <ProfileCard />
    </Flex>
  )
}

export default HomePage
