import { Card, CardBody, Skeleton, SkeletonText } from '@chakra-ui/react'
import React from 'react'

const GameCardLoadingSkeleton = () => {
  return (
    <Card width='500px' borderRadius={10} overflow="hidden">
        <Skeleton height={'400px'}/>
        <CardBody>
            <SkeletonText/>
        </CardBody>
    </Card>
  )
}

export default GameCardLoadingSkeleton