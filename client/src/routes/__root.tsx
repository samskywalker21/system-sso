import { Outlet, createRootRouteWithContext } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import { QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtoolsPanel } from '@tanstack/react-query-devtools'
import MantineThemeComponent from '#/components/MantineThemeComponent'

interface MyRouterContext {
  queryClient: QueryClient
}

export const Route = createRootRouteWithContext<MyRouterContext>()({
  component: RootComponent,
})

function RootComponent() {
  return (
    <>
      <MantineThemeComponent>
        <Outlet />
      </MantineThemeComponent>
      <TanStackDevtools
        config={{
          position: 'bottom-right',
          defaultOpen: false,
        }}
        plugins={[
          {
            name: 'Router',
            render: <TanStackRouterDevtoolsPanel />,
          },
          {
            name: 'Query',
            render: <ReactQueryDevtoolsPanel />,
          },
        ]}
      />
    </>
  )
}
