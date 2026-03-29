// Import styles of packages that you've installed.
// All packages except `@mantine/hooks` require styles imports
// Supports weights 100-900
import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'
import '@fontsource-variable/inter/wght.css'

import { createTheme, MantineProvider, type MantineColorsTuple } from '@mantine/core'
import { Notifications } from '@mantine/notifications'

const primeGreen: MantineColorsTuple = [
  '#edfcf3',
  '#daf7e5',
  '#b0f0c6',
  '#83e9a6',
  '#60e38a',
  '#4bdf79',
  '#40de6f',
  '#33c45e',
  '#28ae52',
  '#031409',
]

const theme = createTheme({
  focusRing: 'auto',
  colors: {
    primeGreen,
  },
  primaryColor: 'green',
  autoContrast: true,
  luminanceThreshold: 0.45,
  defaultRadius: 'md',
  fontFamily: 'Inter Variable',
  headings: {
    fontFamily: 'Inter Variable',
  },
})

const MantineThemeComponent = ({ children }: { children: React.ReactNode }) => {
  return (
    <MantineProvider theme={theme} defaultColorScheme='auto'>
      <Notifications />
      {children}
    </MantineProvider>
  )
}

export default MantineThemeComponent
