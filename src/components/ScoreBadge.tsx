import { Badge } from '@chakra-ui/react'


interface Props {
    score: number;
}

const ScoreBadge = ( { score } : Props) => {
    let color = score > 90 ? 'green' : score < 80 ? 'yellow' : '';
  return (
    <Badge colorScheme={color} fontSize='14px' borderRadius={3} paddingY={3}>
        {score}
    </Badge>
  )
}

export default ScoreBadge