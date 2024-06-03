import { Flex, Text } from "@mantine/core"
import { MdPeople } from "react-icons/md"
import type { StateProps } from "../App"

export default function PlayersCount({ players, maxPlayers }: Pick<StateProps, 'players' | 'maxPlayers'>) {
  return <Flex justify='center' align='start' gap='sm'>
    <MdPeople size={24} /> <Text size='md'>{players} / {maxPlayers}</Text>
  </Flex>
}
