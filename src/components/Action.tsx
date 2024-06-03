import { Flex, Text } from "@mantine/core"
import { MdCheck, MdClose } from "react-icons/md"

export interface ActionProps {
  requiredCop?: {
    minimumPolice: number
    busy?: boolean,
  }
  label: string,
  currentCops: number
}

export default function Action({ requiredCop, label, currentCops }: ActionProps) {
  return requiredCop && currentCops ? <Flex justify='space-between' align='center' gap='xl'>
    <Text size='md'>{label}</Text> {requiredCop.busy || requiredCop.minimumPolice > currentCops ? <MdClose size={24} /> : <MdCheck size={20} />}
  </Flex> : null
}
