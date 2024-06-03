import { Avatar, Card, Flex, MantineProvider, Stack, Transition } from "@mantine/core";
import { Action, PlayersCount } from "./components";
import type { ActionProps } from "./components/Action";
import { useKeepValueDebounce, useNuiEvent, useNuiEvents, useTheme } from "./hooks";

import "@mantine/core/styles.css";
import logo from '../public/logo.png';

export type StateProps = {
  players: number,
  maxPlayers: number,
  currentCops: number,
  requiredCops: { [key: string]: ActionProps['requiredCop'] }
} 

export default function App() {
  const { items } = useNuiEvent<{ items: { [key: string]: string } }>('setup', (_, action) => action, { items: {} });
  const data = useNuiEvents<StateProps | undefined>(['open', 'close'], (_, action) => Object.keys(action!).length ? action : undefined, undefined);
  const debouncedData = useKeepValueDebounce(data, 410);
  const theme = useTheme({});

  return <MantineProvider defaultColorScheme="dark" theme={theme}>
    <Flex style={{ height: '100vh' }} justify='end' align='center'>
      <Transition
        mounted={data != undefined}
        exitDuration={400}
        transition="fade"
        duration={400}
        timingFunction="ease"
      >
        {(styles) => <div style={styles}>
          {debouncedData && <Card shadow='sm' padding='lg' mx='md' radius='lg' style={{ overflow: 'visible' }}>
            <Card.Section mb={6} pos='relative' h='32' display='flex' style={{ justifyContent: 'center' }}>
              <Avatar src={logo} style={{ position: "absolute", bottom: 0 }} size='lg' />
            </Card.Section>
            <Stack gap='sm'>
              {Object.keys(items).sort().filter((key) => debouncedData.requiredCops[key]).map((key) =>
                <Action key={key} currentCops={debouncedData.currentCops!} label={items[key]} requiredCop={debouncedData.requiredCops[key]} />
              )}
            </Stack>
            <Card.Section mt={6} mb={1}>
              <PlayersCount players={debouncedData.players} maxPlayers={debouncedData.maxPlayers} />
            </Card.Section>
          </Card>}
        </div>}
      </Transition>
    </Flex>
  </MantineProvider>;
}
